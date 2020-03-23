import React from 'react';
import ReferenceLayout from 'gatsby-theme-bulmaio/src/components/layout/ReferenceLayout';
import markdownToHtml from 'gatsby-theme-bulmaio/src/common/convertMarkdown';
import { ListedResources } from 'gatsby-theme-bulmaio/src/resourcetypes/models';
import makeResources from 'gatsby-theme-bulmaio/src/resourcetypes/makeResource';

export interface TopicProps {
  data: {
    topic: {
      label: string;
      title: string;
      subtitle?: string;
      body?: string;
      accent: string;
      icon: string;
      resources: ListedResources;
    }
  }
}

export const Topic: React.FC<TopicProps> = (
  { data: { topic } }
) => {
  const bodyHtml = topic.body ? markdownToHtml(topic.body) : null;
  return (<ReferenceLayout pageTitle={topic.title} subtitle={topic.subtitle} bodyHtml={bodyHtml}>
      {{
        figure: (
          <span className={`icon is-large has-text-${topic.accent}`}>
            <i className={`${topic.icon} fa-3x`}/>
          </span>
        ),
        listing: (
          <div>
            {makeResources(topic.resources, '*')}
          </div>
        )
      }}
    </ReferenceLayout>
  );
};
