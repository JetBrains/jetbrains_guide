import { graphql } from 'gatsby';

export const query = graphql`fragment ThumbnailFragment on File {
  publicURL
  childImageSharp {
    resized: resize(width:192) {
      src
      width
      height
      originalName
    },
    gatsbyImageData(layout: FULL_WIDTH)
  }
}
`;
