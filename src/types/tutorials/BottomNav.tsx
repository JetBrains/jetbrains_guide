import { Link } from 'gatsby';
import React from 'react';

export interface IBottomNavProps {
  previous?: {
    label: string;
    slug: string;
  };
  next?: {
    label: string;
    slug: string;
  };
}

const BottomNav: React.FunctionComponent<IBottomNavProps> = ({ previous, next }) => (
  <div className="columns is-size-6">
    <div className="column">
      {previous && (
        <Link to={previous.slug} className="bottomnav-previous is-small" style={{ textAlign: 'right' }}>
          <span className="icon" title={previous.label}>
            <i className="fas fa-arrow-left" />
          </span>
          <span style={{ paddingLeft: '1em' }}>{previous.label}</span>
        </Link>
      )}
    </div>
    <div className="column">
      {next && (
        <Link to={next.slug} className="bottomnav-next is-small" style={{ textAlign: 'left' }}>
          <span style={{ paddingRight: '1em' }}>{next.label}</span>
          <span className="icon" title={next.label}>
            <i className="fas fa-arrow-right" />
          </span>
        </Link>
      )}
    </div>
  </div>
);

export default BottomNav;
