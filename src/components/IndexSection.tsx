import React from 'react';
import PageCard from './PageCard';

interface CardData {
  id: string;
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
    <section className="mb-16" aria-labelledby={title.toLowerCase()}>
      <h2
        id={title.toLowerCase()}
        className="mb-6 flex items-center gap-3 border-b border-white/10 pb-3 text-3xl font-bold"
      >
        <span className="text-golden">❖</span>
        {title}
      </h2>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {cards.map((card) => (
          <PageCard key={card.id} {...card} />
        ))}
      </div>
    </section>
  );
};

export default IndexSection;
