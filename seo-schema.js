(function injectStructuredData() {
    const origin = "https://echoes-of-athens.vercel.app";
    const schemas = [
        {
            "@context": "https://schema.org",
            "@type": "WebApplication",
            "name": "Echoes of Athens",
            "alternateName": "Echoes of Athens Audio Guide",
            "url": origin + "/",
            "applicationCategory": "TravelApplication",
            "operatingSystem": "Any (Progressive Web App)",
            "inLanguage": "en",
            "isAccessibleForFree": true,
            "description": "Free GPS audio guide to 355 historical sites, Byzantine churches, monasteries, and natural places across Athens and Attica, Greece.",
            "image": origin + "/og-image.jpg",
            "offers": {
                "@type": "Offer",
                "price": "0",
                "priceCurrency": "EUR"
            },
            "provider": {
                "@type": "Organization",
                "name": "Echoes of Athens",
                "url": origin + "/"
            }
        },
        {
            "@context": "https://schema.org",
            "@type": "TouristTrip",
            "name": "Self-guided audio tour of Athens and Attica",
            "description": "Explore 355 points of interest with GPS-triggered narration, quizzes, and local rewards. No download, no account, no ads.",
            "touristType": [
                "History enthusiasts",
                "Independent travelers",
                "Cultural tourists"
            ],
            "itinerary": {
                "@type": "ItemList",
                "numberOfItems": 355,
                "name": "Athens and Attica points of interest"
            }
        }
    ];

    schemas.forEach((data) => {
        const el = document.createElement("script");
        el.type = "application/ld+json";
        el.textContent = JSON.stringify(data);
        document.head.appendChild(el);
    });
})();
