import { graphql } from 'gatsby';

export const query = graphql`
  fragment ListedResourceFragment2 on Resource {
    slug
    title
    subtitle
    date(formatString: "MMMM Do, YYYY")
    thumbnail {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }      
    }
    author2 {
      slug
      title
      thumbnail {
        publicURL
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
    technologies2 {
      label
      slug
    }
    topics2 {
      label
      slug
    }      
  }
`;
