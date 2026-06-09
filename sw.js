const CACHE_NAME = 'echoes-of-greece-v1';
const ASSETS_TO_CACHE = [
    './',
    'index.html',
    'style.css',
    'app.js',
    'fonts/fonts.css',
    'fonts/cinzel-500.ttf',
    'fonts/cinzel-700.ttf',
    'fonts/cinzel-800.ttf',
    'fonts/outfit-300.ttf',
    'fonts/outfit-400.ttf',
    'fonts/outfit-600.ttf',
    'fonts/outfit-700.ttf'
];

const EXTERNAL_ASSETS_TO_CACHE = [
    new Request('https://unpkg.com/leaflet@1.9.4/dist/leaflet.css', {
        integrity: 'sha256-p4NxAoJBhIIN+hmNHrzRCf9tD/miZyoHS5obTRR9BMY=',
        mode: 'cors'
    }),
    new Request('https://unpkg.com/leaflet@1.9.4/dist/leaflet.js', {
        integrity: 'sha256-20nQCchB9co0qIjJZRGuk2/Z9VM+kNiyxNV1lvTlZBo=',
        mode: 'cors'
    })
];

// Install Event
self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME).then((cache) => {
            return Promise.all([
                cache.addAll(ASSETS_TO_CACHE),
                cache.addAll(EXTERNAL_ASSETS_TO_CACHE)
            ]);
        })
    );
});

// Activate Event
self.addEventListener('activate', (event) => {
    event.waitUntil(
        caches.keys().then((keys) => {
            return Promise.all(
                keys.map((key) => {
                    if (key !== CACHE_NAME) {
                        return caches.delete(key);
                    }
                })
            );
        })
    );
});

// Fetch Event (Cache-first with network fallback)
self.addEventListener('fetch', (event) => {
    // Avoid caching POST or external API queries that might fail
    if (event.request.method !== 'GET') return;

    event.respondWith(
        caches.match(event.request).then((cachedResponse) => {
            if (cachedResponse) {
                return cachedResponse;
            }
            return fetch(event.request).then((networkResponse) => {
                // If it's a valid internal asset response, cache it
                if (networkResponse.status === 200) {
                    const responseClone = networkResponse.clone();
                    caches.open(CACHE_NAME).then((cache) => {
                        cache.put(event.request, responseClone);
                    });
                }
                return networkResponse;
            }).catch((err) => {
                // Offline fallback response instead of returning undefined
                const acceptHeader = event.request.headers.get('accept');
                if (acceptHeader && acceptHeader.includes('text/html')) {
                    return caches.match('index.html');
                }
                return new Response('Network connection failed or resource unavailable', {
                    status: 503,
                    statusText: 'Service Unavailable',
                    headers: new Headers({ 'Content-Type': 'text/plain' })
                });
            });
        })
    );
});
