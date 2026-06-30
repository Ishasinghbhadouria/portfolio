import { useState } from 'react';
import { portfolioData } from '../data/portfolioData';

export default function Contact() {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  // TO ACTIVATE REAL EMAILS: 
  // 1. Go to https://web3forms.com/ and enter your email to get a free Access Key.
  // 2. Paste your Access Key below:
  const WEB3FORMS_ACCESS_KEY = "e8576c3c-6db4-4b7f-8919-4450560784e1";

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData();
    formData.append("access_key", WEB3FORMS_ACCESS_KEY);
    formData.append("name", formState.name);
    formData.append("email", formState.email);
    formData.append("message", formState.message);
    formData.append("subject", "New Portfolio Message from " + formState.name);
    formData.append("from_name", "Portfolio Contact Form");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        setSubmitted(true);
        setFormState({ name: '', email: '', message: '' });
      } else {
        alert("Submission failed: " + data.message + ". Please make sure you have added your Web3Forms Access Key in Contact.jsx!");
      }
    } catch (error) {
      alert("An error occurred. Please check your connection and try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <section className="contact-section section-container reveal-on-scroll" id="contact">
      <div className="section-title-wrapper">
        <h2 className="section-title">
          <span className="text-gradient-cyber">04. </span>Get In Touch
        </h2>
        <div className="title-line"></div>
      </div>

      <div className="contact-content">
        {/* Left Side: Message and Social Tiles */}
        <div className="contact-info">
          <h3 className="contact-subtitle">Let's Create Something Amazing</h3>
          <p className="contact-description">
            I'm currently seeking internship opportunities for my final year and am always excited to collaborate on open-source projects or talk about web engineering. Feel free to drop a message or reach out on any platform!
          </p>

          <div className="social-grid">
            <a href={portfolioData.personal.socials.linkedin} target="_blank" rel="noreferrer" className="social-tile glass-card">
              <div className="tile-icon icon-linkedin">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
              </div>
              <div className="tile-info">
                <h4>LinkedIn</h4>
                <p>Connect Professionally</p>
              </div>
            </a>

            <a href={portfolioData.personal.socials.github} target="_blank" rel="noreferrer" className="social-tile glass-card">
              <div className="tile-icon icon-github">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
              </div>
              <div className="tile-info">
                <h4>GitHub</h4>
                <p>Explore My Repositories</p>
              </div>
            </a>

            <a href={portfolioData.personal.socials.instagram} target="_blank" rel="noreferrer" className="social-tile glass-card">
              <div className="tile-icon icon-instagram">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
              </div>
              <div className="tile-info">
                <h4>Instagram</h4>
                <p>Follow My Creative Journey</p>
              </div>
            </a>

            <a href={`mailto:${portfolioData.personal.email}`} className="social-tile glass-card">
              <div className="tile-icon icon-email">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
              </div>
              <div className="tile-info">
                <h4>Email</h4>
                <p>Send a Direct Message</p>
              </div>
            </a>

            <a href={portfolioData.personal.resumeUrl} target="_blank" rel="noreferrer" className="social-tile glass-card">
              <div className="tile-icon icon-resume">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
              </div>
              <div className="tile-info">
                <h4>Resume</h4>
                <p>Download My CV</p>
              </div>
            </a>
          </div>
        </div>

        {/* Right Side: Form */}
        <div className="contact-form-wrapper glass-card">
          {submitted ? (
            <div className="form-success-state">
              <div className="success-icon-glow">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
              </div>
              <h3>Message Sent!</h3>
              <p>Thank you for reaching out. I will get back to you as soon as possible.</p>
              <button className="glow-btn-outline" onClick={() => setSubmitted(false)} style={{ marginTop: '1.5rem' }}>
                Send Another Message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formState.name}
                  onChange={handleInputChange}
                  placeholder="Your Name"
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formState.email}
                  onChange={handleInputChange}
                  placeholder="your.email@example.com"
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows="5"
                  value={formState.message}
                  onChange={handleInputChange}
                  placeholder="Hey, let's talk about..."
                ></textarea>
              </div>

              <button type="submit" className="glow-btn form-submit-btn" disabled={isSubmitting}>
                {isSubmitting ? (
                  <span className="spinner"></span>
                ) : (
                  <>
                    Send Message
                    <svg style={{ marginLeft: '8px', width: '16px', height: '16px' }} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>
                  </>
                )}
              </button>
            </form>
          )}
        </div>
      </div>

      <style>{`
        .contact-section {
          position: relative;
          z-index: 1;
        }

        .contact-content {
          display: grid;
          grid-template-columns: 1fr 1.1fr;
          gap: 4rem;
          align-items: start;
        }

        .contact-info {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .contact-subtitle {
          font-size: 1.5rem;
          font-weight: 700;
          color: var(--text-primary);
        }

        .contact-description {
          font-size: 1rem;
          color: var(--text-secondary);
          line-height: 1.6;
        }

        /* Social Tiles Grid */
        .social-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 1rem;
          margin-top: 1rem;
        }

        .social-tile:nth-child(5) {
          grid-column: span 2;
        }

        @media (max-width: 480px) {
          .social-tile:nth-child(5) {
            grid-column: span 1;
          }
        }

        .social-tile {
          display: flex;
          align-items: center;
          gap: 1rem;
          padding: 1.25rem;
          border: 1px solid rgba(255, 255, 255, 0.03);
          border-radius: 12px;
          transition: all var(--transition-normal);
        }

        .social-tile:hover {
          transform: scale(1.03);
          border-color: rgba(0, 242, 254, 0.2);
          background: rgba(12, 16, 32, 0.9);
        }

        .tile-icon {
          width: 40px;
          height: 40px;
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #fff;
          background: rgba(255, 255, 255, 0.05);
          transition: background var(--transition-fast);
        }

        .social-tile:hover .tile-icon {
          background: var(--gradient-cyber);
          color: #000;
        }

        .tile-icon svg {
          width: 20px;
          height: 20px;
        }

        .tile-info h4 {
          font-size: 1rem;
          font-weight: 600;
          color: var(--text-primary);
          margin-bottom: 2px;
        }

        .tile-info p {
          font-size: 0.75rem;
          color: var(--text-secondary);
        }

        /* Contact Form Styling */
        .contact-form-wrapper {
          padding: 2.5rem;
          border: 1px solid rgba(255, 255, 255, 0.03);
          border-radius: 16px;
        }

        .contact-form {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .form-group {
          display: flex;
          flex-direction: column;
          gap: 6px;
        }

        .form-group label {
          font-size: 0.85rem;
          font-weight: 600;
          color: var(--text-secondary);
          font-family: var(--font-heading);
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        .form-group input,
        .form-group textarea {
          padding: 0.75rem 1rem;
          background: rgba(5, 7, 15, 0.6);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 8px;
          color: var(--text-primary);
          font-size: 0.95rem;
          transition: all var(--transition-fast);
        }

        .form-group input:focus,
        .form-group textarea:focus {
          outline: none;
          border-color: var(--accent-cyan);
          background: rgba(5, 7, 15, 0.9);
          box-shadow: 0 0 10px rgba(0, 242, 254, 0.15);
        }

        .form-submit-btn {
          width: 100%;
          padding: 0.85rem;
          margin-top: 0.5rem;
        }

        /* Success State Styling */
        .form-success-state {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
          padding: 2rem 0;
        }

        .success-icon-glow {
          width: 60px;
          height: 60px;
          border-radius: 50%;
          background: rgba(39, 201, 63, 0.1);
          border: 2px solid #27c93f;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #27c93f;
          margin-bottom: 1.5rem;
          box-shadow: 0 0 20px rgba(39, 201, 63, 0.3);
        }

        .success-icon-glow svg {
          width: 28px;
          height: 28px;
        }

        .form-success-state h3 {
          font-size: 1.5rem;
          margin-bottom: 0.5rem;
        }

        .form-success-state p {
          color: var(--text-secondary);
          font-size: 0.95rem;
          max-width: 300px;
        }

        /* Spinner for loading state */
        .spinner {
          width: 20px;
          height: 20px;
          border: 2px solid rgba(0, 0, 0, 0.1);
          border-top-color: #000;
          border-radius: 50%;
          animation: spin 0.8s linear infinite;
        }

        @keyframes spin {
          to { transform: rotate(360deg); }
        }

        /* Responsive Design */
        @media (max-width: 1024px) {
          .contact-content {
            grid-template-columns: 1fr;
            gap: 3rem;
          }
        }

        @media (max-width: 480px) {
          .social-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
}
