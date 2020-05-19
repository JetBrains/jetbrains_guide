import React, { FC } from 'react';
import { graphql } from 'gatsby';
import { TutorialStepResource } from './models';
// @ts-ignore
// noinspection ES6UnusedImports
import { SeeAlso } from '../../components/seealso';
import SidebarLayout from '../../components/layout/SidebarLayout';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { Step } from '../../components/sidebar/SidebarSteps';
import { TutorialStepSidebar } from './TutorialStepSidebar';
import getPrevNextBySlug from '../../components/pagenav/getPrevNextBySlug';
import BottomNav from '../../components/pagenav/BottomNav';
import TopNav from '../../components/pagenav/TopNav';
import VideoPlayer from '../../components/video/VideoPlayer';

export interface TutorialProps {
  location: {
    search: string;
  };
  data: {
    tutorialStep: TutorialStepResource
  }
}

const TutorialStep: FC<TutorialProps> = (
  {
    location,
    data: {
      tutorialStep
    }
  }) => {

  let bottomNav;
  let topNav;

  // Top/Bottom Nav
  const inTutorial = tutorialStep.inTutorial;
  const tutorialItems = inTutorial.tutorialItems;
  if (tutorialItems) {
    const { previous, next } = getPrevNextBySlug(
      tutorialItems.map(
        (cpi: any) => ({ slug: cpi.slug, label: cpi.title })
      ),
      tutorialStep.slug
    );

    bottomNav = <BottomNav previous={previous} next={next} playlistLabel={inTutorial.label} />;

    const parent = {
      label: inTutorial.title,
      slug: inTutorial.slug
    };
    const siblings = tutorialItems.map((item: any) => {
      return { label: item.title, slug: item.slug };
    });
    topNav =
      <TopNav parent={parent} siblings={siblings} currentSlug={tutorialStep.slug}
              playlistLabel={inTutorial.label} kind="Item" />;
  }

  // Video
  const { longVideo } = tutorialStep;
  const videoOptions = longVideo ? {
    controls: true,
    poster: longVideo.poster.publicURL,
    fill: true,
    sources: [
      {
        src: longVideo.url,
        type: 'video/youtube'
      }
    ]
  } : null;

  // #### Sidebar steps
  const steps: Step[] = inTutorial.tutorialItems.map((item: any) => (
    {
      label: item.title,
      href: item.slug
    }
  ));

  // #### Sidebar
  const sidebar = <TutorialStepSidebar
    author={tutorialStep.author}
    date={tutorialStep.date}
    slug={tutorialStep.slug}
    steps={steps}
    products={tutorialStep.products}
    technologies={tutorialStep.technologies}
    topics={tutorialStep.topics}
  />;

  // Main
  const main = (
    <>
      {longVideo && (
        <div style={{ marginBottom: '2rem' }}>
          <VideoPlayer {...videoOptions} />
        </div>
      )}
      {tutorialStep.body ? (
        <div className="columns">
          <div className="column is-11-desktop content">
            <MDXRenderer>{tutorialStep.body}</MDXRenderer>
          </div>
        </div>
      ) : null}
    </>
  );

  return (
    <SidebarLayout
      pageTitle={tutorialStep.title}
      subtitle={tutorialStep.subtitle}
    >
      {{
        topNav,
        bottomNav,
        sidebar,
        main
      }}
    </SidebarLayout>
  );
};

// noinspection JSUnusedGlobalSymbols
export default TutorialStep;

export const query = graphql`
  query($slug: String!) {
    tutorialStep(slug: { eq: $slug }) {
      slug
      title
      subtitle
      slug
      body
      date(formatString: "MMMM Do, YYYY")
      longVideo {
        ...VideoFragment
      }
      inTutorial {
         ...ListedTutorialFragment
      }   
      author {
        ...ListedAuthorFragment
      }
      technologies {
        ...ListedTechnologyFragment
      }
      topics {
        ...ListedTopicFragment
      }      
      cardThumbnail {
        publicURL
      }
    }
  }
`;
