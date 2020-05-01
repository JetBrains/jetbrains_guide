import { graphql } from 'gatsby';

export const resourceCardThumbnailFragment = graphql`
  fragment ResourceCardThumbnailFragment on Frontmatter {
    thumbnail {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }  
    }
  }
`;
