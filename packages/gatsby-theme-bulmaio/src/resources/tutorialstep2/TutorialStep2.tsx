import React, { FC } from 'react';
import { graphql } from 'gatsby';
import { TutorialStep2Resource } from './models';
// @ts-ignore
// noinspection ES6UnusedImports
import { SeeAlso } from '../../components2/seealso';
import SidebarLayout from '../../components/layout/SidebarLayout';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { Step } from '../../components/sidebar/SidebarSteps';
import { TutorialStep2Sidebar } from './TutorialStep2Sidebar';
import getPrevNextBySlug from '../../components2/pagenav/getPrevNextBySlug';
import BottomNav from '../../components2/pagenav/BottomNav';
import TopNav from '../../components2/pagenav/TopNav';
import VideoPlayer from '../../components/video/VideoPlayer';

export interface TutorialProps {
  location: {
    search: string;
  };
  data: {
    tutorialStep2: TutorialStep2Resource
  }
}

const TutorialStep2: FC<TutorialProps> = (
  {
    location,
    data: {
      tutorialStep2
    }
  }) => {

  let bottomNav;
  let topNav;

  // Top/Bottom Nav
  const inTutorial = tutorialStep2.inTutorial;
  const tutorialItems = inTutorial.tutorialItems;
  if (tutorialItems) {
    const { previous, next } = getPrevNextBySlug(
      tutorialItems.map(
        (cpi: any) => ({ slug: cpi.slug, label: cpi.title })
      ),
      tutorialStep2.slug
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
      <TopNav parent={parent} siblings={siblings} currentSlug={tutorialStep2.slug}
              playlistLabel={inTutorial.label} kind="Item" />;
  }

  // Video
  const { longVideo } = tutorialStep2;
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
  const sidebar = <TutorialStep2Sidebar
    author={tutorialStep2.author}
    date={tutorialStep2.date}
    slug={tutorialStep2.slug}
    steps={steps}
    technologies={tutorialStep2.technologies}
    topics={tutorialStep2.topics2}
  />;

  // Main
  const main = (
    <>
      {longVideo && (
        <div style={{ marginBottom: '2rem' }}>
          <VideoPlayer {...videoOptions} />
        </div>
      )}
      {tutorialStep2.body ? (
        <div className="columns">
          <div className="column is-11-desktop content">
            <MDXRenderer>{tutorialStep2.body}</MDXRenderer>
          </div>
        </div>
      ) : null}
    </>
  );

  return (
    <SidebarLayout
      pageTitle={tutorialStep2.title}
      subtitle={tutorialStep2.subtitle}
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
export default TutorialStep2;

export const query = graphql`
  query($slug: String!) {
    tutorialStep2(slug: { eq: $slug }) {
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
         ...ListedTutorial2Fragment
      }   
      author {
        ...ListedAuthorFragment
      }
      technologies {
        ...ListedTechnologyFragment
      }
      topics2 {
        ...ListedTopic2Fragment
      }      
      cardThumbnail {
        publicURL
      }
    }
  }
`;
