import React, { FC } from 'react';
import { graphql } from 'gatsby';
import { Topic2Reference } from './models';
import ResourceCard from '../../components/resourcecard/ResourceCard';
import ReferenceLayout2 from '../../components2/ReferenceLayout2';

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
            {resources && resources.map(resource => (
              <ResourceCard
                key={resource.slug}
                thumbnail={resource.thumbnail}
                media={{ href: resource.slug, title: resource.title, subtitle: resource.subtitle? resource.subtitle : '' }}
                technologies={{ items: resource.technologies }}
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
export default Topic2;

export const query = graphql`
  query($slug: String!) {
    topic2(slug: { eq: $slug }) {
      ...ListedTopic2Fragment
      resources {
        ...ListedResourceFragment2
      }
    }
  }
`;
