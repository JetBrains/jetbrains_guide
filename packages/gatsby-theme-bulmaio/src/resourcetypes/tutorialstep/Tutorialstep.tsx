import React from 'react';

import SidebarLayout from 'src/components/layout/SidebarLayout';
import {ResourceCardAuthorProps} from 'gatsby-theme-bulmaio/src/components/resourcecard/author';
import {ResourceCardTechnologies} from 'gatsby-theme-bulmaio/src/components/resourcecard/technology';
import {ResourceCardTopics} from 'gatsby-theme-bulmaio/src/components/resourcecard/topic';
import {TutorialstepSidebar} from './TutorialstepSidebar';
import getPrevNextBySlug from '../../components/pagenav/getPrevNextBySlug';
import BottomNav from '../../components/pagenav/BottomNav';
import TopNav from '../../components/pagenav/TopNav';
import {Step} from '../../components/sidebar/SidebarSteps';

import {Video} from "../../components/video";
import VideoPlayer from "../../components/video/VideoPlayer";

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
                subtitle: string;
                date: string;
                longVideo: Video;
                author: ResourceCardAuthorProps;
                technologies: ResourceCardTechnologies;
                topics: ResourceCardTopics;
            }
        }
    }
}

export const Tutorialstep: React.FC<TutorialstepProps> = (
    {data: {resource: {html, inTutorial, fields, frontmatter}}}
) => {

    let bottomNav;
    let topNav;


    const tutorialItems = inTutorial.frontmatter.tutorialItems;
    if (tutorialItems) {
        const {previous, next} = getPrevNextBySlug(
            tutorialItems.map(
                (cpi: any) => ({slug: cpi.fields.slug, label: cpi.frontmatter.title})
            ),
            fields.slug
        );

        bottomNav = <BottomNav previous={previous} next={next} playlistLabel={inTutorial.frontmatter.label}/>;

        const parent = {
            label: inTutorial.frontmatter.title,
            slug: inTutorial.fields.slug
        };
        const siblings = tutorialItems.map((item: any) => {
            return {label: item.frontmatter.title, slug: item.fields.slug};
        });
        topNav =
            <TopNav parent={parent} siblings={siblings} currentSlug={fields.slug}
                    playlistLabel={inTutorial.frontmatter.label} kind="Item"/>;
    }

    // Video
    const {longVideo} = frontmatter;
    const videoOptions = {
        controls: true,
        poster: longVideo.poster.publicURL,
        fill: true,
        sources: [
            {
                src: longVideo.url,
                type: 'video/youtube'
            }
        ]
    };

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
            {longVideo && (
                <div style={{marginBottom: '2rem'}}>
                    <VideoPlayer {...videoOptions} />
                </div>
            )}
            {html ? (
                <div className="columns">
                    <div className="column is-11-desktop content" dangerouslySetInnerHTML={{__html: html}}/>
                </div>
            ) : null}
        </>
    );

    return (
        <SidebarLayout pageTitle={frontmatter.title} subtitle={frontmatter.subtitle}>
            {{
                topNav,
                bottomNav,
                sidebar,
                main
            }}
        </SidebarLayout>
    );

};
