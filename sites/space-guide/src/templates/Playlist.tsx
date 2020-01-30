import { Playlist } from 'gatsby-theme-bulmaio/src/resourcetypes/playlist';
import { graphql } from 'gatsby';

export default Playlist;

export const query = graphql`
  query($path: String) {
    resource: markdownRemark(fields: { slug: { eq: $path } }) {
      ...PlaylistFragment
    }
  }
`;
