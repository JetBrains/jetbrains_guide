import { graphql } from 'gatsby';

export const inPlaylistsFragment = graphql`
  fragment InPlaylistsFragment on MarkdownRemark {
      inPlaylists {
        fields {
          slug
        }
        frontmatter {
          label
          title
          thumbnail {
            publicURL
          }
          playlistItems {
            fields {
              slug
            }
            frontmatter {
              title
            }
          }
        }
      }  
  }
`;
