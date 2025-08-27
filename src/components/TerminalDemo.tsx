import React from 'react';

type LineType = 'command' | 'success' | 'info' | 'progress';

const lineStyles: Record<LineType, string> = {
  command: 'text-dark-text-primary',
  success: 'text-green-400',
  info: 'text-cyan-400',
  progress: 'text-golden',
};

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
  return (
    <div className="max-w-3xl mx-auto rounded-xl border border-white/10 bg-dark-bg-secondary shadow-2xl shadow-black/50">
      <div className="flex items-center gap-2 rounded-t-xl border-b border-white/10 bg-white/5 px-4 py-3">
        <div className="h-3 w-3 rounded-full bg-red-500"></div>
        <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
        <div className="h-3 w-3 rounded-full bg-green-500"></div>
        <span className="ml-3 text-sm text-dark-text-secondary">agricultural-robot-deploy</span>
      </div>
      <div className="p-6 font-mono text-sm">
        {lines.map((line, index) => (
          <div key={index} className="terminal-line mb-2" style={{ animationDelay: `${index * 0.8}s` }}>
            {line.type === 'command' && <span className="mr-2 text-golden">$</span>}
            <span className={lineStyles[line.type]}>{line.text}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TerminalDemo;
