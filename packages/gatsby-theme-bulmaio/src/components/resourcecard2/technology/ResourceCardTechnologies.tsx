import React from 'react';

import { Link } from 'gatsby';

interface ResourceCardTechnology {
  label: string;
  slug: string;
}

export type ResourceCardTechnologies = ResourceCardTechnology[];

export interface ResourceCardTechnologiesProps {
  items: ResourceCardTechnologies
}

export const ResourceCardTechnologies: React.FC<ResourceCardTechnologiesProps> = ({ items }) => (
  <>
    {items.map(technology => (
      <span data-testid={`rcte-key`} className="level-item bio-common-card-references" key={technology.slug}>
        <div className="tags">
          <span className="tag is-rounded has-text-warning">
            <Link to={technology.slug} className="has-text-danger">
              {technology.label}
            </Link>
          </span>
        </div>
      </span>
    ))
    }
  </>
);

