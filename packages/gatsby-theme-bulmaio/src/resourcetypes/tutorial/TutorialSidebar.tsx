/*

Make a Sidebar for the Tutorial resource type.

 */

import React from 'react';
import SidebarPublished, { SidebarPublishedProps } from '../../components/sidebar/SidebarPublished';
import Sidebar from '../../components/sidebar/Sidebar';
import SidebarReferencesGroup from '../../components/sidebar/SidebarReferencesGroup';
import { ResourceCardAuthorProps } from '../../components/resourcecard/author';
import { ResourceCardTechnologies } from '../../components/resourcecard/technology';
import { ResourceCardTopics } from '../../components/resourcecard/topic';

export interface TutorialSidebarProps {
  frontmatter: {
    date: string;
    author: ResourceCardAuthorProps;
    technologies: ResourceCardTechnologies;
    topics: ResourceCardTopics;
  };
}

export const TutorialSidebar: React.FC<TutorialSidebarProps> = (
  { frontmatter }
) => {
  const published: SidebarPublishedProps = {
    date: frontmatter.date,
    author: frontmatter.author
  };
  const technologies = frontmatter.technologies ? frontmatter.technologies.map(t => t.label) : [];
  const topics = frontmatter.topics ? frontmatter.topics.map(t => t.label) : [];
  return (
    <Sidebar>
      <SidebarPublished {...published}/>
      <SidebarReferencesGroup reftype={`technologies`} accent={`danger`} references={technologies}/>
      <SidebarReferencesGroup reftype={`topics`} accent={`success`} references={topics}/>
    </Sidebar>
  );
};
