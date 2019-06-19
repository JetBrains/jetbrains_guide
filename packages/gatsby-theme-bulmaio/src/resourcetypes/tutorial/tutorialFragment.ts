import { graphql } from 'gatsby';

export const tutorialFragment = graphql`
  fragment TutorialFragment on MarkdownRemark {
      html
      fields {
        slug
      }
      frontmatter {
        title
        date(formatString: "MMMM Do, YYYY")
        subtitle
        date(formatString: "MMMM Do, YYYY")
        ...ResourceCardAuthorFragment
        ...ResourceCardTechnologyFragment
        ...ResourceCardTopicFragment
        tutorialItems {
          ...ListedResourceFragment
        }
      }
  }
`;
