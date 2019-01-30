import React from 'react';
import IconLayout from '../layouts/icon';
import ResourceCard from './ResourceCard';

export interface IIconLayoutListingProps {
  resource: any;
  resources: any[];
}

const IconLayoutListing: React.FunctionComponent<IIconLayoutListingProps> = ({ resource, resources }) => {
  return (
    <IconLayout title={resource.title} subtitle={resource.subtitle} accent={resource.accent} icon={resource.icon}>
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
    </IconLayout>
  );
};

export default IconLayoutListing;
