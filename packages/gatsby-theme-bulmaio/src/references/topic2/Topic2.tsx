import React, { FC } from 'react';
import { graphql } from 'gatsby';
import { Topic2Reference } from './models';
import ResourceCard from '../../components/resourcecard/ResourceCard';
import ReferenceLayout2 from '../../components/layout/ReferenceLayout2';

export interface TopicProps {
  data: {
    topic2: Topic2Reference
  }
}

const Topic2: FC<TopicProps> = (
  {
    data: {
      topic2: { title, subtitle, body, accent, icon, resources }
    }
  }
) => {
  return (
    <ReferenceLayout2 pageTitle={title} subtitle={subtitle} bodyHtml={body}>
      {{
        figure: (
          <span className={`icon is-large has-text-${accent}`}>
            <i className={`${icon} fa-3x`} />
          </span>
        ),
        listing: (
          <div>
            {resources.map(resource => (
              <ResourceCard
                key={resource.slug}
                thumbnail={resource.thumbnail}
                media={{ href: resource.slug, title: resource.title, subtitle: resource.subtitle? resource.subtitle : '' }}
                technologies={{ items: resource.technologies2 }}
                topics={{ items: resource.topics2 }}
                date={{ date: resource.date }}
                author={{ thumbnail: resource.author2.thumbnail, slug: resource.author2.slug, title: resource.author2.title }}
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
export default Topic2;

export const query = graphql`
  query($slug: String!) {
    topic2(slug: { eq: $slug }) {
      ...ListedTopic2Fragment
      accent
      icon
      resources {
        ...ListedResourceFragment2
      }
    }
  }
`;
