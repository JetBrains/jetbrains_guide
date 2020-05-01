import { graphql } from 'gatsby';

export const query = graphql`
  fragment ThumbnailFragment on File {
    publicURL
    childImageSharp {
      fluid(maxWidth: 1000) {
        ...GatsbyImageSharpFluid
      }
    }      
  }
`;
