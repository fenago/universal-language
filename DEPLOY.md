# Deployment Guide for Netlify

This guide provides step-by-step instructions for deploying your NLLB Translator to Netlify.

## Prerequisites

- A Netlify account (free): https://app.netlify.com/signup
- Git installed on your computer (for GitHub method)
- Node.js and npm installed

## Method 1: Deploy via GitHub (Recommended)

This method enables automatic deployments when you push changes.

### Step 1: Push to GitHub

```bash
# Initialize git repository (if not already done)
git init

# Add all files
git add .

# Create first commit
git commit -m "Initial commit: NLLB Translator React app"

# Create a new repository on GitHub, then:
git remote add origin https://github.com/YOUR_USERNAME/nllb-translator.git
git branch -M main
git push -u origin main
```

### Step 2: Connect to Netlify

1. Go to https://app.netlify.com
2. Click "Add new site" > "Import an existing project"
3. Choose "Deploy with GitHub"
4. Authorize Netlify to access your GitHub account
5. Select your `nllb-translator` repository
6. Netlify will automatically detect the build settings from `netlify.toml`:
   - Build command: `npm run build`
   - Publish directory: `dist`
7. Click "Deploy site"

### Step 3: Wait for Deployment

- Netlify will build and deploy your site
- You'll get a random URL like `https://random-name-123456.netlify.app`
- Click on the URL to view your live site!

### Step 4: Custom Domain (Optional)

1. Go to "Site settings" > "Domain management"
2. Click "Add custom domain"
3. Follow the instructions to configure your DNS

## Method 2: Deploy via Netlify CLI

Quick deployment using the command line.

### Step 1: Install Netlify CLI

```bash
npm install -g netlify-cli
```

### Step 2: Login to Netlify

```bash
netlify login
```

This will open a browser window for authentication.

### Step 3: Deploy

```bash
# Build the project
npm run build

# Deploy to Netlify
netlify deploy --prod
```

Follow the prompts:
- Create a new site or link to existing
- Choose your team
- The build output is automatically detected as `dist`

You'll get a live URL immediately!

## Method 3: Manual Drag & Drop

Fastest method for quick testing.

### Step 1: Build the Project

```bash
npm run build
```

This creates a `dist` folder with your production build.

### Step 2: Deploy

1. Go to https://app.netlify.com/drop
2. Drag the `dist` folder onto the drop zone
3. Wait for upload to complete
4. Get your live URL!

**Note:** This method doesn't connect to Git, so you'll need to manually upload for updates.

## Environment Variables (If Needed)

If you need to add environment variables:

1. Go to Site settings > Build & deploy > Environment
2. Click "Add environment variable"
3. Add your variables (e.g., `VITE_API_KEY`)
4. Redeploy the site

**Note:** This project doesn't require any environment variables!

## Troubleshooting

### Build Fails

1. Check that `node_modules` is in `.gitignore`
2. Verify `netlify.toml` is in the root directory
3. Check build logs in Netlify dashboard

### CORS Errors

The `netlify.toml` file includes necessary CORS headers for WebAssembly:
```toml
[[headers]]
  for = "/*"
  [headers.values]
    Cross-Origin-Embedder-Policy = "require-corp"
    Cross-Origin-Opener-Policy = "same-origin"
```

### Model Won't Load

1. Clear browser cache
2. Check browser console for errors
3. Ensure you're using a modern browser (Chrome 90+, Firefox 89+, Safari 15+)

## Updating Your Deployment

### With GitHub (Auto-deploy)
```bash
git add .
git commit -m "Update translation features"
git push
```
Netlify automatically redeploys!

### With CLI
```bash
npm run build
netlify deploy --prod
```

### With Drag & Drop
Build and drag the new `dist` folder

## Performance Tips

1. **Enable Asset Optimization** in Netlify:
   - Site settings > Build & deploy > Post processing
   - Enable "Bundle CSS" and "Minify JS"

2. **Use Netlify's CDN**:
   - Your site is automatically distributed globally
   - No additional configuration needed

3. **Monitor with Netlify Analytics**:
   - Upgrade to see visitor stats and performance metrics

## Cost

- **Free tier** includes:
  - 100 GB bandwidth/month
  - 300 build minutes/month
  - Unlimited sites
  - HTTPS included

This is more than enough for most personal projects!

## Support

- Netlify Docs: https://docs.netlify.com
- Netlify Community: https://answers.netlify.com
- GitHub Issues: https://github.com/YOUR_USERNAME/nllb-translator/issues

## Next Steps

After deployment:
1. Test the translation feature
2. Share your URL with others
3. Customize the UI to match your brand
4. Add more language pairs if needed
5. Monitor usage and performance

Enjoy your deployed NLLB Translator! 🎉
