import { graphql } from 'gatsby';

export const inTutorialFragment = graphql`
  fragment InTutorialFragment on MarkdownRemark {
      inTutorial {
        fields {
          slug
        }
        frontmatter {
          label
          title
          thumbnail {
            publicURL
          }
          tutorialItems {
            fields {
              slug
            }
            frontmatter {
              title
            }
          }
        }
      }  
  }
`;
