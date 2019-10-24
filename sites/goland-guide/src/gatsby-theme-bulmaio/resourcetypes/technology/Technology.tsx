import React from 'react';
import ReferenceLayout from 'gatsby-theme-bulmaio/src/components/layout/ReferenceLayout';
import markdownToHtml from 'gatsby-theme-bulmaio/src/common/convertMarkdown';
import { ListedResources } from 'gatsby-theme-bulmaio/src/resourcetypes/models';
import makeResources from 'gatsby-theme-bulmaio/src/resourcetypes/makeResource';

export interface TechnologyProps {
  data: {
    technology: {
      label: string;
      title: string;
      subtitle?: string;
      body?: string;
      logo: {
        publicURL: string
      }
      resources: ListedResources;
    }
  }
}

export const Technology: React.FC<TechnologyProps> = (
  { data: { technology } }
) => {
  const bodyHtml = technology.body ? markdownToHtml(technology.body) : null;
  return (<ReferenceLayout pageTitle={technology.title} subtitle={technology.subtitle} bodyHtml={bodyHtml}>
      {{
        figure: (
          <div className="image is-rounded is-96x96">
            <img className="bio-resourcecard-logo" src={technology.logo ? technology.logo.publicURL : ""} alt="Logo"/>
          </div>
        ),
        listing: (
          <div>
            {makeResources(technology.resources)}
          </div>
        )
      }}
    </ReferenceLayout>
  );
};
