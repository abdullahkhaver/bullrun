import React from 'react';
import './Footer.css';
import { FaTwitter, FaYoutube, FaTelegram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bullrun-footer">
      <div className="footer-container">
        <div className="footer-social">
          <h4 className="social-title">FOLLOW US</h4>
          <div className="social-links">
            <a href="https://twitter.com/bullrun" target="_blank" rel="noopener noreferrer" className="social-link twitter">
              <FaTwitter className="social-icon" />
              <span>Twitter</span>
            </a>
            <a href="https://youtube.com/bullrun" target="_blank" rel="noopener noreferrer" className="social-link youtube">
              <FaYoutube className="social-icon" />
              <span>YouTube</span>
            </a>
            <a href="https://t.me/bullrun" target="_blank" rel="noopener noreferrer" className="social-link telegram">
              <FaTelegram className="social-icon" />
              <span>Telegram</span>
            </a>
          </div>
        </div>

        <div className="footer-disclaimer">
          <p>BULLRUN is a utility token. Not an investment. No financial advice.</p>
        </div>

        <div className="footer-credits">
          <p className="powered-by">
            Powered by <span className="it-khaver">IT-Khaver</span>
          </p>
          <p className="copyright">
            &copy; {new Date().getFullYear()} BULLRUN. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;