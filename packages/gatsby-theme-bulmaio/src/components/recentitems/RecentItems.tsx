import React from 'react';
import { ListedResourcesQuery } from '../../resourcetypes';
import { graphql, useStaticQuery } from 'gatsby';
import makeResources from '../../resourcetypes/makeResource';

export const RecentItems: React.FC = () => {
  const { resources }: ListedResourcesQuery = useStaticQuery(
    graphql`
{
  resources: allResourcesByType {
    ...ListedResourceFragment
  }
}
`
  );
  return (
    <section className="section has-background-light">
      <div className="container">
        <h1 className="title">Recent Tips</h1>
        <div className="columns">
          <div className="column is-four-fifths-desktop bio-resourcecards">
            {makeResources(resources)}
          </div>
        </div>
      </div>
    </section>
  );
};
