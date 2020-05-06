import React, { FC } from 'react';
import { graphql } from 'gatsby';
import { TopicReference } from './models';
import ResourceCard from '../../components/resourcecard/ResourceCard';
import ReferenceLayout from '../../components/layout/ReferenceLayout';

export interface TopicProps {
  data: {
    topic: TopicReference
  }
}

const Topic: FC<TopicProps> = (
  {
    data: {
      topic: { title, subtitle, body, accent, icon, resources }
    }
  }
) => {
  console.log(7778, body)
  return (
    <ReferenceLayout pageTitle={title} subtitle={subtitle} bodyHtml={body}>
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
                topics={{ items: resource.topics }}
                date={{ date: resource.date }}
                author={{ thumbnail: resource.author.thumbnail, slug: resource.author.slug, title: resource.author.title }}
              />
            ))
            }
          </div>
        )
      }}
    </ReferenceLayout>
  );
};

// noinspection JSUnusedGlobalSymbols
export default Topic;

export const query = graphql`
  query($slug: String!) {
    topic(slug: { eq: $slug }) {
      ...ListedTopicFragment
      resources {
        ...ListedResourceFragment2
      }
    }
  }
`;
