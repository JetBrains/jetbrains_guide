import { graphql } from 'gatsby';

export const resourceCardAuthorFragment = graphql`
  fragment ResourceCardAuthorFragment on Frontmatter {
    author {
      label
      title
      slug
      thumbnail {
        publicURL
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }  
  }
`;
