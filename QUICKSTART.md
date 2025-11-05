# Quick Start Guide

Get your NLLB Translator running in minutes!

## Local Development

```bash
# 1. Install dependencies
npm install

# 2. Start the dev server
npm run dev

# 3. Open in browser
# Visit http://localhost:5173
```

That's it! The app is now running locally.

## Deploy to Netlify (Fastest Method)

### Option 1: Drag & Drop (2 minutes)

```bash
# 1. Build the project
npm run build

# 2. Go to https://app.netlify.com/drop

# 3. Drag the 'dist' folder to the drop zone

# 4. Done! You'll get a live URL immediately
```

### Option 2: CLI Deploy (3 minutes)

```bash
# 1. Install Netlify CLI (one-time)
npm install -g netlify-cli

# 2. Login
netlify login

# 3. Deploy
npm run build
netlify deploy --prod

# Follow the prompts and get your live URL!
```

### Option 3: GitHub + Netlify (5 minutes, auto-deploy)

```bash
# 1. Create a GitHub repo and push your code
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/YOUR_USERNAME/nllb-translator.git
git push -u origin main

# 2. Go to https://app.netlify.com
# 3. Click "Add new site" > "Import an existing project"
# 4. Select GitHub and your repository
# 5. Click "Deploy site"

# Future updates auto-deploy when you push to GitHub!
```

## What to Expect

### First Use
- The app loads instantly
- When you click "Translate" for the first time:
  - Downloads NLLB-200 model (~300MB)
  - Takes 30-60 seconds
  - Shows progress bar
  - Model is cached in browser

### Subsequent Use
- Model loads from cache instantly
- Translations happen in 1-2 seconds
- No downloads needed

## Browser Requirements

- Chrome/Edge 90+
- Firefox 89+
- Safari 15+

## Features to Try

1. **Translate Text**: Enter text and click "Translate"
2. **Swap Languages**: Click the swap button to reverse languages
3. **Copy Translation**: Click the copy icon on translated text
4. **Enter Key**: Press Enter (without Shift) to translate
5. **Mobile Friendly**: Works great on phones and tablets

## Customization

Want to customize? Edit these files:

- `src/App.jsx` - Main component logic
- `src/App.css` - Styling and colors
- `netlify.toml` - Deployment configuration

## Need Help?

- Check `README.md` for detailed documentation
- Check `DEPLOY.md` for deployment troubleshooting
- Open an issue on GitHub

## Pro Tips

1. **Faster Model Loading**: Use Chrome for fastest WebAssembly performance
2. **Save Bandwidth**: Model downloads once and caches permanently
3. **Privacy**: All translation happens in your browser - nothing sent to servers
4. **Offline**: After first load, works offline with cached model

Enjoy translating! 🌍✨
