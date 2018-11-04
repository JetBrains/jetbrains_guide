import * as React from 'react';

import { graphql } from 'gatsby';

import { ITopic } from './models';
import DefaultLayout from '../../layouts/default';
import ResourceCard from '../../components/ResourceCard';
import { IBaseResourceEdges } from '../base_models';
import { IAuthor, IAuthorEdges } from '../authors/models';

interface ITopicProps {
  data: {
    topic: ITopic;
    resources: {
      edges: IBaseResourceEdges;
    };
    authors: {
      edges: IAuthorEdges;
    };
  };
}

const Topic: React.SFC<ITopicProps> = ({ data }) => {
  const { topic } = data;
  const { title, subtitle } = topic.frontmatter;

  // Filter the resources to only those matching this topic
  const label = topic.frontmatter.label;
  const resources = data.resources.edges.map(edge => edge.node).filter(node => node.frontmatter.topics.includes(label));
  const authors = data.authors.edges.map(edge => edge.node);
  return (
    <DefaultLayout title={title} subtitle={subtitle}>
      <div className="bd-content content" dangerouslySetInnerHTML={{ __html: topic.html }} />
      <nav className="bio-resourcecards">
        {resources &&
          resources.map(resource => {
            const rfm = resource.frontmatter;
            const href = `/tips/${rfm.path}`;
            const authorRef = authors.find(a => a.frontmatter.label === rfm.author) as IAuthor;
            const author = {
              title: authorRef.frontmatter.title,
              headshot: authorRef.frontmatter.headshot,
              href: `/authors/${authorRef.frontmatter.label}`
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
          frontmatter {
            type
            date(formatString: "MMMM Do, YYYY")
            path
            title
            subtitle
            author
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
    authors: allMarkdownRemark(filter: { frontmatter: { type: { eq: "author" } } }, limit: 1000) {
      edges {
        node {
          excerpt(pruneLength: 250)
          html
          id
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
    }
  }
`;
