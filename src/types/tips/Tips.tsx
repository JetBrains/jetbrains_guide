import * as React from 'react';

import { graphql } from 'gatsby';

import DefaultLayout from '../../layouts/default';
import ResourceCard from '../../components/ResourceCard';

import { ITipEdges } from './models';
import { ITechnologyEdges } from '../technologies/models';

export interface ITipsProps {
  data: {
    tips: {
      edges: ITipEdges;
    };
    technologies: {
      edges: ITechnologyEdges;
    };
  };
}

const Tips: React.SFC<ITipsProps> = ({ data }) => {
  const items = data.tips.edges.map(edge => edge.node);
  return (
    <DefaultLayout title="Tips" subtitle="Resources organized by programming technologies">
      <div className="columns">
        <div className="column is-three-quarters-desktop bio-resourcecards">
          {items &&
            items.map(item => {
              const frontmatter = item.frontmatter;
              const fields = item.fields;
              const href = fields.slug;

              // Use the first technology's icon as the logo
              const thumbnail = frontmatter.thumbnail;

              const thisAuthor = item.frontmatter.author;
              const author = {
                title: thisAuthor.frontmatter.title,
                headshot: thisAuthor.frontmatter.headshot,
                href: thisAuthor.fields.slug
              };
              return (
                <ResourceCard
                  key={href}
                  title={frontmatter.title}
                  subtitle={frontmatter.subtitle}
                  technologies={frontmatter.technologies}
                  topics={frontmatter.topics}
                  href={href}
                  thumbnail={thumbnail}
                  author={author}
                  date={frontmatter.date}
                />
              );
            })}
        </div>
      </div>
    </DefaultLayout>
  );
};

export default Tips;

export const query = graphql`
  query {
    tips: allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: { frontmatter: { type: { eq: "tip" } } }
      limit: 1000
    ) {
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
            technologies
            topics
            author {
              excerpt(pruneLength: 250)
              html
              id
              fields {
                slug
              }
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
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
              }
            }
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

    technologies: allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: { frontmatter: { type: { eq: "technology" } } }
      limit: 1000
    ) {
      edges {
        node {
          id
          frontmatter {
            type
            label
            title
            subtitle
            date
            logo
          }
        }
      }
    }
  }
`;
