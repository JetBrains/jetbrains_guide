import { Product } from 'gatsby-theme-bulmaio/src/resourcetypes/product';
import { graphql } from 'gatsby';

export default Product;

export const query = graphql`
  query($label: String) {
    product: productYaml(label: { eq: $label }) {
      ...ProductFragment
    }
  }
`;
