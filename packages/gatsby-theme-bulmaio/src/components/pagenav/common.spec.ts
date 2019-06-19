import { getPlaylist } from './common';
import { InPlaylists } from '../playlists/models';

describe('InPlaylists Common', () => {
  it('should get a playlist from location', () => {
    const location = { search: '?playlist=A' };
    const playlists: InPlaylists = [
      {
        fields: { slug: 'slug1' },
        frontmatter: {
          label: 'A',
          title: 'title1',
          thumbnail: {
            publicURL: 'publicURL1'
          }
        }
      }
    ];
    const result = getPlaylist(location, playlists);
    // @ts-ignore
    expect(result.fields.slug).toBe(playlists[0].fields.slug);
  });

  it('should get first playlist from wrong location', () => {
    const location = { search: '?playlist=XXX' };
    const playlists: InPlaylists = [
      {
        fields: { slug: 'slug1' },
        frontmatter: {
          label: 'A',
          title: 'title1',
          thumbnail: {
            publicURL: 'publicURL1'
          }
        }
      },
      {
        fields: { slug: 'slug2' },
        frontmatter: {
          label: 'B',
          title: 'title2',
          thumbnail: {
            publicURL: 'publicURL2'
          }
        }
      }];
    const result = getPlaylist(location, playlists);
    // @ts-ignore
    expect(result.fields.slug).toBe(playlists[0].fields.slug);
  });

  it('should get null when no playlists', () => {
    const location = { search: '?playlist=A' };
    const playlists: InPlaylists = [];
    const result = getPlaylist(location, playlists);
    // @ts-ignore
    expect(result).toBeUndefined();
  });

});
