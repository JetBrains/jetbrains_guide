import React from 'react';

import { graphql } from 'gatsby';

import ResourceCard from '../../components/ResourceCard';
import { IAuthor } from './models';
import { IBaseResourceEdges } from '../base_models';
import ImageLayout from '../../layouts/image';

interface IAuthorProps {
  data: {
    author: IAuthor;
    resources: {
      edges: IBaseResourceEdges;
    };
  };
}

const Author: React.SFC<IAuthorProps> = ({ data }) => {
  const { author } = data;
  const { frontmatter } = author;

  // Filter the resources to only those matching this technology
  const label = author.frontmatter.label;
  const resources = data.resources.edges.map(edge => edge.node).filter(node => node.frontmatter.author.frontmatter.label === label);

  return (
    <ImageLayout title={frontmatter.title} subtitle={frontmatter.subtitle} headshot={frontmatter.headshot}>
      <div className="bd-content content" dangerouslySetInnerHTML={{ __html: author.html }} />
      <div className="columns">
        <div className="column is-three-quarters-desktop bio-resourcecards">
          {resources &&
            resources.map(resource => {
              const rfm = resource.frontmatter;
              const href = resource.fields.slug;
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
                  date={rfm.date}
                />
              );
            })}
        </div>
      </div>
    </ImageLayout>
  );
};

export default Author;

export const query = graphql`
  query($slug: String!) {
    author: markdownRemark(fields: { slug: { eq: $slug } }) {
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
  }
`;
