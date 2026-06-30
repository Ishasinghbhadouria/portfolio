import { useState } from 'react';
import { portfolioData } from '../data/portfolioData';

export default function About() {
  const [activeTimelineIdx, setActiveTimelineIdx] = useState(2); // Year 3 active by default

  return (
    <section className="about-section section-container reveal-on-scroll" id="about">
      <div className="section-title-wrapper">
        <h2 className="section-title">
          <span className="text-gradient-cyber">01. </span>About Me
        </h2>
        <div className="title-line"></div>
      </div>

      <div className="about-content">
        {/* Profile Card */}
        <div className="profile-card glass-card">
          <div className="profile-header">
            <div className="avatar-glow">
              {/* Initials in a sleek cosmic circle */}
              <span>ISB</span>
            </div>
            <h3>{portfolioData.personal.name}</h3>
            <p className="profile-role">{portfolioData.personal.title}</p>
          </div>
          
          <div className="profile-info-list">
            <div className="info-item">
              <span className="info-label">Domain</span>
              <span className="info-value">Computer Science & IT</span>
            </div>
            <div className="info-item">
              <span className="info-label">Year</span>
              <span className="info-value">3rd Year Undergraduate</span>
            </div>
            <div className="info-item">
              <span className="info-label">Location</span>
              <span className="info-value">{portfolioData.personal.location}</span>
            </div>
            <div className="info-item">
              <span className="info-label">Email</span>
              <span className="info-value">{portfolioData.personal.email}</span>
            </div>
          </div>
        </div>

        {/* Timeline & Biography */}
        <div className="bio-timeline-wrapper">
          <p className="bio-paragraph">
            Hi! I am currently pursuing my **Bachelor of Technology** in Computer Science & Information Technology. My academic journey has allowed me to build a solid foundation in software engineering principles, algorithms, and web technologies. I enjoy building things that live on the internet, whether that be websites, applications, or anything in between.
          </p>

          <h4 className="timeline-heading">My B.Tech Journey</h4>
          <div className="timeline-container">
            {portfolioData.timeline.map((item, idx) => (
              <div 
                key={idx} 
                className={`timeline-item ${idx === activeTimelineIdx ? 'timeline-active' : ''}`}
                onClick={() => setActiveTimelineIdx(idx)}
              >
                <div className="timeline-badge-connector">
                  <div className="timeline-badge">
                    <span className="badge-inner-dot"></span>
                  </div>
                  {idx !== portfolioData.timeline.length - 1 && <div className="timeline-connector-line"></div>}
                </div>
                
                <div className="timeline-details glass-card">
                  <span className="timeline-year text-gradient-gold">{item.year}</span>
                  <h5 className="timeline-title">{item.title}</h5>
                  <p className="timeline-description">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .about-section {
          position: relative;
          z-index: 1;
        }

        .section-title-wrapper {
          display: flex;
          align-items: center;
          gap: 1.5rem;
          margin-bottom: 3rem;
        }

        .section-title {
          font-size: 2.2rem;
          font-weight: 800;
        }

        .title-line {
          flex: 1;
          height: 1px;
          background: linear-gradient(90deg, var(--accent-cyan), transparent);
          max-width: 300px;
        }

        .about-content {
          display: grid;
          grid-template-columns: 1fr 1.8fr;
          gap: 4rem;
          align-items: start;
        }

        /* Profile Card Styling */
        .profile-card {
          padding: 2.5rem 2rem;
          text-align: center;
          border: 1px solid rgba(255, 255, 255, 0.05);
          position: sticky;
          top: 100px;
        }

        .avatar-glow {
          width: 90px;
          height: 90px;
          border-radius: 50%;
          background: var(--gradient-cyber);
          margin: 0 auto 1.5rem auto;
          display: flex;
          align-items: center;
          justify-content: center;
          font-family: var(--font-heading);
          font-weight: 800;
          font-size: 1.5rem;
          color: #000;
          box-shadow: 0 0 20px rgba(0, 242, 254, 0.4);
        }

        .profile-card h3 {
          font-size: 1.4rem;
          margin-bottom: 0.5rem;
        }

        .profile-role {
          color: var(--accent-cyan);
          font-size: 0.9rem;
          font-weight: 500;
          margin-bottom: 2rem;
        }

        .profile-info-list {
          display: flex;
          flex-direction: column;
          gap: 1rem;
          text-align: left;
        }

        .info-item {
          display: flex;
          justify-content: space-between;
          border-bottom: 1px solid rgba(255, 255, 255, 0.05);
          padding-bottom: 0.5rem;
          font-size: 0.9rem;
        }

        .info-label {
          color: var(--text-secondary);
        }

        .info-value {
          color: var(--text-primary);
          font-weight: 500;
        }

        /* Timeline and Bio Styling */
        .bio-timeline-wrapper {
          display: flex;
          flex-direction: column;
          gap: 2rem;
        }

        .bio-paragraph {
          font-size: 1.05rem;
          color: var(--text-secondary);
          line-height: 1.7;
        }

        .bio-paragraph strong {
          color: var(--text-primary);
          font-weight: 600;
        }

        .timeline-heading {
          font-size: 1.3rem;
          font-weight: 700;
          margin-top: 1rem;
          border-left: 3px solid var(--accent-gold);
          padding-left: 10px;
        }

        .timeline-container {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .timeline-item {
          display: grid;
          grid-template-columns: 40px 1fr;
          gap: 1rem;
          cursor: pointer;
        }

        .timeline-badge-connector {
          display: flex;
          flex-direction: column;
          align-items: center;
          position: relative;
        }

        .timeline-badge {
          width: 24px;
          height: 24px;
          border-radius: 50%;
          border: 2px solid var(--text-muted);
          background: var(--bg-primary);
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all var(--transition-fast);
          z-index: 2;
        }

        .badge-inner-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: transparent;
          transition: all var(--transition-fast);
        }

        .timeline-connector-line {
          width: 2px;
          flex: 1;
          background: var(--text-muted);
          position: absolute;
          top: 24px;
          bottom: -24px;
          z-index: 1;
        }

        .timeline-details {
          padding: 1.5rem;
          border: 1px solid rgba(255, 255, 255, 0.03);
          transform: scale(0.98);
          transition: all var(--transition-normal);
        }

        .timeline-year {
          font-size: 0.85rem;
          font-weight: 700;
          font-family: var(--font-heading);
          display: block;
          margin-bottom: 0.25rem;
        }

        .timeline-title {
          font-size: 1.1rem;
          margin-bottom: 0.5rem;
          color: var(--text-primary);
        }

        .timeline-description {
          font-size: 0.95rem;
          color: var(--text-secondary);
          line-height: 1.5;
        }

        /* Active Timeline State */
        .timeline-active .timeline-badge {
          border-color: var(--accent-cyan);
          box-shadow: 0 0 10px rgba(0, 242, 254, 0.4);
        }

        .timeline-active .badge-inner-dot {
          background: var(--accent-cyan);
        }

        .timeline-active .timeline-details {
          border-color: rgba(0, 242, 254, 0.2);
          box-shadow: 0 4px 20px rgba(0, 242, 254, 0.05);
          transform: scale(1);
          background: rgba(12, 16, 32, 0.9);
        }

        /* Responsive Design */
        @media (max-width: 1024px) {
          .about-content {
            grid-template-columns: 1fr;
            gap: 3rem;
          }
          
          .profile-card {
            position: relative;
            top: 0;
            max-width: 500px;
            margin: 0 auto;
          }
        }
      `}</style>
    </section>
  );
}
