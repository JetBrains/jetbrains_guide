import React, { FC } from 'react';
import { graphql } from 'gatsby';

import ReferenceLayout from 'gatsby-theme-bulmaio/src/components/layout/ReferenceLayout';
import { PageContext } from '../../components/models';
import ResourceCard from '../../components/resourcecard/ResourceCard';
import Pagination from '../../components/Pagination';
import { TutorialResource } from './models';
import { TwitterCardPage } from '../../components/layout/MasterLayout';

interface AllTutorialProps {
  data: {
    allTutorial: {
      nodes: TutorialResource[]
    }
  }
  pageContext: PageContext
}

const PAGE_TITLE = '主题教程';
const SUBTITLE = '由代码示例、步骤指令及视频组成的手把手教程，探讨更多技术细节';

const twitterCardPage: TwitterCardPage = {
  title: PAGE_TITLE,
  description: SUBTITLE,
  image: ''
};

const AllTutorial: FC<AllTutorialProps> = (
  {
    data: { allTutorial: { nodes } },
    pageContext: { numPages }
  }) => {
  const listing = (
    <div>
      {nodes && nodes.map(resource => (
          <ResourceCard
            key={resource.slug}
            thumbnail={resource.thumbnail}
            resourceType={undefined} // do not show type on "all tutorials" page
            media={{ href: resource.slug, title: resource.title, subtitle: resource.subtitle }}
            technologies={{ items: resource.technologies }}
            products={{ items: resource.products }}
            topics={{ items: resource.topics }}
            date={{ date: resource.date }}
            author={{ thumbnail: resource.author.thumbnail, slug: resource.author.slug, title: resource.author.title }}
          />
        )
      )}
    </div>
  );
  return (
    <ReferenceLayout
      pageTitle={PAGE_TITLE}
      subtitle={SUBTITLE}
      twitterCardPage={twitterCardPage}
    >
      {{
        listing: (
          <>
            {listing}
            <Pagination numPages={numPages} prefix={'tutorials'} />
          </>
        )
      }}
    </ReferenceLayout>
  );
};

// noinspection JSUnusedGlobalSymbols
export default AllTutorial;

// noinspection JSUnusedGlobalSymbols
export const query = graphql`
  query($skip: Int!, $limit: Int!) {
    allTutorial(
      limit: $limit, 
      skip: $skip, 
      sort: {
        fields: [date]
        order: DESC
      }
    ) {
      nodes {
        ...ListedTutorialFragment
      }
    }
  }
`;
