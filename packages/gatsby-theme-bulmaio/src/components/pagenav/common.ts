import { parse } from 'qs';
import { InPlaylists } from '../playlists';

export function getPlaylist(location: { search: string }, playlists: InPlaylists) {
  if (playlists.length > 0) {
    const search = location.search ? parse(location.search.substring(1)) : null;
    const playlistLabel = search ? search.playlist : null;

    const result = playlists.find(pl => pl.label === playlistLabel);
    return result;
  }
}

