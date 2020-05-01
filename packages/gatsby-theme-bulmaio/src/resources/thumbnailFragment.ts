import { graphql } from 'gatsby';

export const query = graphql`
  fragment ThumbnailFragment on File {
    childImageSharp {
      fluid(maxWidth: 1000) {
        ...GatsbyImageSharpFluid
      }
    }      
  }
`;
