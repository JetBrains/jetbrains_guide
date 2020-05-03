import React from 'react';

import SidebarLayout from '../../components/layout/SidebarLayout';
import { SeeAlsos } from 'gatsby-theme-bulmaio/src/components/seealso';
import { ResourceCardAuthorProps } from 'gatsby-theme-bulmaio/src/components/resourcecard/author';
import { ResourceCardTechnologies } from 'gatsby-theme-bulmaio/src/components/resourcecard/technology';
import { ResourceCardTopics } from 'gatsby-theme-bulmaio/src/components/resourcecard/topic';
import { PlaylistSidebar } from './PlaylistSidebar';
import makeResources from '../makeResource';

export interface PlaylistProps {
  data: {
    resource: {
      html: string;
      frontmatter: {
        title: string;
        date: string;
        leadin: string;
        seealso?: SeeAlsos;
        author: ResourceCardAuthorProps;
        technologies: ResourceCardTechnologies;
        topics: ResourceCardTopics;
        playlistItems: any[];
      }
    }
  }
}

export const Playlist: React.FC<PlaylistProps> = (
  { data: { resource: { html, frontmatter } } }
) => {

  // Sidebar
  const sidebar = <PlaylistSidebar
    frontmatter={frontmatter}
  />;

  // Playlist
  const { playlistItems } = frontmatter;

  const main = (
    <>
      {html ? (
        <div className="columns">
          <div className="column is-11-desktop content" dangerouslySetInnerHTML={{ __html: html }}/>
        </div>
      ) : null}
      {playlistItems && (
        <div className="bio-tutorial-steps-listing">
          {makeResources(playlistItems, 'tip')}
        </div>
      )}

    </>
  );

  return (
    <SidebarLayout pageTitle={frontmatter.title}>
      {{
        sidebar,
        main
      }}
    </SidebarLayout>
  );

};
