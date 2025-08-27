import React from 'react';
import PageCard from './PageCard';

interface CardData {
  title: string;
  description: string;
  path: string;
  icon: string;
}

interface IndexSectionProps {
  title: string;
  cards: CardData[];
}

const IndexSection: React.FC<IndexSectionProps> = ({ title, cards }) => {
  return (
    <section className="features">
      <div className="features-header">
          <h2 className="features-title">{title}</h2>
      </div>
      <div className="features-grid">
        {cards.map((card) => (
          <PageCard key={card.title} {...card} />
        ))}
      </div>
    </section>
  );
};

export default IndexSection;
