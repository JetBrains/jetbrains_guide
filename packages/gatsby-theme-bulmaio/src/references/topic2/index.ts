// noinspection JSUnusedGlobalSymbols
import { graphql } from 'gatsby';

export const listedTopic2Fragment = graphql`
  fragment ListedTopic2Fragment on Topic2 {
    label
    slug
    title
    subtitle
    slug
    accent
    icon
  }
`;

