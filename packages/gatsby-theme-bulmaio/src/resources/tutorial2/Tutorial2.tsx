import React, { FC } from 'react';
import { graphql } from 'gatsby';
import { Tutorial2Resource } from './models';
// @ts-ignore
// noinspection ES6UnusedImports
import { SeeAlso } from '../../components2/seealso';
import SidebarLayout from '../../components/layout/SidebarLayout';
import { TwitterCardPage } from '../../components/layout/MasterLayout';
import { TutorialSidebar2 } from './TutorialSidebar2';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import ResourceCard from '../../components/resourcecard/ResourceCard';

export interface TutorialProps {
  location: {
    search: string;
  };
  data: {
    tutorial2: Tutorial2Resource
  }
}

const Tutorial2: FC<TutorialProps> = (
  {
    location,
    data: {
      tutorial2
    }
  }) => {

  // ##### Twitter Card support
  const twitterCardPage: TwitterCardPage = {
    title: tutorial2.title,
    description: tutorial2.subtitle ? tutorial2.subtitle : '',
    image: tutorial2.cardThumbnail ? `https://www.jetbrains.com${tutorial2.cardThumbnail.publicURL}` : ''
  };

  // #### Sidebar
  const sidebar = <TutorialSidebar2
    author={tutorial2.author}
    date={tutorial2.date}
    technologies={tutorial2.technologies}
    topics={tutorial2.topics2}
  />;

  // Listing
  const listing = (
    <div>
      {tutorial2.tutorialItems && tutorial2.tutorialItems.map(resource => (
          <ResourceCard
            key={resource.slug}
            thumbnail={resource.thumbnail}
            media={{ href: resource.slug, title: resource.title, subtitle: resource.subtitle }}
            technologies={{ items: resource.technologies }}
            topics={{ items: resource.topics2 }}
            date={{ date: resource.date }}
            author={{ thumbnail: resource.author.thumbnail, slug: resource.author.slug, title: resource.author.title }}
          />
        )
      )}
    </div>
  );

  const main = (
    <>
      {tutorial2.body ? (
        <div className="columns">
          <div className="column is-11-desktop content">
            <MDXRenderer>{tutorial2.body}</MDXRenderer>
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
      pageTitle={tutorial2.title}
      subtitle={tutorial2.subtitle}
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
export default Tutorial2;

export const query = graphql`
  query($slug: String!) {
    tutorial2(slug: { eq: $slug }) {
      slug
      title
      subtitle
      slug
      body
      date(formatString: "MMMM Do, YYYY")
      tutorialItems {
        ...ListedResourceFragment2
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
      author {
        ...ListedAuthorFragment
      }      
    }
  }
`;
