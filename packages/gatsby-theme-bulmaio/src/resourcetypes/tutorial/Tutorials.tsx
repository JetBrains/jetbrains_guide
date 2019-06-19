import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import ReferenceLayout from 'gatsby-theme-bulmaio/src/components/layout/ReferenceLayout';
import { ListedResourcesQuery } from 'gatsby-theme-bulmaio/src/resourcetypes';
import makeResources from 'gatsby-theme-bulmaio/src/resourcetypes/makeResource';

export const Tutorials: React.FC = () => {
  const { resources }: ListedResourcesQuery = useStaticQuery(
    graphql`
{
  resources: allResourcesByType(resourceType: "tutorial" ) {
    ...ListedResourceFragment
  }
}
`
  );
  return (
    <ReferenceLayout pageTitle="Tutorials" subtitle="Learn specific technologies with multi-step lessons using code, text, and videos.">
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
