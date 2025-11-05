import './About.css';

function About({ onClose }) {
  return (
    <div className="about-overlay" onClick={onClose}>
      <div className="about-modal" onClick={(e) => e.stopPropagation()}>
        <button className="close-btn" onClick={onClose} aria-label="Close">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        </button>

        <div className="about-content">
          <h1>Why Privacy-First Translation Matters</h1>
          <p className="byline">By Dr. Ernesto Lee</p>

          <section>
            <h2>🌍 A Tool for Humanity</h2>
            <p>
              Language should never be a barrier to human connection, education, or opportunity.
              The NLLB Translator is built on a simple belief: everyone deserves access to translation
              technology that respects their privacy and dignity.
            </p>
            <p>
              By running entirely in your browser using WebAssembly, this tool ensures that your words,
              your thoughts, and your communications remain yours alone. No company collects your data.
              No algorithm profiles your interests. No server logs your translations.
            </p>
          </section>

          <section>
            <h2>🔒 Privacy as a Fundamental Right</h2>
            <p>
              In an era where data is the new oil, privacy has become a luxury rather than a right.
              Traditional translation services require sending your text to remote servers, where it
              can be stored, analyzed, and potentially monetized.
            </p>

            <div className="highlight-box">
              <h3>What This Means for You:</h3>
              <ul>
                <li><strong>Medical Information:</strong> Translate health documents without exposing sensitive medical data</li>
                <li><strong>Legal Documents:</strong> Work with contracts and legal text without third-party access</li>
                <li><strong>Personal Communications:</strong> Translate messages knowing they remain private</li>
                <li><strong>Business Confidentiality:</strong> Handle proprietary information securely</li>
                <li><strong>Academic Research:</strong> Translate research without data leakage</li>
                <li><strong>Journalism:</strong> Protect source material and sensitive communications</li>
              </ul>
            </div>
          </section>

          <section>
            <h2>💡 How It Works: Privacy by Design</h2>
            <p>
              This translator uses cutting-edge WebAssembly technology to run Meta's NLLB-200
              (No Language Left Behind) artificial intelligence model directly in your browser:
            </p>

            <div className="tech-steps">
              <div className="step">
                <div className="step-number">1</div>
                <div className="step-content">
                  <h4>Model Download (First Time Only)</h4>
                  <p>The AI model downloads once and caches in your browser - about 300MB. This happens locally.</p>
                </div>
              </div>

              <div className="step">
                <div className="step-number">2</div>
                <div className="step-content">
                  <h4>Local Processing</h4>
                  <p>All translation happens on your device using WebAssembly - a secure, fast runtime that runs in your browser.</p>
                </div>
              </div>

              <div className="step">
                <div className="step-number">3</div>
                <div className="step-content">
                  <h4>Zero Server Communication</h4>
                  <p>After the initial model download, your text NEVER leaves your device. No API calls. No tracking.</p>
                </div>
              </div>
            </div>
          </section>

          <section>
            <h2>🎁 Free by Design, Not by Accident</h2>
            <p>
              This tool is free not as a promotional tactic, but as a philosophical commitment.
              Translation is a fundamental human need in our interconnected world.
            </p>

            <div className="principle-box">
              <h3>Core Principles:</h3>
              <ul>
                <li><strong>No Subscription Fees:</strong> Access to language should not be paywalled</li>
                <li><strong>No API Limits:</strong> Translate as much as you need, whenever you need</li>
                <li><strong>No Data Collection:</strong> Your privacy is not the price of free service</li>
                <li><strong>No Advertisements:</strong> Your attention is not the product</li>
                <li><strong>Open Source Ready:</strong> Built with transparency and community in mind</li>
              </ul>
            </div>
          </section>

          <section>
            <h2>🌟 Benefits Beyond Privacy</h2>

            <div className="benefits-grid">
              <div className="benefit">
                <h4>🚀 Works Offline</h4>
                <p>Once the model is cached, translate without internet. Perfect for travel, remote areas, or sensitive environments.</p>
              </div>

              <div className="benefit">
                <h4>⚡ Fast & Responsive</h4>
                <p>No network latency. Translations happen instantly on your device, as fast as your hardware allows.</p>
              </div>

              <div className="benefit">
                <h4>🌐 200+ Languages</h4>
                <p>Access to Meta's comprehensive NLLB model supporting 200+ languages, including many underserved languages.</p>
              </div>

              <div className="benefit">
                <h4>♿ Accessibility</h4>
                <p>Works on any modern device - desktop, tablet, or mobile. No app installation required.</p>
              </div>

              <div className="benefit">
                <h4>🌱 Environmentally Conscious</h4>
                <p>Reduces server infrastructure needs and energy consumption by processing locally.</p>
              </div>

              <div className="benefit">
                <h4>🎓 Educational Value</h4>
                <p>Students and educators can translate freely without institutional tracking or data retention concerns.</p>
              </div>
            </div>
          </section>

          <section>
            <h2>🌏 Supporting Linguistic Diversity</h2>
            <p>
              The NLLB (No Language Left Behind) model was specifically created by Meta AI to support
              low-resource languages that are often ignored by commercial translation services. This
              includes indigenous languages, regional dialects, and languages spoken by smaller populations.
            </p>
            <p>
              By making this technology freely available without barriers, we help preserve linguistic
              diversity and ensure that speakers of any language can access digital tools in their
              native tongue.
            </p>
          </section>

          <section>
            <h2>🤝 Who Benefits Most?</h2>

            <div className="audience-list">
              <div className="audience">
                <h4>Healthcare Workers</h4>
                <p>Communicate with patients while maintaining HIPAA compliance and medical privacy</p>
              </div>

              <div className="audience">
                <h4>Journalists & Activists</h4>
                <p>Translate sensitive communications without exposing sources or surveillance risks</p>
              </div>

              <div className="audience">
                <h4>Students & Researchers</h4>
                <p>Access multilingual resources without institutional tracking or data retention</p>
              </div>

              <div className="audience">
                <h4>Small Businesses</h4>
                <p>Communicate globally without expensive translation service subscriptions</p>
              </div>

              <div className="audience">
                <h4>Legal Professionals</h4>
                <p>Handle sensitive documents while maintaining attorney-client privilege</p>
              </div>

              <div className="audience">
                <h4>Immigrants & Travelers</h4>
                <p>Navigate new environments and communicate without data exposure</p>
              </div>
            </div>
          </section>

          <section>
            <h2>🔬 The Technology Behind Privacy</h2>
            <p>
              WebAssembly (WASM) is a breakthrough technology that allows high-performance code to
              run securely in web browsers. Combined with ONNX Runtime (an optimized machine learning
              inference engine), it enables us to run sophisticated AI models entirely client-side.
            </p>
            <p>
              This isn't just a privacy feature - it's a technological revolution. What once required
              powerful servers and cloud infrastructure can now run on the device in your pocket.
            </p>
          </section>

          <section>
            <h2>💭 A Message from Dr. Lee</h2>
            <div className="message-box">
              <p>
                Technology should empower people, not exploit them. In building this translator,
                I wanted to demonstrate that we don't have to sacrifice privacy for functionality,
                or pay for access to fundamental tools.
              </p>
              <p>
                Every time you use this translator, you're participating in a different vision of
                technology - one where users are respected, privacy is protected, and access is
                universal.
              </p>
              <p>
                This is what technology can be when it's built for people, not for profit extraction.
                I hope this tool serves you well and demonstrates that another way is possible.
              </p>
              <p className="signature">
                - Dr. Ernesto Lee<br/>
                <a href="https://drlee.io" target="_blank" rel="noopener noreferrer">drlee.io</a>
              </p>
            </div>
          </section>

          <section>
            <h2>🚀 What's Next?</h2>
            <p>
              This project is just the beginning. Privacy-first, locally-run AI tools represent
              the future of ethical technology. As WebAssembly and browser capabilities improve,
              we'll see more sophisticated applications that respect user privacy by design.
            </p>
            <p>
              The code is open, the technology is transparent, and the mission is clear: make
              powerful tools accessible to everyone while respecting their fundamental right to privacy.
            </p>
          </section>

          <div className="cta-section">
            <h3>Ready to translate with confidence?</h3>
            <button className="cta-button" onClick={onClose}>Start Translating</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
