import React from 'react';

import SidebarLayout from 'gatsby-theme-bulmaio/src/components/layout/SidebarLayout';
import { ResourceCardAuthorProps } from 'gatsby-theme-bulmaio/src/components/resourcecard/author';
import { ResourceCardTechnologies } from 'gatsby-theme-bulmaio/src/components/resourcecard/technology';
import { ResourceCardTopics } from 'gatsby-theme-bulmaio/src/components/resourcecard/topic';
import { TutorialSidebar } from './TutorialSidebar';
import makeResources from '../makeResource';

export interface TutorialProps {
  data: {
    resource: {
      html: string;
      frontmatter: {
        title: string;
        date: string;
        subtitle: string;
        author: ResourceCardAuthorProps;
        technologies: ResourceCardTechnologies;
        topics: ResourceCardTopics;
        tutorialItems: any[];
      }
    }
  }
}

export const Tutorial: React.FC<TutorialProps> = (
  { data: { resource: { html, frontmatter } } }
) => {

  // Sidebar
  const sidebar = <TutorialSidebar
    frontmatter={frontmatter}
  />;

  // Tutorial steps
  const { tutorialItems } = frontmatter;

  const main = (
    <>
      {html ? (
        <div className="columns">
          <div className="column is-11-desktop content" dangerouslySetInnerHTML={{ __html: html }}/>
        </div>
      ) : null}
      {tutorialItems && (
        <div className="bio-tutorial-steps-listing">
          {makeResources(tutorialItems)}
        </div>
      )}

    </>
  );

  return (
    <SidebarLayout pageTitle={frontmatter.title} subtitle={frontmatter.subtitle}>
      {{
        sidebar,
        main
      }}
    </SidebarLayout>
  );

};
