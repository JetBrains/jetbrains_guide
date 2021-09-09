import React, { FC } from 'react';
import { graphql } from 'gatsby';

import ReferenceLayout from 'gatsby-theme-bulmaio/src/components/layout/ReferenceLayout';
import { PageContext } from '../../components/models';
import ResourceCard from '../../components/resourcecard/ResourceCard';
import Pagination from '../../components/Pagination';
import { TipResource } from './models';
import { TwitterCardPage } from '../../components/layout/MasterLayout';

interface AllTipProps {
  data: {
    allTip: {
      nodes: TipResource[]
    }
  }
  pageContext: PageContext
}

const PAGE_TITLE = 'IDE 操作小技巧';
const SUBTITLE = '由截图、短视频组成的碎片式小技巧，可依据类别组成不同的学习资源';

const twitterCardPage: TwitterCardPage = {
  title: PAGE_TITLE,
  description: SUBTITLE,
  image: ''
};

const AllTip: FC<AllTipProps> = (
  {
    data: { allTip: { nodes } },
    pageContext: { numPages }
  }) => {

  const listing = (
    <div>
      {nodes && nodes.map(resource => (
          <ResourceCard
            key={resource.slug}
            thumbnail={resource.thumbnail}
            resourceType={undefined} // do not show type on "all tips" page
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
            <Pagination numPages={numPages} prefix={'tips'} />
          </>
        )
      }}
    </ReferenceLayout>
  );
};

// noinspection JSUnusedGlobalSymbols
export default AllTip;

// noinspection JSUnusedGlobalSymbols
export const query = graphql`
  query($skip: Int!, $limit: Int!) {
    allTip(
      limit: $limit, 
      skip: $skip, 
      sort: {
        fields: [date]
        order: DESC
      }
    ) {
      nodes {
        ...ListedTipFragment
      }
    }
  }
`;
