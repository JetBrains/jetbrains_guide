import React from 'react';

import SidebarLayout from 'gatsby-theme-bulmaio/src/components/layout/SidebarLayout';
import { SeeAlsos } from 'gatsby-theme-bulmaio/src/components/seealso';
import { ResourceCardAuthorProps } from 'gatsby-theme-bulmaio/src/components/resourcecard/author';
import { ResourceCardTechnologies } from 'gatsby-theme-bulmaio/src/components/resourcecard/technology';
import { ResourceCardTopics } from 'gatsby-theme-bulmaio/src/components/resourcecard/topic';
import { TutorialstepSidebar } from './TutorialstepSidebar';
import getPrevNextBySlug from '../../components/pagenav/getPrevNextBySlug';
import BottomNav from '../../components/pagenav/BottomNav';
import TopNav from '../../components/pagenav/TopNav';
import { Step } from '../../components/sidebar/SidebarSteps';

export interface TutorialstepProps {
  data: {
    resource: {
      html: string;
      inTutorial: any;
      fields: {
        slug: string;
      }
      frontmatter: {
        title: string;
        date: string;
        leadin: string;
        seealso?: SeeAlsos;
        author: ResourceCardAuthorProps;
        technologies: ResourceCardTechnologies;
        topics: ResourceCardTopics;
      }
    }
  }
}

export const Tutorialstep: React.FC<TutorialstepProps> = (
  { data: { resource: { html, inTutorial, fields, frontmatter } } }
) => {

  let bottomNav;
  let topNav;

  const tutorialItems = inTutorial.frontmatter.tutorialItems;
  if (tutorialItems) {
    const { previous, next } = getPrevNextBySlug(
      tutorialItems.map(
        (cpi: any) => ({ slug: cpi.fields.slug, label: cpi.frontmatter.title })
      ),
      fields.slug
    );

    bottomNav = <BottomNav previous={previous} next={next} playlistLabel={inTutorial.frontmatter.label}/>;

    const parent = {
      label: inTutorial.frontmatter.title,
      slug: inTutorial.fields.slug
    };
    const siblings = tutorialItems.map((item: any) => {
      return { label: item.frontmatter.title, slug: item.fields.slug };
    });
    topNav =
      <TopNav parent={parent} siblings={siblings} currentSlug={fields.slug}
              playlistLabel={inTutorial.frontmatter.label} kind="Item"/>;
  }

  // Sidebar
  const steps: Step[] = tutorialItems.map((item: any) => (
    {
      label: item.frontmatter.title,
      href: item.fields.slug
    }
  ));
  const sidebar = <TutorialstepSidebar
    frontmatter={frontmatter}
    slug={fields.slug}
    steps={steps}
  />;

  const main = (
    <>
      {html ? (
        <div className="columns">
          <div className="column is-11-desktop content" dangerouslySetInnerHTML={{ __html: html }}/>
        </div>
      ) : null}
    </>
  );

  return (
    <SidebarLayout pageTitle={frontmatter.title}>
      {{
        topNav,
        bottomNav,
        sidebar,
        main
      }}
    </SidebarLayout>
  );

};
