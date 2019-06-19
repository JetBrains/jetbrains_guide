import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import ReferenceLayout from 'gatsby-theme-bulmaio/src/components/layout/ReferenceLayout';
import { ListedResourcesQuery } from 'gatsby-theme-bulmaio/src/resourcetypes';
import makeResources from 'gatsby-theme-bulmaio/src/resourcetypes/makeResource';

export const Playlists: React.FC = () => {
  const { resources }: ListedResourcesQuery = useStaticQuery(
    graphql`
{
  resources: allResourcesByType(resourceType: "playlist" ) {
    ...ListedResourceFragment
  }
}
`
  );
  return (
    <ReferenceLayout pageTitle="Playlists" subtitle="Curated collections of resources">
      {{
        listing: (
          <div>
            {makeResources(resources)}
          </div>
        )
      }}
    </ReferenceLayout>
  );
};
