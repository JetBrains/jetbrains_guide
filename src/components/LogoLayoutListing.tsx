import React from 'react';
import ReferenceLayout from '../layouts/ReferenceLayout';
import ResourceCard from './ResourceCard';

export interface ILogoLayoutListingProps {
  resource: any;
  resources: any[];
}

const LogoLayoutListing: React.FunctionComponent<ILogoLayoutListingProps> = ({ resource, resources }) => {
  return (
    <ReferenceLayout title={resource.title} subtitle={resource.subtitle} bodyHtml={resource.html}>
      {{
        figure: (
          <div className="image is-rounded is-96x96">
            <img className="bio-resourcecard-logo" src={resource.logo.publicURL} alt="Logo" />
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

export default LogoLayoutListing;
