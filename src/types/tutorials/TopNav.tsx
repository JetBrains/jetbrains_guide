import { Link } from 'gatsby';
import React from 'react';

export interface ITopNavProps {
  up: {
    label: string;
    slug: string;
  };
  previous?: {
    label: string;
    slug: string;
  };
  next?: {
    label: string;
    slug: string;
  };
}

const TopNav: React.FunctionComponent<ITopNavProps> = ({ up, previous, next }) => (
  <div className="columns is-size-6">
    <div className="column is-10">
      Up to:{' '}
      <Link className="topnav-up" to={up.slug}>
        {up.label}
      </Link>
    </div>
    <div className="column" style={{ textAlign: 'right' }}>
      {previous && (
        <Link to={previous.slug} className="topnav-previous button is-small" style={{ border: 'none' }}>
          <span className="icon" title={previous.label}>
            <i className="fas fa-arrow-left" />
          </span>
        </Link>
      )}
      {next && (
        <Link to={next.slug} className="topnav-next button is-small" style={{ border: 'none' }}>
          <span className="icon" title={next.label}>
            <i className="fas fa-arrow-right" />
          </span>
        </Link>
      )}
    </div>
  </div>
);

export default TopNav;
