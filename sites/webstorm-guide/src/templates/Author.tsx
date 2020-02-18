import { Author } from 'gatsby-theme-bulmaio/src/resourcetypes/author';
import { graphql } from 'gatsby';

export default Author;

export const query = graphql`
  query($label: String) {
    author: authorYaml(label: { eq: $label }) {
      ...AuthorFragment
    }
  }
`;
