import * as React from 'react';

import { Link } from 'gatsby';

interface ResourceCardTechnology {
  label: string;
  slug: string;
}

export type ResourceCardTechnologies = ResourceCardTechnology[];

export interface ResourceCardTechnologiesProps {
  items: ResourceCardTechnologies;
}

export const ResourceCardTechnologies: React.FC<
  ResourceCardTechnologiesProps
> = ({ items }) => (
  <>
    {items.map(technology => (
      <span
        data-testid={`rcte-key`}
        className="bio-common-card-references"
        key={technology.slug}
      >
        <span className="tag is-rounded">
          <Link to={technology.slug} className="has-text-danger">
            {technology.label}
          </Link>
        </span>
      </span>
    ))}
  </>
);
