import { graphql } from 'gatsby';

export const videoFragment = graphql`
  fragment VideoFragment on Video {
    likeGIF
    url
    poster {
      publicURL
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;
