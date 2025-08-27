import React from 'react';

const StatsSection: React.FC = () => {
  return (
    <section className="py-20 text-center">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-lg text-dark-text-secondary">
          Trusted by 500+ Agricultural Technology Companies
        </h2>
        <div className="mt-10 grid grid-cols-2 gap-8 md:grid-cols-4">
          <div className="text-center">
            <div className="text-4xl font-bold text-dark-text-primary">2.5K+</div>
            <div className="mt-2 text-sm text-dark-text-secondary">Farm Robots Deployed</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-dark-text-primary">45M</div>
            <div className="mt-2 text-sm text-dark-text-secondary">Fruits Processed</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-dark-text-primary">99.2%</div>
            <div className="mt-2 text-sm text-dark-text-secondary">Accuracy Rate</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-dark-text-primary">35%</div>
            <div className="mt-2 text-sm text-dark-text-secondary">Yield Improvement</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
