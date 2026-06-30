import { useState, useEffect, useRef } from 'react';
import { portfolioData } from '../data/portfolioData';
import { useMousePosition } from '../utils/useMousePosition';

export default function Hero() {
  const [typedText, setTypedText] = useState('');
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  
  const imageCardRef = useRef(null);
  const mousePos = useMousePosition(imageCardRef);

  const roles = [
    "Full-Stack Developer",
    "CSIT Undergraduate",
    "Problem Solver",
    "Tech Enthusiast"
  ];

  // Typewriter effect
  useEffect(() => {
    const currentRole = roles[roleIndex];
    let timer;

    if (isDeleting) {
      timer = setTimeout(() => {
        setTypedText(currentRole.substring(0, charIndex - 1));
        setCharIndex((prev) => prev - 1);
      }, 50);
    } else {
      timer = setTimeout(() => {
        setTypedText(currentRole.substring(0, charIndex + 1));
        setCharIndex((prev) => prev + 1);
      }, 100);
    }

    if (!isDeleting && charIndex === currentRole.length) {
      timer = setTimeout(() => setIsDeleting(true), 1500);
    } else if (isDeleting && charIndex === 0) {
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }

    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, roleIndex]);

  // 3D Tilt calculation
  const tiltStyle = {
    transform: `perspective(1000px) rotateX(${mousePos.percentageY * -0.15}deg) rotateY(${mousePos.percentageX * 0.15}deg) scale3d(1.02, 1.02, 1.02)`,
    transition: mousePos.x === 0 ? 'transform 0.5s ease' : 'none'
  };

  return (
    <section className="hero-section" id="home">
      <div className="hero-container">
        {/* Left Side: Text and Intro */}
        <div className="hero-info-panel">
          <div className="hero-badge">
            <span className="badge-dot"></span>
            Available for Internships
          </div>
          
          <h1 className="hero-title">
            Hi, I'm <br />
            <span className="text-gradient-cyber">{portfolioData.personal.name}</span>
          </h1>

          <h2 className="hero-subtitle">
            I am a <span className="typewriter-text">{typedText}</span>
            <span className="typewriter-cursor">|</span>
          </h2>

          <p className="hero-description">
            {portfolioData.personal.bio}
          </p>

          <div className="hero-ctas">
            <a href="#projects" className="glow-btn">
              View My Work
              <svg style={{ marginLeft: '8px', width: '16px', height: '16px' }} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
            </a>
            <a href="#contact" className="glow-btn-outline">
              Let's Connect
            </a>
          </div>
        </div>

        {/* Right Side: Glowing Portrait with 3D Tilt */}
        <div className="hero-interactive-panel">
          <div 
            ref={imageCardRef}
            className="portrait-card glass-card"
            style={tiltStyle}
          >
            <div className="portrait-glow-layer"></div>
            <div className="portrait-image-wrapper">
              <img 
                src="/profile.jpg" 
                alt={portfolioData.personal.name} 
                className="portrait-image"
              />
            </div>
            <div className="portrait-decorator-border"></div>
            <div className="portrait-tag">CSIT @ Symbiosis</div>
          </div>
        </div>
      </div>

      <style>{`
        .hero-section {
          min-height: 100vh;
          display: flex;
          align-items: center;
          padding: 7rem 1.5rem 3rem 1.5rem;
          position: relative;
          z-index: 1;
        }

        .hero-container {
          max-width: 1200px;
          width: 100%;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1.2fr 1fr;
          gap: 4rem;
          align-items: center;
        }

        .hero-info-panel {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
        }

        .hero-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 0.5rem 1rem;
          background: rgba(0, 242, 254, 0.05);
          border: 1px solid rgba(0, 242, 254, 0.15);
          border-radius: 50px;
          font-size: 0.85rem;
          font-weight: 500;
          color: var(--accent-cyan);
          margin-bottom: 1.5rem;
          font-family: var(--font-heading);
        }

        .badge-dot {
          width: 8px;
          height: 8px;
          background-color: var(--accent-cyan);
          border-radius: 50%;
          animation: pulse-glow 2s infinite;
        }

        .hero-title {
          font-size: 3.8rem;
          font-weight: 800;
          line-height: 1.1;
          margin-bottom: 1.5rem;
        }

        .hero-subtitle {
          font-size: 1.8rem;
          font-weight: 600;
          color: var(--text-secondary);
          margin-bottom: 1.5rem;
          min-height: 2.7rem;
          display: flex;
          align-items: center;
        }

        .typewriter-text {
          color: var(--accent-gold);
          margin-left: 8px;
        }

        .typewriter-cursor {
          color: var(--accent-cyan);
          font-weight: 300;
          animation: blink 0.8s step-end infinite;
        }

        .hero-description {
          font-size: 1.1rem;
          color: var(--text-secondary);
          max-width: 540px;
          margin-bottom: 2.5rem;
        }

        .hero-ctas {
          display: flex;
          gap: 1.25rem;
          flex-wrap: wrap;
        }

        .hero-interactive-panel {
          display: flex;
          justify-content: center;
          width: 100%;
        }

        /* 3D Portrait Card Styling */
        .portrait-card {
          position: relative;
          width: 320px;
          height: 420px;
          border-radius: 20px;
          padding: 12px;
          background: rgba(12, 16, 32, 0.4);
          border: 1px solid rgba(0, 242, 254, 0.15);
          box-shadow: 0 20px 50px rgba(0, 0, 0, 0.5);
          cursor: pointer;
          transform-style: preserve-3d;
        }

        .portrait-glow-layer {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          border-radius: 20px;
          background: radial-gradient(circle at 50% 50%, rgba(0, 242, 254, 0.12) 0%, transparent 70%);
          pointer-events: none;
          z-index: 1;
        }

        .portrait-image-wrapper {
          width: 100%;
          height: 100%;
          border-radius: 16px;
          overflow: hidden;
          position: relative;
          border: 1px solid rgba(255, 255, 255, 0.05);
          transform: translateZ(20px); /* Lift image slightly in 3D */
        }

        .portrait-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
          transition: transform 0.5s ease;
        }

        .portrait-card:hover .portrait-image {
          transform: scale(1.05);
        }

        .portrait-decorator-border {
          position: absolute;
          top: -8px;
          right: -8px;
          width: 80px;
          height: 80px;
          border-top: 3px solid var(--accent-gold);
          border-right: 3px solid var(--accent-gold);
          border-top-right-radius: 12px;
          pointer-events: none;
          z-index: 2;
          transform: translateZ(10px);
        }

        .portrait-tag {
          position: absolute;
          bottom: 24px;
          left: 50%;
          transform: translateX(-50%) translateZ(30px);
          padding: 0.5rem 1.25rem;
          background: rgba(7, 10, 19, 0.85);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 30px;
          font-family: var(--font-heading);
          font-size: 0.85rem;
          font-weight: 600;
          color: var(--text-primary);
          white-space: nowrap;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.4);
        }

        /* Responsive Design */
        @media (max-width: 1024px) {
          .hero-container {
            grid-template-columns: 1fr;
            gap: 4rem;
            text-align: center;
          }

          .hero-info-panel {
            align-items: center;
          }

          .hero-title {
            font-size: 3.2rem;
          }

          .hero-subtitle {
            font-size: 1.5rem;
            justify-content: center;
          }

          .hero-description {
            margin-left: auto;
            margin-right: auto;
          }

          .hero-ctas {
            justify-content: center;
          }

          .portrait-card {
            width: 290px;
            height: 380px;
          }
        }

        @media (max-width: 480px) {
          .hero-title {
            font-size: 2.5rem;
          }
          
          .hero-subtitle {
            font-size: 1.25rem;
          }

          .portrait-card {
            width: 260px;
            height: 340px;
          }
        }
      `}</style>
    </section>
  );
}
