import React, { FC } from 'react';
import { graphql } from 'gatsby';
import ReferenceLayout from 'gatsby-theme-bulmaio/src/components/layout/ReferenceLayout';
import { PageContext } from '../../components/models';
import SubsectionTechnology from '../../components/subsections/SubsectionTechnology';
import Pagination from '../../components/Pagination';
import { TechnologyReference } from './models';
import { TwitterCardPage } from '../../components/layout/MasterLayout';

interface TechnologiesProps {
  data: {
    allTechnology: {
      nodes: TechnologyReference[]
    }
  }
  pageContext: PageContext
}

const PAGE_TITLE = 'Technologies';
const SUBTITLE = 'Jump to all available learning resources on specific technologies, such as libraries, languages, and frameworks.';

const twitterCardPage: TwitterCardPage = {
  title: PAGE_TITLE,
  description: SUBTITLE,
  image: ''
};

const AllTechnology: FC<TechnologiesProps> = (
  {
    data: { allTechnology: { nodes } },
    pageContext: { numPages }
  }
) => {
  const listing = nodes && (
    <nav className="bd-links bio-resourcecards">
      {nodes &&
      nodes.map(node => {
        return (
          <SubsectionTechnology
            key={node.label}
            title={node.title}
            subtitle={node.subtitle}
            href={node.slug}
            logo={node.logo}
          />
        );
      })}
    </nav>
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
            <Pagination numPages={numPages} prefix={'technologies'} />
          </>
        )
      }}
    </ReferenceLayout>
  );
};

// noinspection JSUnusedGlobalSymbols
export default AllTechnology;

export const query = graphql`
  query($skip: Int!, $limit: Int!) {
    allTechnology(limit: $limit, skip: $skip, sort: {fields: [title]}) {
      nodes {
        ...ListedTechnologyFragment
      }
    }
  }
`;
