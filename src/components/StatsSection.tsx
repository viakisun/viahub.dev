import React from 'react';

const StatsSection: React.FC = () => {
  return (
    <section className="stats">
      <div className="stats-container">
        <h2 className="stats-title">
          Trusted by 500+ Agricultural Technology Companies
        </h2>
        <div className="stats-grid">
          <div className="stat-item">
            <div className="stat-number">2.5K+</div>
            <div className="stat-label">Farm Robots Deployed</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">45M</div>
            <div className="stat-label">Fruits Processed</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">99.2%</div>
            <div className="stat-label">Accuracy Rate</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">35%</div>
            <div className="stat-label">Yield Improvement</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
