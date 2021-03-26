import { graphql } from 'gatsby';

export const query = graphql`fragment ThumbnailFragment on File {
  publicURL
  childImageSharp {
    gatsbyImageData(layout: FULL_WIDTH)
  }
}
`;
