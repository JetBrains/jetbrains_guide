import { Tutorialstep } from 'gatsby-theme-bulmaio/src/resourcetypes/tutorialstep';
import { graphql } from 'gatsby';

export default Tutorialstep;

export const query = graphql`
  query($path: String) {
    resource: markdownRemark(fields: { slug: { eq: $path } }) {
      ...TutorialstepFragment
    }
  }
`;
