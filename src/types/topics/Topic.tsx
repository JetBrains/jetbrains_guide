import * as React from 'react';

import { graphql } from 'gatsby';

import { ITopic } from './models';
import DefaultLayout from '../../layouts/default';
import ResourceCard from '../../components/ResourceCard';
import { IBaseResourceEdges } from '../base_models';

interface ITopicProps {
  data: {
    topic: ITopic;
    resources: {
      edges: IBaseResourceEdges;
    };
  };
}

const Topic: React.SFC<ITopicProps> = ({ data }) => {
  const { topic } = data;
  const { title, subtitle } = topic.frontmatter;

  // Filter the resources to only those matching this topic
  const label = topic.frontmatter.label;
  const resources = data.resources.edges.map(edge => edge.node).filter(node => node.frontmatter.topics.includes(label));
  return (
    <DefaultLayout title={title} subtitle={subtitle}>
      <div className="bd-content content" dangerouslySetInnerHTML={{ __html: topic.html }} />
      <div className="columns">
        <nav className="column is-three-quarters-desktop bio-resourcecards">
          {resources &&
            resources.map(resource => {
              const rfm = resource.frontmatter;
              const href = resource.fields.slug;
              const thisAuthor = resource.frontmatter.author;
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
                  technologies={rfm.technologies}
                  topics={rfm.topics}
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
      }
      frontmatter {
        type
        label
        title
        subtitle
        date
      }
    }
    resources: allMarkdownRemark(
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
            topics
            technologies
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
