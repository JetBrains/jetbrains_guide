import { graphql } from 'gatsby';

export const listedResourceFragment = graphql`
  fragment ListedResourceFragment on MarkdownRemark {
    fields {
      slug
    }
    frontmatter {
      type
      title
      subtitle
      date
      thumbnail {
        publicURL
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      ...SeeAlsoFragment
      ...ResourceCardAuthorFragment
      ...ResourceCardTechnologyFragment
      ...ResourceCardTopicFragment
    }
  }
`;
