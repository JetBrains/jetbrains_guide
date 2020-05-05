import React, { FC } from 'react';
import { graphql } from 'gatsby';
import ReferenceLayout2 from '../../components2/ReferenceLayout2';
import ResourceCard from '../../components/resourcecard/ResourceCard';
import { Technology2Reference } from './models';

export interface TechnologyProps {
  data: {
    technology2: Technology2Reference
  }
}

const Technology2: FC<TechnologyProps> = (
  {
    data: {
      technology2: { title, subtitle, body, logo, resources }
    }
  }: TechnologyProps) => {
  return (
    <ReferenceLayout2 pageTitle={title} subtitle={subtitle} bodyHtml={body}>
      {{
        figure: (
          <div className="image is-rounded is-96x96">
            <img className="bio-resourcecard-logo" src={logo.publicURL} alt="Logo" />
          </div>
        ),
        listing: (
          <div>
            {resources.map(resource => (
              <ResourceCard
                key={resource.slug}
                thumbnail={resource.thumbnail}
                media={{ href: resource.slug, title: resource.title, subtitle: resource.subtitle }}
                technologies={{ items: resource.technologies2 }}
                topics={{ items: resource.topics2 }}
                date={{ date: resource.date }}
                author={{ thumbnail: resource.author.thumbnail, slug: resource.author.slug, title: resource.author.title }}
              />
            ))
            }
          </div>
        )
      }}
    </ReferenceLayout2>
  );
};

// noinspection JSUnusedGlobalSymbols
export default Technology2;

export const query = graphql`
  query($slug: String!) {
    technology2(slug: { eq: $slug }) {
      ...ListedTechnology2Fragment
      resources {
        ...ListedResourceFragment2
      }
    }
  }
`;
