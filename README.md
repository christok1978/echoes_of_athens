# Echoes of Athens 🏛️

An immersive Progressive Web App (PWA) that brings ancient Greek archaeological sites to life through geolocation-based audio narration, interactive quizzes, and gamified exploration.

**Live:** [https://echoes-of-athens.vercel.app](https://echoes-of-athens.vercel.app)  
**About:** [about.html](https://echoes-of-athens.vercel.app/about.html) · **Press kit:** [press.html](https://echoes-of-athens.vercel.app/press.html) · **All sites:** [sites/](https://echoes-of-athens.vercel.app/sites/index.html)

## Features

- 📍 **Interactive Map**: Explore 355 Points of Interest across Athens and Attica
- 🎙️ **Audio Narration**: AI-powered text-to-speech guides using Web Speech API
- 🧭 **Real & Simulated GPS**: Works with actual location or simulation mode for testing
- ❓ **Educational Quizzes**: Test your knowledge at each site and earn rewards
- 🏆 **Gamification**: Collect "Drachmas" (XP) and unlock local business coupons
- 📱 **Offline-First PWA**: Works without internet via Service Worker caching
- 🔒 **Privacy-Focused**: All geolocation processing happens client-side

## Tech Stack

- **Frontend**: Vanilla JavaScript, HTML5, CSS3
- **Mapping**: Leaflet.js with OpenStreetMap tiles
- **Audio**: Web Speech Synthesis API
- **Storage**: localStorage for persistence
- **PWA**: Service Worker for offline support
- **Security**: Content Security Policy (CSP) compliant

## Quick Start

### Development
```bash
# Serve locally
npx serve .

# Or use any static server
python -m http.server 8000
```

### Production Build
```bash
# Install dependencies
npm install

# Build minified production bundle
npm run build

# Serve production build
npm run serve
```

The production build is output to the `/dist` folder.

## Project Structure

```
echoes-of-athens/
├── index.html          # Main HTML structure
├── app.js              # Core application logic (6,830 lines)
├── style.css           # Styling and responsive design
├── sw.js               # Service Worker for offline support
├── manifest.json       # PWA manifest
├── images/             # POI images (65+ archaeological site photos)
├── fonts/              # Local font files (Cinzel, Outfit)
├── scripts/            # Build and utility scripts
│   ├── build.js        # Production build script
│   └── ...             # POI management utilities
└── dist/               # Production build output (gitignored)
```

## Key Technologies

### Geolocation
- Uses browser's Geolocation API with fallback
- High-accuracy GPS with automatic degradation to Wi-Fi/IP location
- 60-meter trigger radius for POI activation

### Audio System
- Web Speech Synthesis API for narration
- Text preprocessing for better TTS quality (years, abbreviations, numbers)
- Preferred voice selection with fallback

### Progressive Web App
- Installable on mobile devices
- Offline-first with Service Worker
- App-like experience with standalone display mode

## Security

✅ **Content Security Policy**: Strict CSP headers prevent XSS attacks  
✅ **DOM Sanitization**: No `innerHTML` usage, all DOM manipulation via safe APIs  
✅ **Hashed Coupons**: Reward codes stored as SHA-256 hashes  
✅ **Client-Side Processing**: Location data never leaves the device

## Browser Support

- ✅ Chrome/Edge 90+
- ✅ Safari 14+
- ✅ Firefox 88+
- ⚠️ Requires JavaScript enabled
- ⚠️ Geolocation API support needed for real GPS mode

## Known Issues

See [CODE_REVIEW.md](./CODE_REVIEW.md) for a comprehensive analysis. Critical items:

1. **No test coverage** - Tests needed before production
2. **Deployment config issues** - Workflow needs to use production build
3. **POI coordinate errors** - Some locations off by kilometers
4. **Large bundle size** - 400KB+ JavaScript file needs code splitting

## Development Roadmap

### Phase 1: Critical Fixes (Must Do)
- [ ] Add package.json with dependencies
- [ ] Fix GitHub Actions deployment workflow
- [ ] Correct POI coordinates with 100m+ errors
- [ ] Implement basic test suite

### Phase 2: Production Hardening (Should Do)
- [ ] Add comprehensive error handling
- [ ] Fix memory leaks (event listener cleanup)
- [ ] Implement cache invalidation strategy
- [ ] Code splitting and lazy loading

### Phase 3: Enhancements (Nice to Have)
- [ ] TypeScript migration or JSDoc types
- [ ] Extract configuration constants
- [ ] Audit duplicate POI coordinates
- [ ] Add analytics/telemetry

## Contributing

1. Review [CODE_REVIEW.md](./CODE_REVIEW.md) for current issues
2. Follow existing code style (no inline imports, DOM-safe methods)
3. Ensure CSP compliance (no inline scripts, `eval`, or `innerHTML`)
4. Test on mobile devices before submitting PRs

## License

[Add your license here]

## Credits

- Archaeological site data curated from public sources
- Map tiles: © [OpenStreetMap](https://www.openstreetmap.org/copyright) contributors
- Fonts: Cinzel (serif), Outfit (sans-serif)

---

**Built with ❤️ for history enthusiasts exploring ancient Athens**
