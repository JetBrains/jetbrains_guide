import { graphql } from 'gatsby';
import ListingWrapper from '../../components/ListingWrapper';
import LogoLayoutListing from '../../components/LogoLayoutListing';

export default ListingWrapper(LogoLayoutListing);

export const query = graphql`
  query($path: String!) {
    resource: markdownRemark(fields: { slug: { eq: $path } }) {
      excerpt(pruneLength: 250)
      html
      frontmatter {
        type
        label
        title
        subtitle
        logo {
          publicURL
        }
        date
      }
    }

    resources: allMarkdownRemark(filter: { frontmatter: { type: { eq: "tip" } } }) {
      edges {
        node {
          excerpt(pruneLength: 250)
          html
          id
          fields {
            slug
          }
          frontmatter {
            type
            date(formatString: "MMMM Do, YYYY")
            title
            subtitle
            author
            technologies
            topics
            thumbnail {
              publicURL
              childImageSharp {
                fluid(maxWidth: 1000) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }

    technologies: allMarkdownRemark(filter: { frontmatter: { type: { eq: "technology" } } }) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            label
          }
        }
      }
    }

    topics: allMarkdownRemark(filter: { frontmatter: { type: { eq: "topic" } } }) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            label
          }
        }
      }
    }
  }
`;
