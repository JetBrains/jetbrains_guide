/*

Make a Sidebar for the Tutorial resource type.

 */

import React from 'react';
import SidebarPublished, { SidebarPublishedProps } from '../../components/sidebar/SidebarPublished';
import Sidebar from '../../components/sidebar/Sidebar';
import SidebarReferencesGroup from '../../components/sidebar/SidebarReferencesGroup';
import { ResourceCardAuthorProps } from '../../components/resourcecard/author';
import { ResourceCardTechnologies } from '../../components/resourcecard/technology';
import { ResourceCardProducts } from "../..//components/resourcecard/product";
import { ResourceCardTopics } from '../../components/resourcecard/topic';

export interface TutorialSidebarProps {
  frontmatter: {
    date: string;
    author: ResourceCardAuthorProps;
    technologies: ResourceCardTechnologies;
    products: ResourceCardProducts;
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
  const products = frontmatter.products ? frontmatter.products.map(t => t.label) : [];
  const topics = frontmatter.topics ? frontmatter.topics.map(t => t.label) : [];
  return (
    <Sidebar>
      <SidebarPublished {...published}/>
      <SidebarReferencesGroup reftype={`technologies`} accent={`danger`} references={technologies}/>
      <SidebarReferencesGroup reftype={`products`} accent={`info`} references={products}/>
      <SidebarReferencesGroup reftype={`topics`} accent={`success`} references={topics}/>
    </Sidebar>
  );
};
