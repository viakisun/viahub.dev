import React from 'react';

type LineType = 'command' | 'success' | 'info' | 'progress';

const lines: { text: string; type: LineType }[] = [
  { text: 'via deploy --target strawberry-farm', type: 'command' },
  { text: '✅ Fruit detection model loaded (97.3% accuracy)', type: 'success' },
  { text: '🤖 Deploying to 8 agricultural robots...', type: 'info' },
  { text: '████████████████████ 100% complete', type: 'progress' },
  { text: '🍓 Robot-Harvester-01: Ready for thinning', type: 'success' },
  { text: '🍓 Robot-Harvester-02: Navigation calibrated', type: 'success' },
  { text: '🍓 Robot-Harvester-03: Vision system active', type: 'success' },
  { text: '🔄 Starting precision thinning operation...', type: 'info' },
  { text: '✨ All robots operational. Farm productivity optimized.', type: 'success' },
];

const TerminalDemo: React.FC = () => {
  const getLineClass = (type: LineType) => {
    switch (type) {
      case 'success':
        return 'terminal-success';
      case 'info':
        return 'terminal-info';
      case 'progress':
        return 'terminal-progress';
      default:
        return 'terminal-command';
    }
  };

  return (
    <div className="terminal-demo">
      <div className="terminal-header">
        <div className="terminal-dot dot-red"></div>
        <div className="terminal-dot dot-yellow"></div>
        <div className="terminal-dot dot-green"></div>
        <span className="terminal-title">agricultural-robot-deploy</span>
      </div>
      <div className="terminal-content">
        {lines.map((line, index) => (
          <div key={index} className="terminal-line">
            {line.type === 'command' && <span className="terminal-prompt">$ </span>}
            <span className={getLineClass(line.type)}>{line.text}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TerminalDemo;
