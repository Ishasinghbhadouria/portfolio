import { useState, useEffect } from 'react';
import { portfolioData } from '../data/portfolioData';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      // Background change on scroll
      setScrolled(window.scrollY > 20);

      // Scroll progress calculation
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        const progress = (window.scrollY / totalHeight) * 100;
        setScrollProgress(progress);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <>
      {/* Scroll Progress Bar */}
      <div 
        className="scroll-progress" 
        style={{ width: `${scrollProgress}%` }} 
      />

      <nav className={`navbar ${scrolled ? 'navbar-scrolled' : ''}`}>
        <div className="navbar-container">
          {/* Logo */}
          <a href="#" className="navbar-logo" onClick={closeMobileMenu}>
            <span className="text-gradient-cyber">ISB</span>
            <span className="logo-dot">.dev</span>
          </a>

          {/* Desktop Nav Links */}
          <div className="navbar-links">
            <a href="#about" className="nav-link">About</a>
            <a href="#skills" className="nav-link">Skills</a>
            <a href="#projects" className="nav-link">Projects</a>
            <a href="#contact" className="nav-link">Contact</a>
          </div>

          {/* Social Icons / CTA */}
          <div className="navbar-socials">
            <a href={portfolioData.personal.socials.linkedin} target="_blank" rel="noreferrer" className="social-icon" aria-label="LinkedIn">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
            </a>
            <a href={portfolioData.personal.socials.instagram} target="_blank" rel="noreferrer" className="social-icon" aria-label="Instagram">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
            </a>
            <a href={portfolioData.personal.socials.github} target="_blank" rel="noreferrer" className="social-icon" aria-label="GitHub">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
            </a>
            <a href={portfolioData.personal.resumeUrl} target="_blank" rel="noreferrer" className="resume-btn glow-btn">
              Resume
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className={`mobile-toggle ${mobileMenuOpen ? 'mobile-toggle-active' : ''}`} 
            onClick={toggleMobileMenu}
            aria-label="Toggle Navigation Menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </nav>

      {/* Mobile Nav Menu */}
      <div className={`mobile-nav-menu ${mobileMenuOpen ? 'mobile-nav-active' : ''}`}>
        <div className="mobile-nav-links">
          <a href="#about" onClick={closeMobileMenu}>About</a>
          <a href="#skills" onClick={closeMobileMenu}>Skills</a>
          <a href="#projects" onClick={closeMobileMenu}>Projects</a>
          <a href="#contact" onClick={closeMobileMenu}>Contact</a>
          <a href={portfolioData.personal.resumeUrl} target="_blank" rel="noreferrer" className="mobile-resume-btn glow-btn" onClick={closeMobileMenu}>
            Resume PDF
          </a>
        </div>
      </div>

      <style>{`
        .scroll-progress {
          position: fixed;
          top: 0;
          left: 0;
          height: 3px;
          background: var(--gradient-cyber);
          z-index: 102;
          transition: width 0.1s ease-out;
          box-shadow: 0 0 10px rgba(0, 242, 254, 0.5);
        }

        .navbar {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          z-index: 100;
          padding: 1.5rem 2rem;
          transition: all var(--transition-normal);
        }

        .navbar-scrolled {
          padding: 0.85rem 2rem;
          background: rgba(7, 10, 19, 0.85);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          border-bottom: 1px solid rgba(255, 255, 255, 0.05);
          box-shadow: 0 4px 30px rgba(0, 0, 0, 0.3);
        }

        .navbar-container {
          max-width: 1200px;
          margin: 0 auto;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .navbar-logo {
          font-family: var(--font-heading);
          font-size: 1.6rem;
          font-weight: 800;
          letter-spacing: -0.03em;
        }

        .logo-dot {
          color: var(--accent-gold);
        }

        .navbar-links {
          display: flex;
          gap: 2.25rem;
        }

        .nav-link {
          font-family: var(--font-heading);
          font-weight: 500;
          font-size: 0.95rem;
          color: var(--text-secondary);
          position: relative;
          transition: color var(--transition-fast);
        }

        .nav-link:hover {
          color: var(--accent-cyan);
        }

        .nav-link::after {
          content: '';
          position: absolute;
          width: 0;
          height: 2px;
          bottom: -4px;
          left: 0;
          background: var(--gradient-cyber);
          transition: width var(--transition-fast);
          border-radius: 2px;
        }

        .nav-link:hover::after {
          width: 100%;
        }

        .navbar-socials {
          display: flex;
          align-items: center;
          gap: 1.25rem;
        }

        .social-icon {
          color: var(--text-secondary);
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all var(--transition-fast);
        }

        .social-icon:hover {
          color: var(--accent-cyan);
          transform: translateY(-2px);
        }

        .social-icon svg {
          width: 20px;
          height: 20px;
        }

        .resume-btn {
          padding: 0.5rem 1.25rem;
          font-size: 0.85rem;
          border-radius: 6px;
        }

        /* Mobile Menu Toggle Button */
        .mobile-toggle {
          display: none;
          flex-direction: column;
          justify-content: space-between;
          width: 26px;
          height: 18px;
          background: transparent;
          border: none;
          cursor: pointer;
          z-index: 105;
        }

        .mobile-toggle span {
          width: 100%;
          height: 2px;
          background-color: var(--text-primary);
          transition: all var(--transition-normal);
          transform-origin: left center;
        }

        .mobile-toggle-active span:nth-child(1) {
          transform: rotate(45deg) translateY(-2px);
        }

        .mobile-toggle-active span:nth-child(2) {
          opacity: 0;
        }

        .mobile-toggle-active span:nth-child(3) {
          transform: rotate(-45deg) translateY(2px);
        }

        /* Mobile Slide-in Drawer */
        .mobile-nav-menu {
          position: fixed;
          top: 0;
          right: -100%;
          width: 100%;
          height: 100vh;
          background: rgba(7, 10, 19, 0.98);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          z-index: 99;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: right var(--transition-normal);
        }

        .mobile-nav-active {
          right: 0;
        }

        .mobile-nav-links {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 2rem;
        }

        .mobile-nav-links a {
          font-family: var(--font-heading);
          font-size: 1.5rem;
          font-weight: 600;
          color: var(--text-secondary);
          transition: color var(--transition-fast);
        }

        .mobile-nav-links a:hover {
          color: var(--accent-cyan);
        }

        .mobile-resume-btn {
          margin-top: 1rem;
          padding: 0.75rem 2rem;
          font-size: 1rem;
        }

        /* Responsive Styles */
        @media (max-width: 768px) {
          .navbar {
            padding: 1.25rem 1.5rem;
          }
          
          .navbar-scrolled {
            padding: 1rem 1.5rem;
          }

          .navbar-links,
          .navbar-socials {
            display: none;
          }

          .mobile-toggle {
            display: flex;
          }
        }
      `}</style>
    </>
  );
}
