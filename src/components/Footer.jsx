import { portfolioData } from '../data/portfolioData';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-left">
          <p>© {currentYear} {portfolioData.personal.name}. All rights reserved.</p>
        </div>
        
        <div className="footer-center">
          <p className="credit-text">
            Designed & Built with <span className="heart-icon">⚡</span> & React
          </p>
        </div>

        <div className="footer-right">
          <a href="#home" className="back-to-top-btn" aria-label="Scroll to top">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="18 15 12 9 6 15"></polyline></svg>
          </a>
        </div>
      </div>

      <style>{`
        .footer {
          background: rgba(5, 7, 15, 0.9);
          border-top: 1px solid rgba(255, 255, 255, 0.03);
          padding: 2rem 1.5rem;
          position: relative;
          z-index: 1;
        }

        .footer-container {
          max-width: 1200px;
          margin: 0 auto;
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-size: 0.85rem;
          color: var(--text-secondary);
        }

        .heart-icon {
          color: var(--accent-cyan);
          display: inline-block;
          animation: pulse-glow 2s infinite;
        }

        .credit-text {
          font-family: var(--font-heading);
          font-weight: 500;
        }

        .back-to-top-btn {
          width: 36px;
          height: 36px;
          border-radius: 8px;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.05);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--text-secondary);
          transition: all var(--transition-fast);
        }

        .back-to-top-btn:hover {
          color: var(--accent-cyan);
          border-color: rgba(0, 242, 254, 0.2);
          background: rgba(0, 242, 254, 0.05);
          transform: translateY(-2px);
        }

        .back-to-top-btn svg {
          width: 18px;
          height: 18px;
        }

        @media (max-width: 600px) {
          .footer-container {
            flex-direction: column;
            gap: 1rem;
            text-align: center;
          }
        }
      `}</style>
    </footer>
  );
}
