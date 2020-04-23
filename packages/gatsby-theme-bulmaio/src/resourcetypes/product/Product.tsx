import React from 'react';
import ReferenceLayout from 'gatsby-theme-bulmaio/src/components/layout/ReferenceLayout';
import markdownToHtml from 'gatsby-theme-bulmaio/src/common/convertMarkdown';
import { ListedResources } from 'gatsby-theme-bulmaio/src/resourcetypes/models';
import makeResources from 'gatsby-theme-bulmaio/src/resourcetypes/makeResource';

export interface ProductProps {
  data: {
    product: {
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

export const Product: React.FC<ProductProps> = (
  { data: { product } }
) => {
  const bodyHtml = product.body ? markdownToHtml(product.body) : null;
  return (<ReferenceLayout pageTitle={product.title} subtitle={product.subtitle} bodyHtml={bodyHtml}>
      {{
        figure: (
          <div className="image is-rounded is-96x96">
            <img className="bio-resourcecard-logo" src={product.logo.publicURL} alt="Logo"/>
          </div>
        ),
        listing: (
          <div>
            {makeResources(product.resources, '*')}
          </div>
        )
      }}
    </ReferenceLayout>
  );
};
