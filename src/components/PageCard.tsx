import React from 'react';
import { Link } from 'react-router-dom';

interface PageCardProps {
  id: string;
  title: string;
  description: string;
  path: string;
}

const PageCard: React.FC<PageCardProps> = ({ id, title, description, path }) => {
  return (
    <Link
      to={path}
      className="group flex flex-col rounded-xl border border-white/10 bg-white/5 p-6 text-white transition-all duration-200 ease-in-out hover:-translate-y-1 hover:border-golden hover:shadow-2xl hover:shadow-golden/20"
    >
      <div className="mb-3 flex items-start justify-between">
        <h3 className="text-xl font-bold text-dark-text-primary">{title}</h3>
        <span className="ml-4 whitespace-nowrap rounded-md bg-white/10 px-2 py-1 font-mono text-xs text-dark-text-secondary">
          {id}
        </span>
      </div>
      <p className="mb-6 flex-grow text-sm text-dark-text-secondary">{description}</p>
      <div className="mt-auto flex items-center justify-center rounded-lg bg-white/10 py-2 font-semibold text-dark-text-primary transition-colors group-hover:bg-golden group-hover:text-dark-bg-primary">
        Open <span className="ml-2 transition-transform group-hover:translate-x-1">→</span>
      </div>
    </Link>
  );
};

export default PageCard;
