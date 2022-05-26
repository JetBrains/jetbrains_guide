import { getPlaylist } from './common';
import { InPlaylists } from '../playlists';

describe('InPlaylists Common', () => {
  it('should get a playlist from location', () => {
    const location = { search: '?playlist=A' };
    const playlists: InPlaylists = [
      {
        slug: 'slug1',
        label: 'A',
        title: 'title1',
        thumbnail: {
          publicURL: 'publicURL1',
        },
      },
    ];
    const result = getPlaylist(location, playlists);
    // @ts-ignore
    expect(result.slug).toBe(playlists[0].slug);
  });

  it('should NOT get first playlist from wrong location', () => {
    // This is a change of behavior. Don't guess at playlists.
    const location = { search: '?playlist=XXX' };
    const playlists: InPlaylists = [
      {
        slug: 'slug1',
        label: 'A',
        title: 'title1',
        thumbnail: {
          publicURL: 'publicURL1',
        },
      },
      {
        slug: 'slug2',
        label: 'B',
        title: 'title2',
        thumbnail: {
          publicURL: 'publicURL2',
        },
      },
    ];
    const result = getPlaylist(location, playlists);
    // @ts-ignore
    expect(result).toBeUndefined();
  });

  it('should get null when no playlist specified', () => {
    const location = { search: '?' };
    const playlists: InPlaylists = [];
    const result = getPlaylist(location, playlists);
    // @ts-ignore
    expect(result).toBeUndefined();
  });

  it('should get null when no playlist found', () => {
    const location = { search: '?playlist=A' };
    const playlists: InPlaylists = [];
    const result = getPlaylist(location, playlists);
    // @ts-ignore
    expect(result).toBeUndefined();
  });
});
