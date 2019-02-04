import { graphql } from 'gatsby';
import ImageLayoutListing from '../../components/ImageLayoutListing';
import ListingWrapper from '../../components/ListingWrapper';

const comparator = (resourceNode: any, target: any) => {
  return resourceNode.label === target.author.label;
};

export default ListingWrapper(ImageLayoutListing, comparator);

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
        date
        headshot {
          publicURL
          childImageSharp {
            fluid(maxWidth: 1000) {
              base64
              tracedSVG
              aspectRatio
              src
              srcSet
              srcWebp
              srcSetWebp
              sizes
              originalImg
              originalName
            }
          }
        }
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

    authors: allMarkdownRemark(filter: { frontmatter: { type: { eq: "author" } } }) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
            label
            headshot {
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
