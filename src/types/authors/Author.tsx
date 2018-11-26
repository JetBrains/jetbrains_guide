import React from 'react';

import { graphql } from 'gatsby';

import ResourceCard from '../../components/ResourceCard';
import { IAuthorNode } from './models';
import ImageLayout from '../../layouts/image';

interface IAuthorProps {
  data: {
    author: IAuthorNode;
  };
}

const Author: React.SFC<IAuthorProps> = ({ data }) => {
  const { author } = data;
  const { frontmatter } = author;

  return (
    <ImageLayout title={frontmatter.title} subtitle={frontmatter.subtitle} headshot={frontmatter.headshot}>
      <div className="bd-content content" dangerouslySetInnerHTML={{ __html: author.html }} />
      <div className="columns">
        <div className="column is-three-quarters-desktop bio-resourcecards">
          {author.fields.tips &&
            author.fields.tips.map(resource => {
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
      fields {
        tips {
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
