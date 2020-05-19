import React from 'react';
import SidebarPublished, { SidebarPublishedProps } from '../../components/sidebar/SidebarPublished';
import Sidebar from '../../components/sidebar/Sidebar';
import SidebarReferencesGroup from '../../components/sidebar/SidebarReferencesGroup';
import { ResourceCardAuthorProps } from '../../components/resourcecard/author';
import { ResourceCardTechnologies } from '../../components/resourcecard/technology';
import { ResourceCardTopics } from '../../components/resourcecard/topic';
import { ResourceCardProducts } from '../../components/resourcecard/product';

export interface TutorialSidebarProps {
  author: ResourceCardAuthorProps;
  date: string;
  products: ResourceCardProducts;
  technologies: ResourceCardTechnologies;
  topics: ResourceCardTopics;
}

export const TutorialSidebar: React.FC<TutorialSidebarProps> = (
  { author, date, products, technologies, topics }
) => {
  const published: SidebarPublishedProps = {
    date: date,
    author: author
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
        reftype={`topics`} accent={`success`}
        references={topics ? topics.map(t => t.label) : []}
      />
    </Sidebar>
  );

};
