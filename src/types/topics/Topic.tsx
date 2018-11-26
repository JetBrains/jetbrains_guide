import * as React from 'react';

import { graphql } from 'gatsby';

import { ITopicNode } from './models';
import DefaultLayout from '../../layouts/default';
import ResourceCard from '../../components/ResourceCard';

interface ITopicProps {
  data: {
    topic: ITopicNode;
  };
}

const Topic: React.SFC<ITopicProps> = ({ data: { topic } }) => {
  const { title, subtitle } = topic.frontmatter;

  const resources = topic.fields.tips;

  return (
    <DefaultLayout title={title} subtitle={subtitle}>
      <div className="bd-content content" dangerouslySetInnerHTML={{ __html: topic.html }} />
      <div className="columns">
        <nav className="column is-three-quarters-desktop bio-resourcecards">
          {resources &&
            resources.map(resource => {
              const rfm = resource.frontmatter;
              const fields = resource.fields;
              const href = fields.slug;
              const thisAuthor = fields.author;
              const author = {
                title: thisAuthor.frontmatter.title,
                headshot: thisAuthor.frontmatter.headshot,
                href: thisAuthor.fields.slug
              };
              const thumbnail = rfm.thumbnail;
              return (
                <ResourceCard
                  key={href}
                  title={rfm.title}
                  subtitle={rfm.subtitle}
                  technologies={fields.technologies}
                  topics={fields.topics}
                  href={href}
                  thumbnail={thumbnail}
                  author={author}
                  date={rfm.date}
                />
              );
            })}
        </nav>
      </div>
    </DefaultLayout>
  );
};

export default Topic;

export const query = graphql`
  query($slug: String!) {
    topic: markdownRemark(fields: { slug: { eq: $slug } }) {
      excerpt(pruneLength: 250)
      html
      id
      fields {
        slug
        tips {
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
      frontmatter {
        type
        label
        title
        subtitle
        date
      }
    }
  }
`;
