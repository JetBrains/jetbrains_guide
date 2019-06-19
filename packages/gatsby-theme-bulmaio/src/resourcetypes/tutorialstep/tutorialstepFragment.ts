import { graphql } from 'gatsby';

export const tutorialstepFragment = graphql`
  fragment TutorialstepFragment on MarkdownRemark {
      html
      ...InTutorialFragment
      fields {
        slug
      }
      frontmatter {
        title
        subtitle
        date(formatString: "MMMM Do, YYYY")
        longVideo {
          ...VideoFragment
        }
        ...ResourceCardAuthorFragment
        ...ResourceCardTechnologyFragment
        ...ResourceCardTopicFragment
      }
  }
`;
