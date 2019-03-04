import { graphql } from 'gatsby';
import * as React from 'react';
import ReferenceLayout from '../../layouts/ReferenceLayout';
import ResourceCard from '../../components/ResourceCard';
import ListingWrapper from '../../components/ListingWrapper';

export interface IPlaylistsProps {
  resources: any[];
}

const Playlists: React.FunctionComponent<IPlaylistsProps> = ({ resources }) => {
  return (
    <ReferenceLayout title="Playlists" subtitle="Curated collections of resources">
      {{
        listing: (
          <div>
            {resources &&
              resources.map(r => {
                return <ResourceCard key={r.slug} {...r} />;
              })}
          </div>
        )
      }}
    </ReferenceLayout>
  );
};

const comparator = () => true;

export default ListingWrapper(Playlists, comparator);

export const query = graphql`
  query {
    resources: allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: { frontmatter: { type: { eq: "playlist" } } }
      limit: 1000
    ) {
      edges {
        node {
          html
          fields {
            slug
          }
          frontmatter {
            type
            label
            title
            subtitle
            technologies
            topics
            date(formatString: "MMMM Do, YYYY")
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
