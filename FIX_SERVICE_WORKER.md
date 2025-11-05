# Fix Service Worker 503 Error - Quick Guide

## The Problem
You're seeing these errors:
```
[Service Worker] Fetch failed: TypeError: Failed to fetch
503 (Service Unavailable)
```

This is from an old service worker cached in your browser.

## The Solution (Choose One)

### ✅ Option 1: Browser DevTools (Fastest)

1. **Open DevTools**: Press `F12` (or `Cmd+Option+I` on Mac)
2. **Go to Application tab** (top of DevTools)
3. **Click "Service Workers"** in left sidebar
4. **Click "Unregister"** next to any listed service workers
5. **Click "Storage"** in left sidebar
6. **Click "Clear site data"** button
7. **Close DevTools**
8. **Hard Reload**: Press `Ctrl+Shift+R` (or `Cmd+Shift+R` on Mac)

✅ **Done!** Your app should work now.

---

### Option 2: Visit Cleanup Page

1. Go to: http://localhost:5173/unregister-sw.html
2. Wait for "Success!" message
3. Close that tab
4. Go back to: http://localhost:5173
5. App should work now

---

### Option 3: Use Incognito Mode

1. Open incognito/private window:
   - Chrome: `Ctrl+Shift+N` (or `Cmd+Shift+N` on Mac)
   - Firefox: `Ctrl+Shift+P` (or `Cmd+Shift+P` on Mac)
2. Visit: http://localhost:5173
3. App works without service worker issues

---

### Option 4: Restart Dev Server

If the above don't work:

```bash
# 1. Stop the dev server (Ctrl+C in terminal)

# 2. Clear Vite cache
rm -rf node_modules/.vite

# 3. Restart
npm run dev

# 4. Hard reload browser (Ctrl+Shift+R)
```

---

## Prevention

I've already added automatic service worker cleanup to `index.html`.

On localhost, it will automatically:
- Unregister all service workers
- Clear all caches

So this shouldn't happen again! 🎉

---

## Still Not Working?

Try this nuclear option:

```bash
# Stop dev server (Ctrl+C)

# Clear everything
rm -rf node_modules/.vite dist

# Restart
npm run dev
```

Then in browser:
1. Open DevTools (F12)
2. Right-click the refresh button
3. Select "Empty Cache and Hard Reload"

---

## Quick Reference

| Issue | Solution |
|-------|----------|
| 503 errors | Clear service workers (Option 1) |
| Still broken | Use incognito mode |
| Can't clear SW | Restart browser completely |
| Nothing works | Restart dev server + clear cache |

**Need more help?** See `TROUBLESHOOTING.md`
