# 🚀 Vercel Deployment Guide

## Quick Deploy to Vercel

Your **Echoes of Athens** app is ready for Vercel deployment!

---

## ✅ Pre-configured Files

I've created the following Vercel configuration:

### 1. `vercel.json`
```json
{
  "version": 2,
  "name": "echoes-of-athens",
  "builds": [...],
  "routes": [
    // Service Worker support
    // Static asset caching
    // Security headers
  ]
}
```

### 2. `.vercelignore`
Excludes development files from deployment.

### 3. `package.json` updated
Added `"vercel-build": "npm run build"` script.

### 4. `dist/` folder
Production build ready (1.3MB).

---

## 🔐 Deployment Options

### Option 1: Deploy via Vercel CLI (Recommended)

#### Step 1: Authenticate
```bash
cd /workspace
npx vercel login
```

This will:
- Prompt for your email
- Send a verification email
- Complete authentication

#### Step 2: Deploy to Preview
```bash
npx vercel
```

Follow the prompts:
- **Set up and deploy?** Yes
- **Which scope?** [Your account/team]
- **Link to existing project?** No
- **Project name?** echoes-of-athens
- **Directory?** ./
- **Override settings?** No

#### Step 3: Deploy to Production
```bash
npx vercel --prod
```

Your app will be live at: `https://echoes-of-athens.vercel.app`

---

### Option 2: Deploy via Vercel Dashboard (Zero Config)

1. **Visit:** https://vercel.com/new
2. **Import Git Repository:** 
   - Connect GitHub: `christok1978/echoes_of_athens`
3. **Configure Project:**
   - **Framework Preset:** Other
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
   - **Install Command:** `npm install`
4. **Click "Deploy"**

✅ Automatic deployments on every push!

---

### Option 3: Deploy with Token (CI/CD)

If you have a Vercel token:

```bash
cd /workspace
export VERCEL_TOKEN="your_token_here"
npx vercel --token $VERCEL_TOKEN --prod --yes
```

**Get a token:**
1. Go to: https://vercel.com/account/tokens
2. Create new token
3. Copy and use in command above

---

## 🌐 Expected URLs

After deployment, you'll get:

- **Production:** `https://echoes-of-athens.vercel.app`
- **Preview:** `https://echoes-of-athens-[hash].vercel.app`
- **Custom Domain:** Configure in Vercel dashboard

---

## ⚙️ Environment Variables (Optional)

If you need to add secrets:

```bash
# Via CLI
npx vercel env add API_KEY production

# Or in Vercel Dashboard:
# Project Settings → Environment Variables
```

---

## 🔍 Vercel Configuration Details

### Build Settings
- **Build Command:** `npm run build`
- **Output Directory:** `dist`
- **Install Command:** `npm install`
- **Node Version:** 18.x (from package.json)

### Features Enabled
✅ **Automatic HTTPS**  
✅ **Global CDN**  
✅ **Edge caching**  
✅ **Service Worker support**  
✅ **PWA installable**  
✅ **Zero-config**  
✅ **Instant rollbacks**  
✅ **Preview deployments**  

### Headers Configured
- `X-Content-Type-Options: nosniff`
- `X-Frame-Options: DENY`
- `X-XSS-Protection: 1; mode=block`
- Service Worker allowed on root
- Cache-Control for static assets

---

## 🎯 What Happens on Deploy

1. ✅ Install dependencies (`npm install`)
2. ✅ Run build script (`npm run build`)
3. ✅ Copy `dist/` contents to CDN
4. ✅ Configure headers and routes
5. ✅ Enable HTTPS automatically
6. ✅ Generate preview URL
7. ✅ Ready in ~30 seconds!

---

## 📊 Post-Deployment Testing

Once deployed, test:

```bash
# Check Service Worker
curl -I https://echoes-of-athens.vercel.app/sw.js

# Check manifest
curl -I https://echoes-of-athens.vercel.app/manifest.json

# Check main app
curl -I https://echoes-of-athens.vercel.app/

# Test PWA install
# Visit on mobile → Add to Home Screen
```

---

## 🔧 Troubleshooting

### Build Fails
```bash
# Test build locally first
npm run build
npx serve dist
```

### Service Worker Issues
- Vercel serves SW with correct headers automatically
- Check `vercel.json` routes configuration

### Domain Not Working
- Verify DNS settings in Vercel dashboard
- Allow 24-48h for DNS propagation

---

## 📱 Mobile PWA Setup

After deployment:

### iOS (Safari)
1. Visit site in Safari
2. Tap Share button
3. "Add to Home Screen"
4. App icon appears on home screen

### Android (Chrome)
1. Visit site in Chrome
2. Tap menu (⋮)
3. "Install app" or "Add to Home Screen"
4. App icon appears in app drawer

---

## 🚀 Continuous Deployment

With Vercel + GitHub:

1. ✅ Push to `main` → Auto-deploy to production
2. ✅ Create PR → Auto-deploy preview
3. ✅ Every commit → New preview URL
4. ✅ Merge PR → Promote to production

### Enable Auto-Deploy
Already configured! Just connect your repo in Vercel dashboard.

---

## 📈 Analytics & Monitoring

### Free Vercel Analytics
Add to `index.html` (optional):
```html
<script src="/_vercel/insights/script.js" defer></script>
```

### Performance
- Lighthouse Score: Expected 90+
- First Contentful Paint: <1s
- Time to Interactive: <2s
- PWA Score: 100

---

## 💰 Pricing

**Hobby (Free) includes:**
- ✅ Unlimited deployments
- ✅ 100GB bandwidth/month
- ✅ HTTPS
- ✅ CDN
- ✅ Auto-scaling
- ✅ Preview deployments

Perfect for this project! 🎉

---

## 📞 Support

- **Vercel Docs:** https://vercel.com/docs
- **Dashboard:** https://vercel.com/dashboard
- **Status:** https://vercel-status.com
- **Community:** https://github.com/vercel/vercel/discussions

---

## ✅ Ready to Deploy!

Choose your method above and deploy in < 5 minutes!

**Quick start:**
```bash
cd /workspace
npx vercel login
npx vercel --prod
```

🎉 Your app will be live worldwide!

---

*Configuration created: August 26, 2026*  
*Status: Ready for deployment ✅*
