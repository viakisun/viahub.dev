import React from 'react';

interface PageCardProps {
  title: string;
  description: string;
  path: string;
  icon: string;
}

const PageCard: React.FC<PageCardProps> = ({ title, description, path, icon }) => {
  return (
    <a
      href={path}
      className="feature-card"
      data-testid={`card-${title.toLowerCase()}`}
      style={{textDecoration: 'none', display: 'flex', flexDirection: 'column'}}
    >
      <div className="feature-icon">{icon}</div>
      <h3 className="feature-title">{title}</h3>
      <p className="feature-description" style={{flexGrow: 1}}>{description}</p>
      <div
        className="btn btn-secondary"
        style={{marginTop: 'auto', textAlign: 'center', display: 'block'}}
      >
        Open
      </div>
    </a>
  );
};

export default PageCard;
