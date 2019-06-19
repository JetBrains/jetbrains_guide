import { Technology } from 'gatsby-theme-bulmaio/src/resourcetypes/technology';
import { graphql } from 'gatsby';

export default Technology;

export const query = graphql`
  query($label: String) {
    technology: technologyYaml(label: { eq: $label }) {
      ...TechnologyFragment
    }
  }
`;
