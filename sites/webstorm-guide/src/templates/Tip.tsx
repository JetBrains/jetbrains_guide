import { Tip } from 'gatsby-theme-bulmaio/src/resourcetypes/tip';
import { graphql } from 'gatsby';

export default Tip;

export const query = graphql`
  query($path: String) {
    resource: markdownRemark(fields: { slug: { eq: $path } }) {
      ...TipFragment
    }
  }
`;
