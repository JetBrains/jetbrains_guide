import React, { FC } from 'react';
import { graphql } from 'gatsby';
import ReferenceLayout from 'gatsby-theme-bulmaio/src/components/layout/ReferenceLayout';
import { PageContext } from '../../components/models';
import SubsectionTechnology from '../../components/subsections/SubsectionTechnology';
import Pagination from '../../components2/Pagination';
import { Technology2Reference } from './models';

interface TechnologiesProps {
  data: {
    allTechnology2: {
      nodes: Technology2Reference[]
    }
  }
  pageContext: PageContext
}

const DEFAULT_LOGO = 'https://cdn.worldvectorlogo.com/logos/python-5.svg';
const PAGE_TITLE = 'Technologies';
const SUBTITLE = 'Jump to all available learning resources on specific technologies, such as libraries, languages, and frameworks.';

const AllTechnology2: FC<TechnologiesProps> = (
  {
    data: { allTechnology2: { nodes } },
    pageContext: { numPages }
  }
) => {
  const listing = nodes && (
    <nav className="bd-links bio-resourcecards">
      {nodes &&
      nodes.map(node => {
        const logo = node.logo ? node.logo.publicURL : DEFAULT_LOGO;
        return (
          <SubsectionTechnology
            key={node.label}
            title={node.title}
            subtitle={node.subtitle}
            href={node.slug}
            logo={logo}
          />
        );
      })}
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
            <Pagination numPages={numPages} prefix={'technologies2'} />
          </>
        )
      }}
    </ReferenceLayout>
  );
};

// noinspection JSUnusedGlobalSymbols
export default AllTechnology2;

export const query = graphql`
  query($skip: Int!, $limit: Int!) {
    allTechnology2(limit: $limit, skip: $skip, sort: {fields: [title]}) {
      nodes {
        ...ListedTechnology2Fragment
      }
    }
  }
`;
