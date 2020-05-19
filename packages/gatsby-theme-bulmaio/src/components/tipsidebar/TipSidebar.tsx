import * as React from 'react';

import SidebarPublished, { SidebarPublishedProps } from '../sidebar/SidebarPublished';
import SidebarDoclinks, { Doclink } from '../sidebar/SidebarDoclinks';
import SidebarPlaylists, { SidebarPlaylistsProps } from '../sidebar/SidebarPlaylists';
import Sidebar from '../sidebar/Sidebar';
import SidebarReferencesGroup from '../sidebar/SidebarReferencesGroup';
import { ResourceCardAuthorProps } from '../resourcecard/author/ResourceCardAuthor';
import { ResourceCardTechnologies } from '../resourcecard/technology/ResourceCardTechnologies';
import { ResourceCardTopics } from '../resourcecard/topic/ResourceCardTopics';
import { InPlaylists } from '../playlists';
import { Video } from '../video';
import { SeeAlsos } from '../seealso';
import { ResourceCardProducts } from '../resourcecard/product/ResourceCardProducts';

export interface TipSidebarProps {
  date: string;
  author: ResourceCardAuthorProps;
  products: ResourceCardProducts;
  technologies: ResourceCardTechnologies;
  topics: ResourceCardTopics;
  body?: string;
  seealso?: SeeAlsos;
  longVideo?: Video;
  inPlaylists: InPlaylists;
}

export const TipSidebar: React.FC<TipSidebarProps> = (
  {
    date,
    author,
    products,
    technologies,
    topics,
    body,
    seealso,
    longVideo,
    inPlaylists
  }
) => {
  const published: SidebarPublishedProps = {
    date: date,
    author: author
  };
  const links: Doclink[] = [];
  if (body) {
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
        return { title: playlist.title, href: playlist.slug };
      })
  };

  return (
    <Sidebar>
      <SidebarPublished {...published} />
      <SidebarReferencesGroup
        reftype={`technologies`}
        accent={`danger`}
        references={technologies ? technologies.map(t => t.label) : []}
      />
      <SidebarReferencesGroup
        reftype={`products`}
        accent={`info`}
        references={products ? products.map(t => t.label) : []}
      />
      <SidebarReferencesGroup
        reftype={`topics`}
        accent={`success`}
        references={topics ? topics.map(t => t.label) : []}
      />
      <SidebarDoclinks links={links} />
      <SidebarPlaylists {...thesePlaylists} />
    </Sidebar>
  );

};
