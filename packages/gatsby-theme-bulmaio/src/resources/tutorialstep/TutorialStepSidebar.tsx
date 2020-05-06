import React from 'react';
import SidebarPublished, { SidebarPublishedProps } from '../../components/sidebar/SidebarPublished';
import Sidebar from '../../components/sidebar/Sidebar';
import SidebarReferencesGroup from '../../components/sidebar/SidebarReferencesGroup';
import { ResourceCardAuthorProps } from '../../components/resourcecard/author';
import { ResourceCardTechnologies } from '../../components/resourcecard/technology';
import { ResourceCardTopics } from '../../components/resourcecard/topic';
import SidebarSteps from '../../components/sidebar/SidebarSteps';

export interface TutorialstepSidebarProps {
  author: ResourceCardAuthorProps;
  date: string;
  slug: string;
  steps: any[];
  technologies: ResourceCardTechnologies;
  topics: ResourceCardTopics;
}

export const TutorialStepSidebar: React.FC<TutorialstepSidebarProps> = (
  { author, date, slug, technologies, topics, steps }
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
        reftype={`topics`}
        accent={`success`}
        references={topics ? topics.map(t => t.label) : []} />
      <SidebarSteps currentSlug={slug} steps={steps}
      />
    </Sidebar>
  );
};
