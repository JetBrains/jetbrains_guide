import * as React from 'react';
import { Link } from 'gatsby';

interface PlaylistItem {
  title: string;
  href: string;
}

export interface SidebarPlaylistsProps {
  playlists?: PlaylistItem[];
}

const SidebarPlaylists: React.FC<SidebarPlaylistsProps> = ({ playlists }) => {
  return (
    <div
      className="bio-page-sidebar-references-group"
      style={{ marginTop: '1rem' }}
    >
      {playlists && playlists.length > 0 && (
        <>
          <p className="menu-label bio-page-sidebar-published">In Playlists</p>
          <ul className="menu-list is-small">
            {playlists.map(playlist => (
              <li key={playlist.href}>
                <Link to={playlist.href}>{playlist.title}</Link>
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
};

export default SidebarPlaylists;
