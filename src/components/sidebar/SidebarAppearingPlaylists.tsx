import { Link } from 'gatsby';
import React from 'react';

export interface IPlaylistItem {
  label: string;
  slug: string;
}

export interface ISidebarPlaylistsProps {
  playlists?: IPlaylistItem[];
}

const SidebarPlaylists: React.FC<ISidebarPlaylistsProps> = ({ playlists }) => {
  return (
    <div className="bio-page-sidebar-references-group" style={{ marginTop: '1rem' }}>
      {playlists && playlists.length > 0 && (
        <>
          <p className="menu-label bio-page-sidebar-published">In Playlists</p>
          <ul className="menu-list is-small">
            {playlists.map(playlist => (
              <li key={playlist.slug}>
                <Link to={playlist.slug}>{playlist.label}</Link>
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
};

export default SidebarPlaylists;
