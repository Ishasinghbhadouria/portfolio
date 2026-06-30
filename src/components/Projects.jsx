import { portfolioData } from '../data/portfolioData';

export default function Projects() {
  const project = portfolioData.projects[0]; // GlowWear Ecommerce

  return (
    <section className="projects-section section-container reveal-on-scroll" id="projects">
      <div className="section-title-wrapper">
        <h2 className="section-title">
          <span className="text-gradient-cyber">03. </span>Featured Work
        </h2>
        <div className="title-line"></div>
      </div>

      <div className="project-spotlight-container">
        <div className="project-spotlight-card glass-card">
          {/* Spotlight Glow Background */}
          <div className="spotlight-glow"></div>
          
          <div className="project-content-layout">
            {/* Left Info */}
            <div className="project-info-block">
              <div className="project-badge">
                <span className="project-badge-dot"></span>
                Featured Project
              </div>
              
              <h3 className="project-title">{project.title}</h3>
              
              <p className="project-description">
                {project.description}
              </p>
              
              <div className="project-tech-tags">
                {project.tech.map((tech, idx) => (
                  <span key={idx} className="tech-pill">{tech}</span>
                ))}
              </div>

              <div className="project-ctas">
                <a href={project.live} target="_blank" rel="noreferrer" className="glow-btn spotlight-btn">
                  Live Demo
                  <svg style={{ marginLeft: '8px', width: '16px', height: '16px' }} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>
                </a>
                <a href={project.github} target="_blank" rel="noreferrer" className="glow-btn-outline spotlight-btn">
                  GitHub Code
                  <svg style={{ marginLeft: '8px', width: '16px', height: '16px' }} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                </a>
              </div>
            </div>

            {/* Right Graphic/Mockup */}
            <div className="project-visual-block">
              <div className="visual-mockup">
                <div className="mockup-header">
                  <span className="mockup-dot"></span>
                  <span className="mockup-dot"></span>
                  <span className="mockup-dot"></span>
                </div>
                <div className="mockup-body">
                  <div className="mockup-logo">GlowWear</div>
                  <div className="mockup-grid">
                    <div className="mockup-item"></div>
                    <div className="mockup-item"></div>
                    <div className="mockup-item"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .projects-section {
          position: relative;
          z-index: 1;
        }

        .project-spotlight-container {
          max-width: 900px;
          margin: 0 auto;
        }

        .project-spotlight-card {
          position: relative;
          padding: 3.5rem 3rem;
          border: 1px solid rgba(0, 242, 254, 0.1);
          border-radius: 20px;
          overflow: hidden;
          transition: all var(--transition-normal);
        }

        .project-spotlight-card:hover {
          border-color: rgba(0, 242, 254, 0.25);
          box-shadow: 0 10px 40px rgba(0, 242, 254, 0.05);
        }

        .spotlight-glow {
          position: absolute;
          top: -20%;
          right: -20%;
          width: 60%;
          height: 80%;
          background: radial-gradient(circle at 50% 50%, rgba(0, 242, 254, 0.08) 0%, transparent 70%);
          pointer-events: none;
          z-index: 1;
        }

        .project-content-layout {
          display: grid;
          grid-template-columns: 1.2fr 1fr;
          gap: 3rem;
          align-items: center;
          position: relative;
          z-index: 2;
        }

        .project-info-block {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 1.25rem;
        }

        .project-badge {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 0.4rem 0.85rem;
          background: rgba(242, 201, 76, 0.05);
          border: 1px solid rgba(242, 201, 76, 0.15);
          border-radius: 30px;
          font-size: 0.75rem;
          font-weight: 600;
          color: var(--accent-gold);
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        .project-badge-dot {
          width: 6px;
          height: 6px;
          background-color: var(--accent-gold);
          border-radius: 50%;
          animation: pulse-glow 2s infinite;
        }

        .project-title {
          font-size: 2rem;
          font-weight: 800;
          color: var(--text-primary);
        }

        .project-description {
          font-size: 1rem;
          color: var(--text-secondary);
          line-height: 1.6;
        }

        .project-tech-list,
        .project-tech-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 0.6rem;
        }

        .tech-pill {
          font-family: var(--font-mono);
          font-size: 0.75rem;
          color: var(--accent-cyan);
          background: rgba(0, 242, 254, 0.05);
          padding: 0.3rem 0.75rem;
          border-radius: 4px;
          border: 1px solid rgba(0, 242, 254, 0.1);
        }

        .project-ctas {
          display: flex;
          gap: 1rem;
          margin-top: 0.75rem;
          flex-wrap: wrap;
        }

        .spotlight-btn {
          padding: 0.6rem 1.25rem;
          font-size: 0.85rem;
          border-radius: 6px;
        }

        /* Right Side visual mockup */
        .project-visual-block {
          display: flex;
          justify-content: center;
        }

        .visual-mockup {
          width: 100%;
          max-width: 320px;
          background: rgba(5, 7, 15, 0.8);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0 15px 35px rgba(0, 0, 0, 0.6);
        }

        .mockup-header {
          display: flex;
          gap: 5px;
          padding: 0.5rem;
          background: rgba(255, 255, 255, 0.03);
          border-bottom: 1px solid rgba(255, 255, 255, 0.05);
        }

        .mockup-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.2);
        }

        .mockup-body {
          padding: 1.5rem;
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .mockup-logo {
          font-family: var(--font-heading);
          font-weight: 800;
          font-size: 0.9rem;
          color: var(--accent-cyan);
          letter-spacing: -0.02em;
        }

        .mockup-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 0.5rem;
        }

        .mockup-item {
          aspect-ratio: 1;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.05);
          border-radius: 6px;
        }

        /* Responsive Design */
        @media (max-width: 850px) {
          .project-spotlight-card {
            padding: 2.5rem 2rem;
          }
          
          .project-content-layout {
            grid-template-columns: 1fr;
            gap: 2.5rem;
          }

          .project-visual-block {
            display: none; /* Hide visual on smaller screens to prioritize text */
          }
        }
      `}</style>
    </section>
  );
}
