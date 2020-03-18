import React from 'react';
import Img from 'gatsby-image';

import ReferenceLayout from 'gatsby-theme-bulmaio/src/components/layout/ReferenceLayout';
import markdownToHtml from 'gatsby-theme-bulmaio/src/common/convertMarkdown';
import { ListedResources } from 'gatsby-theme-bulmaio/src/resourcetypes/models';
import makeResources from 'gatsby-theme-bulmaio/src/resourcetypes/makeResource';

export interface AuthorProps {
  data: {

    author: {
      label: string;
      title: string;
      subtitle?: string;
      body?: string;
      thumbnail: {
        publicURL: string;
        childImageSharp: {
          fluid: any;
        }
      }
      resources: ListedResources;
    }
  }
}

export const Author: React.FC<AuthorProps> = (
  {data: {author}}
) => {
  const bodyHtml = author.body ? markdownToHtml(author.body) : null;
  return (<ReferenceLayout pageTitle={author.title} subtitle={author.subtitle} bodyHtml={bodyHtml}>
      {{
        figure: (
          <div className="image is-rounded is-96x96">
            <Img className="bio-resourcecard-logo" fluid={author.thumbnail.childImageSharp.fluid}/>
          </div>
        ),
        listing: (
          <div>
            {makeResources(author.resources, '*')}
          </div>
        )
      }}
    </ReferenceLayout>
  );
};
