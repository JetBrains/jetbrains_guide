import React, { FC } from 'react';
import { graphql, useStaticQuery } from 'gatsby';

import ReferenceLayout from 'gatsby-theme-bulmaio/src/components/layout/ReferenceLayout';
import { Thumbnail } from '../../models';
import SubsectionAuthor from '../../components/subsections/SubsectionAuthor';

interface AuthorsProps {
  allAuthor2: {
    nodes: {
      label: string;
      title: string;
      subtitle?: string;
      thumbnail: Thumbnail;
    }[]
  }
}

const AllAuthor2: FC = () => {

  const
    { allAuthor2: { nodes } }: AuthorsProps = useStaticQuery(
      graphql`
  query {
    allAuthor2(sort: {fields: [title]}, limit: 1000) {
      nodes {
        label
        title
        subtitle
        slug
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

// noinspection JSUnusedGlobalSymbols
export default AllAuthor2;
