/*

Make a Sidebar for the Tip resource type.

 */

import React from 'react';
import SidebarPublished, { SidebarPublishedProps } from '../../components/sidebar/SidebarPublished';
import SidebarDoclinks, { Doclink } from '../../components/sidebar/SidebarDoclinks';
import SidebarPlaylists, { SidebarPlaylistsProps } from '../../components/sidebar/SidebarPlaylists';
import Sidebar from '../../components/sidebar/Sidebar';
import SidebarReferencesGroup from '../../components/sidebar/SidebarReferencesGroup';
import { ResourceCardAuthorProps } from '../../components/resourcecard/author';
import { ResourceCardTechnologies } from '../../components/resourcecard/technology';
import { ResourceCardTopics } from '../../components/resourcecard/topic';
import { InPlaylists } from '../../components/playlists';
import { Video } from '../../components/video';
import { SeeAlsos } from '../../components/seealso';

export interface TipSidebarProps {
  frontmatter: {
    date: string;
    author: ResourceCardAuthorProps;
    technologies: ResourceCardTechnologies;
    topics: ResourceCardTopics;
  };
  html?: string;
  seealso?: SeeAlsos;
  longVideo?: Video;
  inPlaylists: InPlaylists;
}

export const TipSidebar: React.FC<TipSidebarProps> = (
  { frontmatter, html, seealso, longVideo, inPlaylists }
) => {
  const published: SidebarPublishedProps = {
    date: frontmatter.date,
    author: frontmatter.author
  };
  const technologies = frontmatter.technologies ? frontmatter.technologies.map(t => t.label) : [];
  const topics = frontmatter.topics ? frontmatter.topics.map(t => t.label) : [];
  const links: Doclink[] = [];
  if (html) {
    links.push({ label: 'In Depth', target: 'in-depth' });
  }
  if (seealso) {
    links.push({ label: 'See Also', target: 'see-also' });
  }
  if (longVideo) {
    links.push({ label: 'Full Video', target: 'full-video' });
  }
  // InPlaylists
  const thesePlaylists: SidebarPlaylistsProps = {
    playlists: inPlaylists.map(
      (playlist) => {
        return { title: playlist.frontmatter.title, href: playlist.fields.slug };
      })
  };
  return (
    <Sidebar>
      <SidebarPublished {...published}/>
      <SidebarReferencesGroup reftype={`technologies`} accent={`danger`} references={technologies}/>
      <SidebarReferencesGroup reftype={`topics`} accent={`success`} references={topics}/>
      <SidebarDoclinks links={links}/>
      <SidebarPlaylists {...thesePlaylists}/>
    </Sidebar>
  );

};
