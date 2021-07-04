import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { ListedResources } from 'gatsby-theme-bulmaio/src/resources/models';
import ResourceCard from 'gatsby-theme-bulmaio/src/components/resourcecard/ResourceCard';

export const RecentItems: React.FC = () => {
  const { allResource } = useStaticQuery(
    graphql`
    query {
      allResource(sort: {fields: [date, title], order: [DESC, ASC]}, limit: 10) {
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
            {nodes && nodes.map(resource => (
                <ResourceCard
                  key={resource.slug}
                  thumbnail={resource.thumbnail}
                  resourceType={resource.resourceType}
                  media={{ href: resource.slug, title: resource.title, subtitle: resource.subtitle }}
                  products={{ items: resource.products }}
                  technologies={{ items: resource.technologies }}
                  topics={{ items: resource.topics }}
                  date={{ date: resource.date }}
                  author={{
                    thumbnail: resource.author.thumbnail,
                    slug: resource.author.slug,
                    title: resource.author.title
                  }}
                />
              )
            )}
          </div>
        </div>
        <div>
          <a className="button" href={"./tips/"}>More tips...</a>
        </div>
      </div>
    </section>
  );

};
