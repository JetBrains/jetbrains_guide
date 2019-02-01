import { graphql } from 'gatsby';
import * as React from 'react';
import ListingWrapper from '../../components/ListingWrapper';
import ResourceCard from '../../components/ResourceCard';
import ReferenceLayout from '../../layouts/ReferenceLayout';

interface ITipsProps {
  resources: any[];
}

const Tips: React.FunctionComponent<ITipsProps> = ({ resources }) => {
  return (
    <ReferenceLayout title="Tips" subtitle="Resources organized by programming technologies">
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

export default ListingWrapper(Tips);

export const query = graphql`
  query {
    resources: allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }, filter: { frontmatter: { type: { eq: "tip" } } }) {
      edges {
        node {
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
