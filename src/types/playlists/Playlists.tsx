import { graphql } from 'gatsby';
import * as React from 'react';
import { SubsectionPlaylist } from '../../components/Subsection';
import ReferenceLayout from '../../layouts/ReferenceLayout';

import { IPlaylistEdges } from './models';

interface IPlaylistsProps {
  data: {
    allMarkdownRemark: {
      edges: IPlaylistEdges;
    };
  };
}

const Playlists: React.FunctionComponent<IPlaylistsProps> = ({
  data: {
    allMarkdownRemark: { edges: technologyEdges }
  }
}) => {
  const items = technologyEdges.map(edge => edge.node);
  return (
    <ReferenceLayout title={'Playlists'} subtitle={'Resources organized by programming technologies'}>
      {{
        listing: (
          <nav className="bd-links bio-resourcecards">
            {items &&
              items.map(item => {
                return (
                  <SubsectionPlaylist
                    key={item.fields.slug}
                    title={item.frontmatter.title}
                    subtitle={item.frontmatter.subtitle}
                    href={item.fields.slug}
                    thumbnail={item.frontmatter.thumbnail}
                  />
                );
              })}
          </nav>
        )
      }}
    </ReferenceLayout>
  );
};

export default Playlists;

export const query = graphql`
  query {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: { frontmatter: { type: { eq: "playlist" } } }
      limit: 1000
    ) {
      edges {
        node {
          html
          fields {
            slug
          }
          frontmatter {
            type
            label
            title
            subtitle
            date
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
