import React from 'react';
import LogoLayout from '../layouts/logo';
import ResourceCard from './ResourceCard';

export interface ILogoLayoutListingProps {
  resource: any;
  resources: any[];
}

const LogoLayoutListing: React.FunctionComponent<ILogoLayoutListingProps> = ({ resource, resources }) => {
  return (
    <LogoLayout title={resource.title} subtitle={resource.subtitle} logo={resource.logo.publicURL}>
      <div className="columns">
        <div className="column is-three-quarters-desktop">
          <div className="bd-content content" dangerouslySetInnerHTML={{ __html: resource.html }} />
        </div>
      </div>
      <div className="columns">
        <div className="column is-three-quarters-desktop bio-resourcecards">
          {resources &&
            resources.map(r => {
              return <ResourceCard key={r.slug} {...r} />;
            })}
        </div>
      </div>
    </LogoLayout>
  );
};

export default LogoLayoutListing;
