import React from 'react';
import ReferenceLayout from '../layouts/ReferenceLayout';
import ResourceCard from './ResourceCard';

export interface IIconLayoutListingProps {
  resource: any;
  resources: any[];
}

const IconLayoutListing: React.FunctionComponent<IIconLayoutListingProps> = ({ resource, resources }) => {
  return (
    <ReferenceLayout title={resource.title} subtitle={resource.subtitle} bodyHtml={resource.html}>
      {{
        figure: (
          <span className={`icon is-large has-text-${resource.accent}`}>
            <i className={`${resource.icon} fa-3x`} />
          </span>
        ),
        listing: (
          <div>
            {resources &&
              resources.map(r => {
                return <ResourceCard key={r.slug} {...r} />;
              })}
          </div>
        )
      }}
    </ReferenceLayout>
  );
};

export default IconLayoutListing;
