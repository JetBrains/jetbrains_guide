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
  <div className="columns is-size-10 is-size-6">
    <div className="column has-text-left">
      {previous && (
        <Link to={previous.slug} className="bottomnav-previous is-small">
          <span className="icon" title={previous.label}>
            <i className="fas fa-arrow-left" />
          </span>
          <span style={{ paddingLeft: '1em' }}>{previous.label}</span>
        </Link>
      )}
    </div>
    <div className="column has-text-right">
      {next && (
        <Link to={next.slug} className="bottomnav-next is-small">
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
