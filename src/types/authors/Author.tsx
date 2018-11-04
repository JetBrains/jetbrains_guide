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
  const resources = data.resources.edges.map(edge => edge.node).filter(node => node.frontmatter.author === label);

  return (
    <ImageLayout title={frontmatter.title} subtitle={frontmatter.subtitle} headshot={frontmatter.headshot}>
      <div className="bd-content content" dangerouslySetInnerHTML={{ __html: author.html }} />
      <div className="bio-resourcecards">
        {resources &&
          resources.map(resource => {
            const frontmatter = resource.frontmatter;
            const href = '/tips/' + frontmatter.path;
            const thumbnail = frontmatter.shortVideo.poster;
            return (
              <ResourceCard
                key={href}
                title={frontmatter.title}
                subtitle={frontmatter.subtitle}
                technologies={frontmatter.technologies}
                topics={frontmatter.topics}
                href={href}
                thumbnail={thumbnail}
                date={frontmatter.date}
              />
            );
          })}
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
          frontmatter {
            type
            date(formatString: "MMMM Do, YYYY")
            path
            title
            subtitle
            author
            technologies
            topics
            shortVideo {
              poster {
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
  }
`;
