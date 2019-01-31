/*

A wrapped component for listings that want a headshot or 
other image in the header area.

 */

import React from 'react';
import Img from 'gatsby-image';

import ReferenceLayout from '../layouts/ReferenceLayout';
import ResourceCard from './ResourceCard';

export interface IImageLayoutListingProps {
  resource: any;
  resources: any[];
}

const ImageLayoutListing: React.FunctionComponent<IImageLayoutListingProps> = ({ resource, resources }) => {
  return (
    <ReferenceLayout title={resource.title} subtitle={resource.subtitle} bodyHtml={resource.html}>
      {{
        figure: (
          <div className="image is-rounded is-96x96">
            <Img className="bio-resourcecard-logo" fluid={resource.headshot.childImageSharp.fluid} />
          </div>
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

export default ImageLayoutListing;
