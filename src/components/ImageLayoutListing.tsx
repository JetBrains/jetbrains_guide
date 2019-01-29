/*

A wrapped component for listings that want a headshot or 
other image in the header area.

 */

import React from 'react';
import ImageLayout from '../layouts/image';
import ResourceCard from './ResourceCard';

export interface IListingProps {
  resource: any;
  resources: any[];
}

const ImageLayoutListing: React.FunctionComponent<IListingProps> = ({ resource, resources }) => {
  return (
    <ImageLayout title={resource.title} subtitle={resource.subtitle} headshot={resource.headshot}>
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
    </ImageLayout>
  );
};

export default ImageLayoutListing;
