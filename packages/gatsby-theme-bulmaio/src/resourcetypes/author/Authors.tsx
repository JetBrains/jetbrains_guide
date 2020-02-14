import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import ReferenceLayout from 'gatsby-theme-bulmaio/src/components/layout/ReferenceLayout';
import SubsectionAuthor from 'gatsby-theme-bulmaio/src/components/subsections/SubsectionAuthor';
import { Thumbnail } from 'gatsby-theme-bulmaio/src/models';

interface AuthorsProps {
  allAuthorYaml: {
    nodes: {
      label: string;
      title: string;
      subtitle?: string;
      thumbnail: Thumbnail;
    }[]
  }
}

export const Authors = () => {
  const
    { allAuthorYaml: { nodes } }: AuthorsProps = useStaticQuery(
      graphql`
  query {
    allAuthorYaml(sort: {fields: [title]}, limit: 1000) {
      nodes {
        label
        title
        subtitle
        thumbnail {
          childImageSharp {
            fluid(maxWidth: 1000) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
    );
  return (
    <ReferenceLayout pageTitle={'Authors'} subtitle={'Resources organized by author.'}>
      {{
        listing: (
          <nav className="bd-links bio-resourcecards">
            {nodes &&
            nodes.map(node => {
              return (
                <SubsectionAuthor
                  key={node.label}
                  title={node.title}
                  subtitle={node.subtitle}
                  href={`/authors/${node.label}/`}
                  thumbnail={node.thumbnail}
                />
              );
            })}
          </nav>
        )
      }}
    </ReferenceLayout>
  );
};
