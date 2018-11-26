import * as React from 'react';

import { graphql } from 'gatsby';

import DefaultLayout from '../../layouts/default';
import ResourceCard from '../../components/ResourceCard';

import { ITipEdges } from './models';

export interface ITipsProps {
  data: {
    tips: {
      edges: ITipEdges;
    };
  };
}

const Tips: React.SFC<ITipsProps> = ({ data: { tips } }) => {
  const items = tips.edges.map(edge => edge.node);
  return (
    <DefaultLayout title="Tips" subtitle="Resources organized by programming technologies">
      <div className="columns">
        <div className="column is-three-quarters-desktop bio-resourcecards">
          {items &&
            items.map(item => {
              const frontmatter = item.frontmatter;
              const fields = item.fields;
              const href = fields.slug;

              const thumbnail = frontmatter.thumbnail;

              // @ts-ignore
              const thisAuthor = item.fields.author;
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
                  technologies={fields.technologies}
                  topics={fields.topics}
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
            technologies {
              fields {
                slug
              }
              frontmatter {
                label
              }
            }
            topics {
              fields {
                slug
              }
              frontmatter {
                label
              }
            }
            author {
              excerpt(pruneLength: 250)
              html
              id
              fields {
                slug
              }
              frontmatter {
                title
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
          frontmatter {
            type
            date(formatString: "MMMM Do, YYYY")
            title
            subtitle
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
  }
`;
