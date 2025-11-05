import { useState, useEffect, useRef } from 'react';
import { pipeline, env } from '@huggingface/transformers';
import About from './About';
import LanguageSelector from './LanguageSelector';
import './App.css';

// Configure environment
env.allowLocalModels = false;

function App() {
  const [sourceText, setSourceText] = useState('');
  const [targetText, setTargetText] = useState('');
  const [sourceLang, setSourceLang] = useState('eng_Latn');
  const [targetLang, setTargetLang] = useState('spa_Latn');
  const [isTranslating, setIsTranslating] = useState(false);
  const [isModelLoaded, setIsModelLoaded] = useState(false);
  const [status, setStatus] = useState('Click "Translate" to load the model and start translating.');
  const [progress, setProgress] = useState(0);
  const [showProgress, setShowProgress] = useState(false);
  const [showAbout, setShowAbout] = useState(false);

  const translatorRef = useRef(null);

  const initTranslator = async () => {
    if (isModelLoaded) return;

    try {
      setShowProgress(true);
      setStatus('Loading translation model... This may take a minute on first load.');

      translatorRef.current = await pipeline(
        'translation',
        'Xenova/nllb-200-distilled-600M',
        {
          progress_callback: (progressData) => {
            if (progressData.status === 'downloading') {
              const percent = Math.round((progressData.loaded / progressData.total) * 100);
              setProgress(percent);
              setStatus(`Downloading model: ${progressData.file} (${percent}%)`);
            } else if (progressData.status === 'loading') {
              setStatus(`Loading model: ${progressData.file}`);
            } else if (progressData.status === 'ready') {
              setStatus('Model loaded successfully!');
            }
          }
        }
      );

      setIsModelLoaded(true);
      setShowProgress(false);
      setStatus('Model loaded! Ready to translate.');
      setTimeout(() => setStatus(''), 2000);
    } catch (error) {
      console.error('Error loading model:', error);
      setShowProgress(false);
      setStatus('Error loading model. Please refresh the page and try again.');
    }
  };

  const handleTranslate = async () => {
    const text = sourceText.trim();

    if (!text) {
      setStatus('Please enter text to translate.');
      setTimeout(() => setStatus(''), 2000);
      return;
    }

    if (sourceLang === targetLang) {
      setStatus('Source and target languages must be different.');
      setTimeout(() => setStatus(''), 2000);
      return;
    }

    try {
      if (!isModelLoaded) {
        await initTranslator();
      }

      setIsTranslating(true);
      setStatus('Translating...');
      setTargetText('');

      const result = await translatorRef.current(text, {
        src_lang: sourceLang,
        tgt_lang: targetLang,
      });

      setTargetText(result[0].translation_text);
      setStatus('Translation complete!');
      setTimeout(() => setStatus(''), 2000);
    } catch (error) {
      console.error('Translation error:', error);
      setStatus('Error during translation. Please try again.');
      setTimeout(() => setStatus(''), 3000);
    } finally {
      setIsTranslating(false);
    }
  };

  const handleSwapLanguages = () => {
    setSourceLang(targetLang);
    setTargetLang(sourceLang);
    setSourceText(targetText);
    setTargetText(sourceText);
  };

  const handleCopyTranslation = async () => {
    if (!targetText) {
      setStatus('Nothing to copy.');
      setTimeout(() => setStatus(''), 2000);
      return;
    }

    try {
      await navigator.clipboard.writeText(targetText);
      setStatus('Copied to clipboard!');
      setTimeout(() => setStatus(''), 2000);
    } catch (error) {
      console.error('Copy error:', error);
      setStatus('Failed to copy.');
      setTimeout(() => setStatus(''), 2000);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleTranslate();
    }
  };

  return (
    <div className="container">
      <header>
        <h1>NLLB Translator</h1>
        <p className="subtitle">Translate between 200+ languages using AI in your browser</p>
        <p className="author">
          By: <a href="https://drlee.io" target="_blank" rel="noopener noreferrer">Dr. Ernesto Lee</a>
        </p>
      </header>

      <div className="translator-card">
        <div className="language-selector-row">
          <LanguageSelector
            id="source-lang"
            label="From"
            value={sourceLang}
            onChange={setSourceLang}
          />

          <button
            className="swap-btn"
            onClick={handleSwapLanguages}
            aria-label="Swap languages"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M16 3L20 7L16 11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M20 7H4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M8 21L4 17L8 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M4 17H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>

          <LanguageSelector
            id="target-lang"
            label="To"
            value={targetLang}
            onChange={setTargetLang}
          />
        </div>

        <div className="text-areas-row">
          <div className="text-area-wrapper">
            <textarea
              className="text-area"
              placeholder="Enter text to translate..."
              rows="8"
              value={sourceText}
              onChange={(e) => setSourceText(e.target.value)}
              onKeyDown={handleKeyDown}
            />
            <div className="char-counter">
              {sourceText.length} characters
            </div>
          </div>

          <div className="text-area-wrapper">
            <textarea
              className="text-area"
              placeholder="Translation will appear here..."
              rows="8"
              value={targetText}
              readOnly
            />
            <button
              className="copy-btn"
              onClick={handleCopyTranslation}
              title="Copy translation"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path d="M8 4V16C8 16.5304 8.21071 17.0391 8.58579 17.4142C8.96086 17.7893 9.46957 18 10 18H18C18.5304 18 19.0391 17.7893 19.4142 17.4142C19.7893 17.0391 20 16.5304 20 16V7.242C20 6.97556 19.9467 6.71181 19.8433 6.46624C19.7399 6.22068 19.5885 5.99824 19.398 5.812L16.083 2.57C15.7094 2.20466 15.2076 2.00007 14.685 2H10C9.46957 2 8.96086 2.21071 8.58579 2.58579C8.21071 2.96086 8 3.46957 8 4Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M16 18V20C16 20.5304 15.7893 21.0391 15.4142 21.4142C15.0391 21.7893 14.5304 22 14 22H6C5.46957 22 4.96086 21.7893 4.58579 21.4142C4.21071 21.0391 4 20.5304 4 20V9C4 8.46957 4.21071 7.96086 4.58579 7.58579C4.96086 7.21071 5.46957 7 6 7H8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
        </div>

        <div className="action-row">
          <button
            className="translate-btn"
            onClick={handleTranslate}
            disabled={isTranslating}
          >
            <span style={{ display: isTranslating ? 'none' : 'block' }}>Translate</span>
            {isTranslating && <div className="spinner"></div>}
          </button>
        </div>

        <div className="status">{status}</div>

        {showProgress && (
          <div className="progress-container">
            <div className="progress-bar">
              <div className="progress-fill" style={{ width: `${progress}%` }}></div>
            </div>
            <div className="progress-text">Loading model... {progress}%</div>
          </div>
        )}
      </div>

      <footer>
        <p>
          Powered by{' '}
          <a href="https://huggingface.co/facebook/nllb-200-distilled-600M" target="_blank" rel="noopener noreferrer">
            NLLB-200
          </a>{' '}
          via{' '}
          <a href="https://huggingface.co/docs/transformers.js" target="_blank" rel="noopener noreferrer">
            Transformers.js
          </a>
        </p>
        <p className="info">
          Translation runs entirely in your browser using WebAssembly. No data is sent to servers.{' '}
          <button className="learn-more-link" onClick={() => setShowAbout(true)}>
            Learn more
          </button>
        </p>
      </footer>

      {showAbout && <About onClose={() => setShowAbout(false)} />}
    </div>
  );
}

export default App;
