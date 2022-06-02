import * as React from 'react';

import { Link } from 'gatsby';

interface ResourceCardTopic {
  label: string;
  slug: string;
}

export type ResourceCardTopics = ResourceCardTopic[];

export interface ResourceCardTopicsProps {
  items: ResourceCardTopics;
}

export const ResourceCardTopics: React.FC<ResourceCardTopicsProps> = ({
  items,
}) => (
  <>
    {items.map(topic => (
      <span
        data-testid={`rcto-key`}
        className="bio-common-card-references"
        key={topic.slug}
      >
        <span className="tag is-rounded">
          <Link to={topic.slug} className="has-text-primary">
            {topic.label}
          </Link>
        </span>
      </span>
    ))}
  </>
);
