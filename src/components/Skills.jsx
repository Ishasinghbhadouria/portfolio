import { portfolioData } from '../data/portfolioData';

export default function Skills() {
  return (
    <section className="skills-section section-container reveal-on-scroll" id="skills">
      <div className="section-title-wrapper">
        <h2 className="section-title">
          <span className="text-gradient-cyber">02. </span>Technical Skills
        </h2>
        <div className="title-line"></div>
      </div>

      <div className="skills-grid">
        {portfolioData.skills.map((category, catIdx) => (
          <div key={catIdx} className="skills-category-card glass-card">
            <h3 className="category-title">
              <span className="category-decorator">//</span> {category.category}
            </h3>
            
            <div className="skills-tags-container">
              {category.items.map((skill, skillIdx) => (
                <span 
                  key={skillIdx} 
                  className={`skill-tag ${catIdx % 2 === 0 ? 'tag-cyber' : 'tag-gold'}`}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      <style>{`
        .skills-section {
          position: relative;
          z-index: 1;
        }

        .skills-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 2rem;
        }

        .skills-category-card {
          padding: 2.5rem 2rem;
          border: 1px solid rgba(255, 255, 255, 0.03);
          border-radius: 16px;
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .category-title {
          font-size: 1.3rem;
          font-weight: 700;
          color: var(--text-primary);
          display: flex;
          align-items: center;
          gap: 8px;
          margin-bottom: 0.5rem;
        }

        .category-decorator {
          color: var(--accent-cyan);
          font-family: var(--font-mono);
          font-weight: 500;
        }

        .skills-tags-container {
          display: flex;
          flex-wrap: wrap;
          gap: 0.85rem;
        }

        .skill-tag {
          font-family: var(--font-heading);
          font-weight: 600;
          font-size: 0.95rem;
          padding: 0.5rem 1.1rem;
          border-radius: 8px;
          transition: all var(--transition-fast);
          cursor: default;
          border: 1px solid rgba(255, 255, 255, 0.05);
        }

        /* Cyber Theme Tag (Cyan/Blue Glow) */
        .tag-cyber {
          background: rgba(0, 242, 254, 0.03);
          color: var(--accent-cyan);
        }

        .tag-cyber:hover {
          background: rgba(0, 242, 254, 0.1);
          border-color: var(--accent-cyan);
          box-shadow: 0 0 15px rgba(0, 242, 254, 0.2);
          transform: translateY(-2px);
        }

        /* Gold Theme Tag (Gold/Orange Glow) */
        .tag-gold {
          background: rgba(242, 201, 76, 0.03);
          color: var(--accent-gold);
        }

        .tag-gold:hover {
          background: rgba(242, 201, 76, 0.1);
          border-color: var(--accent-gold);
          box-shadow: 0 0 15px rgba(242, 201, 76, 0.2);
          transform: translateY(-2px);
        }

        /* Responsive Design */
        @media (max-width: 768px) {
          .skills-grid {
            grid-template-columns: 1fr;
            gap: 1.5rem;
          }
        }
      `}</style>
    </section>
  );
}
