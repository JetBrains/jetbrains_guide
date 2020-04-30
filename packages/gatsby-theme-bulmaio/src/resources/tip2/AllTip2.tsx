import React, { FunctionComponent } from 'react';
import { graphql, Link } from 'gatsby';

import ReferenceLayout from 'gatsby-theme-bulmaio/src/components/layout/ReferenceLayout';
import { PageContext } from '../../components/models';
import ResourceCard from '../../components/resourcecard/ResourceCard';
import { ListedResources } from '../models';

interface AllTip2Props {
  data: {
    allTip2: {
      nodes: ListedResources
    }
  }
  pageContext: PageContext
}

const AllTip2: FunctionComponent<AllTip2Props> = (
  {
    data: { allTip2: { nodes } },
    pageContext: { numPages }
  }) => {
  const listing = (
    <div>
      {nodes && nodes.map(resource => (
          <ResourceCard
            key={resource.slug}
            thumbnail={resource.thumbnail}
            media={{ href: resource.slug, title: resource.title, subtitle: resource.subtitle }}
            technologies={{ items: resource.technologies2 }}
            topics={{ items: resource.topics2 }}
            date={{ date: resource.date }}
            author={{ thumbnail: resource.thumbnail, slug: resource.slug, title: resource.title }}
          />
        )
      )}
    </div>
  );
  const pagination = (
    <div>
      {Array.from({ length: numPages }, (_, i) => (
        <Link
          key={`pagination-number${i + 1}`}
          to={`/tip2s/${i === 0 ? '' : i + 1}`}
          style={{ paddingRight: '1em' }}
        >
          {i + 1}
        </Link>
      ))}
    </div>
  );
  return (
    <ReferenceLayout pageTitle="Tips"
                     subtitle="Visual, standalone, bite-sized learning resources organized into different categories.">
      {{
        listing: (
          <>
            {listing}
            {pagination}
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
        label
        slug
        title
        subtitle
        slug
        thumbnail {
          publicURL
          childImageSharp {
            fluid(maxWidth: 1000) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`;
