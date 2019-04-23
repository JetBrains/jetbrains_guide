import { graphql } from 'gatsby';
import React from 'react';
import ResourceCard from '../../components/ResourceCard';
import Sidebar from '../../components/sidebar/Sidebar';
import SidebarPublished from '../../components/sidebar/SidebarPublished';
import SidebarReferenceGroup from '../../components/sidebar/SidebarReferencesGroup';
import SidebarLayout from '../../layouts/SidebarLayout';
import PlaylistWrapper from './PlaylistWrapper';

interface IPlaylistProps {
  resource: any;
  author: any;
  playlistItems: any;
}

const Playlist: React.FunctionComponent<IPlaylistProps> = ({ resource: playlist, author, playlistItems }) => {
  const sidebar = (
    <Sidebar>
      {author && <SidebarPublished date={playlist.date} author={author} />}
      <SidebarReferenceGroup reftype={`technologies`} accent={`danger`} references={playlist.technologies} />
      <SidebarReferenceGroup reftype={`topics`} accent={`success`} references={playlist.topics} />
    </Sidebar>
  );

  // @ts-ignore
  return (
    <SidebarLayout title={playlist.title} subtitle={playlist.subtitle}>
      {{
        sidebar,
        main: (
          <>
            {playlist.html ? (
              <div className="columns">
                <div className="column is-11-desktop content" dangerouslySetInnerHTML={{ __html: playlist.html }} />
              </div>
            ) : null}
            {playlistItems && (
              <div className="bio-tutorial-steps-listing">
                {playlistItems.map((resource: any) => {
                  return (
                    <ResourceCard
                      key={resource.slug}
                      title={resource.title}
                      subtitle={resource.subtitle}
                      slug={`${resource.slug}?playlist=${playlist.label}`}
                      thumbnail={resource.thumbnail}
                      technologies={resource.technologies}
                      topics={resource.topics}
                    />
                  );
                })}
              </div>
            )}
          </>
        )
      }}
    </SidebarLayout>
  );
};

export default PlaylistWrapper(Playlist);

export const query = graphql`
  query($path: String!) {
    resource: markdownRemark(fields: { slug: { eq: $path } }) {
      html
      fields {
        slug
      }
      frontmatter {
        type
        date(formatString: "MMMM Do, YYYY")
        title
        subtitle
        items
        label
        author
        technologies
        topics
        cardThumbnail {
          publicURL
          childImageSharp {
            fluid(maxWidth: 1000) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }

    resources: allMarkdownRemark(filter: { frontmatter: { type: { eq: "tip" } } }) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
            subtitle
            author
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

    authors: allMarkdownRemark(filter: { frontmatter: { type: { eq: "author" } } }) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
            label
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

    technologies: allMarkdownRemark(filter: { frontmatter: { type: { eq: "technology" } } }) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            label
          }
        }
      }
    }

    topics: allMarkdownRemark(filter: { frontmatter: { type: { eq: "topic" } } }) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            label
          }
        }
      }
    }
  }
`;
