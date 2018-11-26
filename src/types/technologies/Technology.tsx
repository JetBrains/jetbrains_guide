import React from 'react';

import { graphql } from 'gatsby';

import ResourceCard from '../../components/ResourceCard';
import { ITechnology } from './models';
import { IBaseResourceEdges } from '../base_models';
import LogoLayout from '../../layouts/logo';

interface ITechnologyProps {
  data: {
    technology: ITechnology;
    resources: {
      edges: IBaseResourceEdges;
    };
  };
}

const Technology: React.SFC<ITechnologyProps> = ({ data }) => {
  const { technology } = data;
  const { frontmatter } = technology;

  // Filter the resources to only those matching this technology
  const label = technology.frontmatter.label;
  const resources = data.resources.edges
    ? data.resources.edges.map(edge => edge.node).filter(node => node.frontmatter.technologies.includes(label))
    : [];

  return (
    <LogoLayout title={frontmatter.title} subtitle={frontmatter.subtitle} logo={frontmatter.logo}>
      <div className="bd-content content" dangerouslySetInnerHTML={{ __html: technology.html }} />
      <div className="columns">
        <nav className="column is-three-quarters-desktop bio-resourcecards">
          {resources &&
            resources.map(resource => {
              const rfm = resource.frontmatter;
              const href = resource.fields.slug;

              const thisAuthor = resource.fields.author;
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
    </LogoLayout>
  );
};

export default Technology;

export const query = graphql`
  query($slug: String!) {
    technology: markdownRemark(fields: { slug: { eq: $slug } }) {
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
        logo
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
