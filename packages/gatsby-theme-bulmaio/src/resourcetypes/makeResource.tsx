/*

Given a query that produces matching resources, format the
data into a list of <ResourceCard> nodes

 */

import { ListedResources } from 'gatsby-theme-bulmaio/src/resourcetypes';
import React from 'react';
import ResourceCard, { ResourceCardProps } from 'gatsby-theme-bulmaio/src/components/resourcecard/ResourceCard';

const makeResources = (resources: ListedResources): React.ReactNode[] => {
  if (resources) {
    return resources
        .filter(resource => resource.frontmatter.type === 'tip')
        .map(resource => {
      const fm = resource.frontmatter;
      // Let's make a resource card
      const card: ResourceCardProps = {
        thumbnail: fm.thumbnail,
        media: { href: resource.fields.slug, title: fm.title, subtitle: fm.subtitle },
        author: fm.author,
        technologies: {
          items: fm.technologies
        },
        topics: { items: fm.topics },
        date: { date: fm.date }
      };
      return <ResourceCard
        key={resource.fields.slug}
        {...card}
      />;
    });
  }
  return [];
};

export default makeResources;
