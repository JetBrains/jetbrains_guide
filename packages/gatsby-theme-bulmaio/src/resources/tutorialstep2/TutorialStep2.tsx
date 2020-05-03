import React, { FC } from 'react';
import { graphql } from 'gatsby';
import { TutorialStep2Resource } from './models';
// @ts-ignore
// noinspection ES6UnusedImports
import { SeeAlso } from '../../components2/seealso';
import SidebarLayout from '../../components/layout/SidebarLayout';
import { TwitterCardPage } from '../../components/layout/MasterLayout';
import { TutorialSidebar2 } from './TutorialSidebar2';
import { MDXRenderer } from 'gatsby-plugin-mdx';

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

  // ##### Twitter Card support
  const twitterCardPage: TwitterCardPage = {
    title: tutorialStep2.title,
    description: tutorialStep2.subtitle ? tutorialStep2.subtitle : '',
    image: tutorialStep2.cardThumbnail ? `https://www.jetbrains.com${tutorialStep2.cardThumbnail.publicURL}` : ''
  };

  // #### Sidebar
  const sidebar = <TutorialSidebar2
    author={tutorialStep2.author2}
    date={tutorialStep2.date}
    technologies={tutorialStep2.technologies2}
    topics={tutorialStep2.topics2}
  />;

  // Listing
  const listing = (
    <div>
xx    </div>
  );

  const main = (
    <>
      {tutorialStep2.body ? (
        <div className="columns">
          <div className="column is-11-desktop content">
            <MDXRenderer>{tutorialStep2.body}</MDXRenderer>
          </div>
        </div>
      ) : null}
      {listing && (
        <div className="bio-tutorial-steps-listing">
          {listing}
        </div>
      )}

    </>
  );

  return (
    <SidebarLayout
      pageTitle={tutorialStep2.title}
      subtitle={tutorialStep2.subtitle}
      twitterCardPage={twitterCardPage}>
      {{
        // topNav,
        // bottomNav,
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
      author2 {
        ...ListedAuthor2Fragment
      }
      technologies2 {
        ...ListedTechnology2Fragment
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
