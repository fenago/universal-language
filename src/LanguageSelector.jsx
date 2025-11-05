import { useState } from 'react';
import { popularLanguages, languages } from './languages';
import './LanguageSelector.css';

function LanguageSelector({ id, label, value, onChange }) {
  const [showAllLanguages, setShowAllLanguages] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  const handleChange = (e) => {
    const selectedValue = e.target.value;

    if (selectedValue === 'show_all') {
      setShowAllLanguages(true);
      return;
    }

    onChange(selectedValue);
  };

  const handleModalLanguageSelect = (code) => {
    onChange(code);
    setShowAllLanguages(false);
    setSearchTerm('');
  };

  const filteredLanguages = searchTerm
    ? languages.filter(lang =>
        lang.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        lang.code.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : languages;

  const currentLanguage = languages.find(lang => lang.code === value) ||
                         popularLanguages.find(lang => lang.code === value);

  return (
    <>
      <div className="language-select-wrapper">
        <label htmlFor={id}>{label}</label>
        <select
          id={id}
          className="language-select"
          value={value}
          onChange={handleChange}
        >
          <optgroup label="Popular Languages">
            {popularLanguages.map((lang) => (
              <option key={lang.code} value={lang.code}>
                {lang.name}
              </option>
            ))}
          </optgroup>
          <option value="show_all">── More languages (200+) ──</option>
        </select>
      </div>

      {showAllLanguages && (
        <div className="language-modal-overlay" onClick={() => setShowAllLanguages(false)}>
          <div className="language-modal" onClick={(e) => e.stopPropagation()}>
            <div className="language-modal-header">
              <h3>Select Language</h3>
              <button
                className="modal-close-btn"
                onClick={() => setShowAllLanguages(false)}
                aria-label="Close"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </button>
            </div>

            <div className="language-search">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="search-icon">
                <circle cx="11" cy="11" r="8" stroke="currentColor" strokeWidth="2"/>
                <path d="M21 21l-4.35-4.35" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              </svg>
              <input
                type="text"
                placeholder="Search languages..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="language-search-input"
                autoFocus
              />
            </div>

            <div className="language-list">
              {filteredLanguages.length > 0 ? (
                filteredLanguages.map((lang) => (
                  <button
                    key={lang.code}
                    className={`language-item ${lang.code === value ? 'selected' : ''}`}
                    onClick={() => handleModalLanguageSelect(lang.code)}
                  >
                    <span className="language-name">{lang.name}</span>
                    <span className="language-code">{lang.code}</span>
                  </button>
                ))
              ) : (
                <div className="no-results">
                  No languages found matching "{searchTerm}"
                </div>
              )}
            </div>

            <div className="language-modal-footer">
              <p className="language-count">
                Showing {filteredLanguages.length} of {languages.length} languages
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default LanguageSelector;
