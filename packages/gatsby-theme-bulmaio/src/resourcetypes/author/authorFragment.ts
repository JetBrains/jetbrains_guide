import { graphql } from 'gatsby';

export const authorFragment = graphql`
  fragment AuthorFragment on AuthorYaml {
    label
    title
    subtitle
    body
    thumbnail {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }  
    }
    resources {
      ...ListedResourceFragment
    }
  }
`;
