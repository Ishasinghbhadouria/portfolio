import { useState } from 'react';
import { portfolioData } from '../data/portfolioData';

export default function About() {
  const [activeTimelineIdx, setActiveTimelineIdx] = useState(3); // Year 4 (Current) active by default

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
              <span className="info-value">4th Year Undergraduate</span>
            </div>
            <div className="info-item">
              <span className="info-label">Internship</span>
              <span className="info-value">Webseeder Tech (MERN)</span>
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
            Hi! I am currently a <strong>4th-year undergraduate</strong> pursuing my <strong>Bachelor of Technology</strong> in Computer Science & Information Technology at Symbiosis University of Applied Sciences. During my 3rd year, I completed a MERN stack internship at <strong>Webseeder Technologies Private Ltd., Indore</strong>, where I developed full-stack web applications, REST APIs, and responsive interfaces. I love building performant, accessible digital products that merge clean code with delightful user experiences.
          </p>

          {/* Internship Experience */}
          {portfolioData.experience && portfolioData.experience.length > 0 && (
            <div className="experience-section">
              <h4 className="section-subheading">
                <span className="text-gradient-cyber">//</span> Internship Experience
              </h4>
              
              {portfolioData.experience.map((exp, idx) => (
                <div key={idx} className="experience-card glass-card">
                  <div className="exp-card-header">
                    <div>
                      <h5 className="exp-role">{exp.role}</h5>
                      <div className="exp-company-info">
                        <span className="exp-company text-gradient-cyber">{exp.company}</span>
                        <span className="exp-loc"> • {exp.location}</span>
                      </div>
                    </div>
                    <div className="exp-meta">
                      <span className="exp-pill-year">{exp.period}</span>
                      <span className="exp-duration-text">{exp.duration}</span>
                    </div>
                  </div>
                  <p className="exp-description">{exp.description}</p>
                  {exp.tech && (
                    <div className="exp-tech-list">
                      {exp.tech.map((t, tIdx) => (
                        <span key={tIdx} className="exp-tech-item">{t}</span>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}

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

        /* Experience Card Styles */
        .experience-section {
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
          margin-top: 0.5rem;
        }

        .section-subheading {
          font-size: 1.3rem;
          font-weight: 700;
          color: var(--text-primary);
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .experience-card {
          padding: 1.75rem 2rem;
          border: 1px solid rgba(0, 242, 254, 0.15);
          background: rgba(12, 16, 32, 0.85);
          border-radius: 14px;
          display: flex;
          flex-direction: column;
          gap: 1rem;
          transition: all var(--transition-normal);
          position: relative;
          overflow: hidden;
        }

        .experience-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 4px;
          height: 100%;
          background: var(--gradient-cyber);
        }

        .experience-card:hover {
          border-color: rgba(0, 242, 254, 0.35);
          box-shadow: 0 8px 32px rgba(0, 242, 254, 0.08);
          transform: translateY(-2px);
        }

        .exp-card-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          flex-wrap: wrap;
          gap: 1rem;
        }

        .exp-role {
          font-size: 1.2rem;
          font-weight: 700;
          color: var(--text-primary);
          margin-bottom: 0.35rem;
        }

        .exp-company-info {
          display: flex;
          align-items: center;
          flex-wrap: wrap;
          gap: 6px;
          font-size: 0.95rem;
        }

        .exp-company {
          font-weight: 600;
        }

        .exp-loc {
          color: var(--text-muted);
        }

        .exp-meta {
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .exp-pill-year {
          background: rgba(0, 242, 254, 0.1);
          color: var(--accent-cyan);
          border: 1px solid rgba(0, 242, 254, 0.25);
          padding: 0.25rem 0.75rem;
          border-radius: 20px;
          font-size: 0.8rem;
          font-weight: 700;
          font-family: var(--font-heading);
        }

        .exp-duration-text {
          color: var(--text-secondary);
          font-size: 0.85rem;
        }

        .exp-description {
          font-size: 0.95rem;
          color: var(--text-secondary);
          line-height: 1.6;
        }

        .exp-tech-list {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
        }

        .exp-tech-item {
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.08);
          color: var(--accent-cyan);
          font-size: 0.8rem;
          font-weight: 500;
          padding: 0.2rem 0.65rem;
          border-radius: 6px;
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
