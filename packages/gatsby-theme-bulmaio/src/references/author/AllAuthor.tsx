import React, { FC } from 'react';
import { graphql } from 'gatsby';

import ReferenceLayout from 'gatsby-theme-bulmaio/src/components/layout/ReferenceLayout';
import { ListedResources } from '../../resources/models';
import { PageContext } from '../../components/models';
import Pagination from '../../components/Pagination';
import SubsectionAuthor from '../../components/subsections/SubsectionAuthor';

interface AllAuthorProps {
  data: {
    allAuthor: {
      nodes: ListedResources
    }
  }
  pageContext: PageContext
}

const PAGE_TITLE = 'Authors';
const SUBTITLE = 'Resources organized by author.';

const AllAuthor: FC<AllAuthorProps> = (
  {
    data: { allAuthor: { nodes } },
    pageContext: { numPages }
  }) => {
  const listing = (
    <nav className="bd-links bio-resourcecards">
      {nodes && nodes.map(resource => (
          <SubsectionAuthor
            key={resource.slug}
            title={resource.title}
            subtitle={resource.subtitle}
            thumbnail={resource.thumbnail}
            href={resource.slug}
          />
        )
      )}
    </nav>
  );

  return (
    <ReferenceLayout
      pageTitle={PAGE_TITLE}
      subtitle={SUBTITLE}
    >
      {{
        listing: (
          <>
            {listing}
            <Pagination numPages={numPages} prefix={'authors'} />
          </>
        )
      }}
    </ReferenceLayout>
  );
};

// noinspection JSUnusedGlobalSymbols
export default AllAuthor;

export const query = graphql`
  query($skip: Int!, $limit: Int!) {
    allAuthor(limit: $limit, skip: $skip, sort: {fields: [title]}) {
      nodes {
        ...ListedAuthorFragment
      }
    }
  }
`;
