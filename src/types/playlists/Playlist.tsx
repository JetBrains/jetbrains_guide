import { graphql } from 'gatsby';
import React from 'react';
import ResourceWrapper from '../../components/ResourceWrapper';

interface IPlaylistProps {
  resource: any;
  author: any;
}

const Playlist: React.FunctionComponent<IPlaylistProps> = ({ resource: playlist, author }) => {
  return (
    <div>
      <h1>Hello {playlist.title}</h1>
      <p>From {author.title}</p>
    </div>
  );
};

export default ResourceWrapper(Playlist);

export const query = graphql`
  query($path: String!) {
    resource: markdownRemark(fields: { slug: { eq: $path } }) {
      html
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
        cardThumbnail {
          publicURL
          childImageSharp {
            fluid(maxWidth: 1000) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        series {
          title
          position
          total
          previous {
            label
            slug
          }
          next {
            label
            slug
          }
          all {
            label
            slug
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
