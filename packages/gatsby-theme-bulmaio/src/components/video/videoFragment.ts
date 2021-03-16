import { graphql } from 'gatsby';

export const videoFragment = graphql`fragment VideoFragment on Video {
  url
  poster {
    publicURL
    childImageSharp {
      gatsbyImageData(layout: FULL_WIDTH)
    }
  }
}
`;
