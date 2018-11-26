import React from 'react';

import { graphql } from 'gatsby';

import ResourceCard from '../../components/ResourceCard';
import { ITechnologyNode } from './models';
import LogoLayout from '../../layouts/logo';

interface ITechnologyProps {
  data: {
    technology: ITechnologyNode;
  };
}

const Technology: React.SFC<ITechnologyProps> = ({ data: { technology } }) => {
  const { frontmatter } = technology;
  const resources = technology.fields.tips;

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
                  technologies={resource.fields.technologies}
                  topics={resource.fields.topics}
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
        logo
        date
      }
    }
  }
`;
