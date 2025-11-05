# Troubleshooting Guide

## Service Worker 503 Error

If you see errors like:
```
[Service Worker] Fetch failed: TypeError: Failed to fetch
Failed to load resource: the server responded with a status of 503
```

This is caused by a service worker from a previous session interfering with the dev server.

### Quick Fix (Recommended)

**Option 1: Clear in Browser DevTools**
1. Open Chrome DevTools (F12)
2. Go to **Application** tab
3. Click **Service Workers** in left sidebar
4. Click **Unregister** next to any service workers
5. Click **Clear storage** in left sidebar
6. Click **Clear site data** button
7. Close DevTools and reload the page (Ctrl+Shift+R or Cmd+Shift+R)

**Option 2: Use Unregister Page**
1. Visit: http://localhost:5173/unregister-sw.html
2. Wait for success message
3. Close that tab
4. Reload your app: http://localhost:5173

**Option 3: Clear Browser Data**
1. Chrome: Settings > Privacy and security > Clear browsing data
2. Check "Cached images and files"
3. Time range: "Last hour"
4. Click "Clear data"
5. Reload the page

**Option 4: Incognito/Private Mode**
1. Open incognito window (Ctrl+Shift+N or Cmd+Shift+N)
2. Visit http://localhost:5173
3. App should work without service worker interference

### Permanent Solution

Add this to your `index.html` to prevent future issues:

```html
<script>
  // Unregister any service workers on dev
  if ('serviceWorker' in navigator && window.location.hostname === 'localhost') {
    navigator.serviceWorker.getRegistrations().then(registrations => {
      for (let registration of registrations) {
        registration.unregister();
      }
    });
  }
</script>
```

I'll add this for you automatically.

---

## Other Common Issues

### Port Already in Use

**Error:** `Port 5173 is already in use`

**Fix:**
```bash
# Kill process on port 5173
# macOS/Linux:
lsof -ti:5173 | xargs kill -9

# Windows:
netstat -ano | findstr :5173
taskkill /PID <PID_NUMBER> /F

# Or use a different port:
npm run dev -- --port 3000
```

### Module Not Found Error

**Error:** `Cannot find module '@huggingface/transformers'`

**Fix:**
```bash
# Delete node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
```

### CORS Errors in Production

**Error:** `Cross-Origin-Embedder-Policy` errors

**Fix:** The `netlify.toml` already has correct headers. Make sure it's deployed to Netlify (not a different host).

### Model Won't Download

**Error:** Model download fails or stalls

**Fix:**
1. Check your internet connection
2. Clear browser cache
3. Try a different browser
4. Check browser console for specific errors

### White Screen / React Not Loading

**Fix:**
1. Check browser console for errors
2. Verify all dependencies installed: `npm install`
3. Clear build: `rm -rf dist` then `npm run build`
4. Try different browser

### Vite Dev Server Won't Start

**Fix:**
```bash
# Stop any running dev servers
# Press Ctrl+C in terminal

# Clear Vite cache
rm -rf node_modules/.vite

# Restart
npm run dev
```

### Build Fails

**Error:** Build errors during `npm run build`

**Fix:**
```bash
# Clear everything and rebuild
rm -rf node_modules dist package-lock.json
npm install
npm run build
```

### Netlify Deployment Fails

**Check:**
1. `netlify.toml` is in root directory ✓
2. Build command is `npm run build` ✓
3. Publish directory is `dist` ✓
4. Node version is compatible (check Netlify build logs)

**Fix:**
Add to `netlify.toml`:
```toml
[build.environment]
  NODE_VERSION = "18"
```

---

## Still Having Issues?

1. **Check browser console** (F12) for error messages
2. **Check terminal** where `npm run dev` is running
3. **Try incognito mode** to rule out extensions
4. **Update dependencies**: `npm update`
5. **Verify Node version**: `node --version` (should be 18+)

## Get Help

- Check `README.md` for setup instructions
- Check `QUICKSTART.md` for deployment steps
- Open an issue on GitHub with:
  - Error message
  - Browser and version
  - Steps to reproduce
