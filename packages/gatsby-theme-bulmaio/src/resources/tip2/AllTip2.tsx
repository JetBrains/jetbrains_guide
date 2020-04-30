import React, { FunctionComponent } from 'react';
import { graphql, Link } from 'gatsby';

import ReferenceLayout from 'gatsby-theme-bulmaio/src/components/layout/ReferenceLayout';
import { Tip2Resource } from './models';
import { PageContext } from '../../components/models';

export interface AllTip2Props {
  data: {
    allTip2: {
      nodes: Tip2Resource[]
    }
  }
  pageContext: PageContext
}

const AllTip2: FunctionComponent<AllTip2Props> = (
  {
    data: { allTip2 },
    pageContext: { numPages }
  }) => {
  return (
    <ReferenceLayout pageTitle="Tips" subtitle="Visual, standalone, bite-sized learning resources organized into different categories.">
      {{
        listing: (
          <>
            <ul>
              {allTip2.nodes.map(node => (
                <li key={node.slug}>
                  <Link to={node.slug}>{node.title}</Link>
                </li>
              ))}
            </ul>
            {Array.from({ length: numPages }, (_, i) => (
              <Link
                key={`pagination-number${i + 1}`}
                to={`/tip2s/${i === 0 ? '' : i + 1}`}
                style={{ paddingRight: '1em' }}
              >
                {i + 1}
              </Link>
            ))}
          </>
        )
      }}
    </ReferenceLayout>
  );
};

// noinspection JSUnusedGlobalSymbols
export default AllTip2;

// noinspection JSUnusedGlobalSymbols
export const query = graphql`
  query($skip: Int!, $limit: Int!) {
    allTip2(limit: $limit, skip: $skip) {
      nodes {
        title
        slug
        body
      }
    }
  }
`;
