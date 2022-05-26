import * as React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { ListedResources } from '../../resources/models';
import ResourceCard from '../resourcecard/ResourceCard';

export const RecentItems: React.FC = () => {
  const { allResource } = useStaticQuery(
    graphql`
      query {
        allResource(
          sort: { fields: [date, title], order: [DESC, ASC] }
          limit: 1000
        ) {
          nodes {
            ...ListedResourceFragment
          }
        }
      }
    `
  );
  const nodes: ListedResources = allResource.nodes;
  return (
    <section className="section has-background-light">
      <div className="container">
        <h2 className="title">Recent Tips</h2>
        <div className="columns">
          <div className="column is-four-fifths-desktop bio-resourcecards">
            {nodes &&
              nodes.map(resource => (
                <ResourceCard
                  key={resource.slug}
                  thumbnail={resource.thumbnail}
                  resourceType={resource.resourceType}
                  media={{
                    href: resource.slug,
                    title: resource.title,
                    subtitle: resource.subtitle,
                  }}
                  products={{ items: resource.products }}
                  technologies={{ items: resource.technologies }}
                  topics={{ items: resource.topics }}
                  date={{ date: resource.date }}
                  author={{
                    thumbnail: resource.author.thumbnail,
                    slug: resource.author.slug,
                    title: resource.author.title,
                  }}
                />
              ))}
          </div>
        </div>
      </div>
    </section>
  );
};
