import { graphql } from 'gatsby';
import Tip from 'gatsby-theme-bulmaio/src/resources/tip/Tip';

export default Tip;

export const query = graphql`
  query($path: String) {
    resource: markdownRemark(fields: { slug: { eq: $path } }) {
      ...TipFragment
    }
  }
`;
