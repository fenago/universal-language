# NLLB Translator - React Edition

A beautiful Google-style translation interface built with React and Vite, using the NLLB-200 (No Language Left Behind) model from Meta AI via Hugging Face Transformers.js. All translation happens in your browser using WebAssembly!

## Features

- **200+ Languages**: Translate between 200+ languages using the NLLB-200 model
- **Privacy-First**: All processing happens locally in your browser via WASM
- **No Backend Required**: Runs completely client-side
- **React + Vite**: Fast development with Hot Module Replacement
- **Responsive Design**: Works beautifully on desktop and mobile
- **Free & Open Source**: No API keys or costs

## Tech Stack

- **React 18** - UI framework
- **Vite** - Build tool and dev server
- **Transformers.js** - Machine learning in the browser
- **NLLB-200** - Meta's multilingual translation model

## Getting Started

### Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

Open http://localhost:5173 in your browser.

### Build for Production

```bash
# Build the project
npm run build

# Preview production build
npm run preview
```

## Deploy to Netlify

### Option 1: Netlify CLI

```bash
# Install Netlify CLI (if not already installed)
npm install -g netlify-cli

# Login to Netlify
netlify login

# Deploy
netlify deploy --prod
```

### Option 2: Netlify Web Interface

1. Push your code to GitHub
2. Go to [Netlify](https://netlify.com)
3. Click "Add new site" > "Import an existing project"
4. Select your repository
5. Build settings are automatically detected from `netlify.toml`
6. Click "Deploy site"

### Option 3: Drag and Drop

```bash
# Build the project
npm run build

# Drag the 'dist' folder to Netlify's deploy drop zone
# at https://app.netlify.com/drop
```

## Configuration

The project includes a `netlify.toml` file with:
- Build command configuration
- CORS headers for WebAssembly
- SPA redirect rules

## Browser Support

Requires a modern browser with WebAssembly and ES6 module support:
- Chrome/Edge 90+
- Firefox 89+
- Safari 15+

## How It Works

1. Uses Transformers.js to load the NLLB-200 ONNX model
2. Runs inference entirely in the browser using WebAssembly
3. No data is transmitted to any server
4. Model files are cached locally after first download (~300MB)

## Performance Notes

- **First Load**: The model downloads on first translation (~300MB, 30-60 seconds)
- **Subsequent Use**: Model is cached, translations are fast
- **Performance**: Varies by device CPU

## Supported Languages

The UI includes 20 popular languages:
- English, Spanish, French, German, Italian, Portuguese
- Russian, Japanese, Korean, Chinese (Simplified)
- Arabic, Hindi, Bengali, Vietnamese, Thai
- Turkish, Polish, Dutch, Ukrainian, Greek

The underlying model supports 200+ languages!

## Development

```bash
# Install dependencies
npm install

# Run dev server with HMR
npm run dev

# Lint code
npm run lint

# Build for production
npm run build
```

## Project Structure

```
nllb-translator/
├── src/
│   ├── App.jsx         # Main React component
│   ├── App.css         # Component styles
│   ├── index.css       # Global styles
│   └── main.jsx        # React entry point
├── public/             # Static assets
├── netlify.toml        # Netlify configuration
├── vite.config.js      # Vite configuration
└── package.json        # Dependencies
```

## License

This project is provided as-is for educational and personal use. The NLLB model is subject to Meta's license terms.

## Credits

- **NLLB-200**: Meta AI's No Language Left Behind project
- **Transformers.js**: Hugging Face's JavaScript ML library
- **Model**: `Xenova/nllb-200-distilled-600M` on Hugging Face
