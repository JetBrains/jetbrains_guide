import * as React from 'react';
import { Link } from 'gatsby';

import { PrevNext } from './models';

export interface BottomNavProps {
  previous?: PrevNext;
  next?: PrevNext;
  playlistLabel?: string;
}

const BottomNav: React.FC<BottomNavProps> = ({
  previous,
  next,
  playlistLabel,
}) => {
  // If playlistLabel is passed in, tack it onto the links for going
  // forward and backwards, to allow presenting the previous/next
  // item in the context of a playlist.
  const playlistPrefix = playlistLabel ? `?playlist=${playlistLabel}` : '';
  return (
    <div className="columns is-size-10 is-size-6">
      <div className="column has-text-left">
        {previous && (
          <Link
            to={`${previous.slug}${playlistPrefix}`}
            className="bottomnav-previous is-small"
          >
            <span className="icon" title={previous.label}>
              <i className="fas fa-arrow-left" />
            </span>
            <span style={{ paddingLeft: '1em' }}>{previous.label}</span>
          </Link>
        )}
      </div>
      <div className="column has-text-right">
        {next && (
          <Link
            to={`${next.slug}${playlistPrefix}`}
            className="bottomnav-next is-small"
          >
            <span style={{ paddingRight: '1em' }}>{next.label}</span>
            <span className="icon" title={next.label}>
              <i className="fas fa-arrow-right" />
            </span>
          </Link>
        )}
      </div>
    </div>
  );
};

export default BottomNav;
