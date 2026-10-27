import { useState, useRef, useEffect } from 'react';
import { portfolioData } from '../data/portfolioData';

export default function Terminal() {
  const [history, setHistory] = useState([
    { text: 'AETHER TERMINAL [Version 1.0.0]', type: 'system' },
    { text: 'Initializing neural link to Isha\'s portfolio...', type: 'system' },
    { text: 'System Online. Type "help" to view available commands.', type: 'system' },
    { text: '', type: 'spacer' }
  ]);
  const [input, setInput] = useState('');
  const terminalEndRef = useRef(null);
  const inputRef = useRef(null);

  const focusInput = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  useEffect(() => {
    terminalEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  // Focus terminal input on mount
  useEffect(() => {
    focusInput();
  }, []);

  const handleCommand = (cmd) => {
    const trimmed = cmd.trim().toLowerCase();
    let response = [];

    switch (trimmed) {
      case 'help':
        response = [
          { text: 'Available commands:', type: 'output' },
          { text: '  about      - Show professional bio and background', type: 'output' },
          { text: '  experience - View internship and industry experience', type: 'output' },
          { text: '  skills     - List technical skills by category', type: 'output' },
          { text: '  projects   - List featured development projects', type: 'output' },
          { text: '  resume     - Open resume PDF in a new tab', type: 'output' },
          { text: '  clear      - Clear terminal history', type: 'output' },
        ];
        break;
      case 'experience':
        response = [
          { text: 'Professional Experience:', type: 'output' }
        ];
        if (portfolioData.experience) {
          portfolioData.experience.forEach(exp => {
            response.push({ text: `> ${exp.role} @ ${exp.company}`, type: 'output-header' });
            response.push({ text: `  Location: ${exp.location} | Period: ${exp.period} (${exp.duration})`, type: 'output' });
            response.push({ text: `  Details: ${exp.description}`, type: 'output' });
            if (exp.tech) {
              response.push({ text: `  Tech: ${exp.tech.join(', ')}`, type: 'output' });
            }
          });
        }
        break;
      case 'about':
        response = [
          { text: `Name: ${portfolioData.personal.name}`, type: 'output' },
          { text: `Title: ${portfolioData.personal.title}`, type: 'output' },
          { text: `Year: ${portfolioData.personal.year || '4th Year Undergraduate'}`, type: 'output' },
          { text: `Bio: ${portfolioData.personal.bio}`, type: 'output' },
          { text: `Location: ${portfolioData.personal.location}`, type: 'output' }
        ];
        break;
      case 'skills':
        response = [
          { text: 'Technical Skills:', type: 'output' }
        ];
        portfolioData.skills.forEach(cat => {
          response.push({ text: `[${cat.category}]`, type: 'output-header' });
          const itemsList = cat.items.map(i => `${i.name} (${i.level}%)`).join(', ');
          response.push({ text: `  ${itemsList}`, type: 'output' });
        });
        break;
      case 'projects':
        response = [
          { text: 'Featured Projects:', type: 'output' }
        ];
        portfolioData.projects.forEach(p => {
          response.push({ text: `> ${p.title} (${p.category})`, type: 'output-header' });
          response.push({ text: `  Desc: ${p.description}`, type: 'output' });
          response.push({ text: `  Tech: ${p.tech.join(', ')}`, type: 'output' });
        });
        break;
      case 'resume':
        response = [{ text: 'Opening resume...', type: 'system' }];
        window.open(portfolioData.personal.resumeUrl, '_blank');
        break;
      case 'clear':
        setHistory([]);
        setInput('');
        return;
      case '':
        break;
      default:
        response = [
          { text: `Command not found: "${trimmed}". Type "help" for a list of commands.`, type: 'error' }
        ];
    }

    setHistory((prev) => [
      ...prev,
      { text: `guest@isha-portfolio:~$ ${cmd}`, type: 'command' },
      ...response,
      { text: '', type: 'spacer' }
    ]);
    setInput('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleCommand(input);
  };

  return (
    <div className="terminal-container glass-card" onClick={focusInput}>
      {/* Terminal Header */}
      <div className="terminal-header">
        <div className="terminal-buttons">
          <span className="dot dot-red"></span>
          <span className="dot dot-yellow"></span>
          <span className="dot dot-green"></span>
        </div>
        <div className="terminal-title">bash - guest@isha-portfolio</div>
        <div style={{ width: '48px' }}></div> {/* Spacer */}
      </div>

      {/* Terminal Body */}
      <div className="terminal-body">
        <div className="terminal-history">
          {history.map((line, idx) => (
            <div key={idx} className={`terminal-line line-${line.type}`}>
              {line.text}
            </div>
          ))}
          <div ref={terminalEndRef} />
        </div>

        {/* Input Form */}
        <form onSubmit={handleSubmit} className="terminal-input-form">
          <span className="terminal-prompt">guest@isha-portfolio:~$</span>
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="terminal-input"
            autoComplete="off"
            autoCorrect="off"
            autoCapitalize="off"
            spellCheck="false"
          />
          <span className="cursor-blink">_</span>
        </form>
      </div>

      <style>{`
        .terminal-container {
          width: 100%;
          max-width: 700px;
          height: 350px;
          display: flex;
          flex-direction: column;
          border-radius: 12px;
          overflow: hidden;
          font-family: var(--font-mono);
          font-size: 0.85rem;
          box-shadow: 0 10px 40px rgba(0, 0, 0, 0.6);
          border: 1px solid rgba(0, 242, 254, 0.1);
        }

        .terminal-container:hover {
          border-color: rgba(0, 242, 254, 0.3);
          box-shadow: 0 10px 40px rgba(0, 242, 254, 0.1);
        }

        .terminal-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 0.5rem 1rem;
          background: rgba(10, 15, 30, 0.8);
          border-bottom: 1px solid rgba(255, 255, 255, 0.05);
          user-select: none;
        }

        .terminal-buttons {
          display: flex;
          gap: 6px;
        }

        .dot {
          width: 10px;
          height: 10px;
          border-radius: 50%;
        }

        .dot-red { background: #ff5f56; }
        .dot-yellow { background: #ffbd2e; }
        .dot-green { background: #27c93f; }

        .terminal-title {
          color: var(--text-secondary);
          font-size: 0.75rem;
        }

        .terminal-body {
          flex: 1;
          padding: 1rem;
          overflow-y: auto;
          background: rgba(5, 7, 15, 0.95);
          display: flex;
          flex-direction: column;
        }

        .terminal-history {
          display: flex;
          flex-direction: column;
          gap: 4px;
        }

        .terminal-line {
          white-space: pre-wrap;
          line-height: 1.4;
        }

        .line-system {
          color: var(--text-muted);
        }

        .line-command {
          color: var(--accent-cyan);
        }

        .line-output {
          color: var(--text-primary);
        }

        .line-output-header {
          color: var(--accent-gold);
          font-weight: 500;
          margin-top: 4px;
        }

        .line-error {
          color: #ff5f56;
        }

        .line-spacer {
          height: 6px;
        }

        .terminal-input-form {
          display: flex;
          align-items: center;
          margin-top: 4px;
        }

        .terminal-prompt {
          color: var(--accent-cyan);
          margin-right: 8px;
          white-space: nowrap;
        }

        .terminal-input {
          flex: 1;
          background: transparent;
          border: none;
          outline: none;
          color: var(--text-primary);
          font-family: var(--font-mono);
          font-size: 0.85rem;
          caret-color: transparent; /* custom cursor */
        }

        .cursor-blink {
          color: var(--accent-cyan);
          font-weight: bold;
          animation: blink 1s step-end infinite;
        }
      `}</style>
    </div>
  );
}
