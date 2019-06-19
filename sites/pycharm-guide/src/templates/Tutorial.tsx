import { Tutorial } from 'gatsby-theme-bulmaio/src/resourcetypes/tutorial';
import { graphql } from 'gatsby';

export default Tutorial;

export const query = graphql`
  query($path: String) {
    resource: markdownRemark(fields: { slug: { eq: $path } }) {
      ...TutorialFragment
    }
  }
`;
