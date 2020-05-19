import React, { FC } from 'react';
import { graphql } from 'gatsby';
import { TutorialResource } from './models';
// @ts-ignore
// noinspection ES6UnusedImports
import { SeeAlso } from '../../components/seealso';
import SidebarLayout from '../../components/layout/SidebarLayout';
import { TwitterCardPage } from '../../components/layout/MasterLayout';
import { TutorialSidebar } from './TutorialSidebar';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import ResourceCard from '../../components/resourcecard/ResourceCard';

export interface TutorialProps {
  location: {
    search: string;
  };
  data: {
    tutorial: TutorialResource
  }
}

const Tutorial: FC<TutorialProps> = (
  {
    location,
    data: {
      tutorial
    }
  }) => {

  // ##### Twitter Card support
  const twitterCardPage: TwitterCardPage = {
    title: tutorial.title,
    description: tutorial.subtitle ? tutorial.subtitle : '',
    image: tutorial.cardThumbnail ? `https://www.jetbrains.com${tutorial.cardThumbnail.publicURL}` : ''
  };

  // #### Sidebar
  const sidebar = <TutorialSidebar
    author={tutorial.author}
    date={tutorial.date}
    products={tutorial.products}
    technologies={tutorial.technologies}
    topics={tutorial.topics}
  />;

  // Listing`
  const listing = (
    <div>
      {tutorial.tutorialItems && tutorial.tutorialItems.map(resource => (
          <ResourceCard
            key={resource.slug}
            thumbnail={resource.thumbnail}
            media={{ href: resource.slug, title: resource.title, subtitle: resource.subtitle }}
            products={{ items: resource.products }}
            technologies={{ items: resource.technologies }}
            topics={{ items: resource.topics }}
            date={{ date: resource.date }}
            author={{ thumbnail: resource.author.thumbnail, slug: resource.author.slug, title: resource.author.title }}
          />
        )
      )}
    </div>
  );

  const main = (
    <>
      {tutorial.body ? (
        <div className="columns">
          <div className="column is-11-desktop content">
            <MDXRenderer>{tutorial.body}</MDXRenderer>
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
      pageTitle={tutorial.title}
      subtitle={tutorial.subtitle}
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
export default Tutorial;

export const query = graphql`
  query($slug: String!) {
    tutorial(slug: { eq: $slug }) {
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
      topics {
        ...ListedTopicFragment
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
