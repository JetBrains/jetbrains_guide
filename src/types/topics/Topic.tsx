import * as React from 'react';

import { graphql } from 'gatsby';

import { ITopicNode } from './models';
import DefaultLayout from '../../layouts/default';
import ResourceCard from '../../components/ResourceCard';
import { Element } from 'react-scroll/modules';
import SeeAlso from '../../components/SeeAlso';

interface ITopicProps {
  data: {
    topic: ITopicNode;
  };
}

const Topic: React.FunctionComponent<ITopicProps> = ({ data: { topic } }) => {
  const { title, subtitle, seealso } = topic.frontmatter;

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
              const author = thisAuthor
                ? {
                    title: thisAuthor.frontmatter.title,
                    headshot: thisAuthor.frontmatter.headshot,
                    href: thisAuthor.fields.slug
                  }
                : undefined;
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
          {seealso && (
            <Element name="see-also" className="element" style={{ marginTop: '1rem' }}>
              <SeeAlso items={seealso} />
            </Element>
          )}
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
                seealso {
                  title
                  href
                }
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
        seealso {
          title
          href
        }
      }
    }
  }
`;
