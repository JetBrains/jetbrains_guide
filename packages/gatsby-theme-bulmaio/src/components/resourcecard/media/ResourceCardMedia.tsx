import * as React from 'react';

import { Link } from 'gatsby';

export interface ResourceCardMediaProps {
  href: string;
  title: string;
  subtitle?: string;
  resourceType?: string;
}

export const ResourceCardMedia: React.FC<ResourceCardMediaProps> = ({
  href,
  title,
  subtitle,
  resourceType,
}) => (
  <div className="content bio-resourcecard-props">
    <Link data-testid={`rcm-href`} to={href}>
      <strong>
        {title} {resourceType && <small>({resourceType})</small>}
      </strong>
    </Link>
    {subtitle && (
      <div data-testid={`rcm-subtitle`} style={{ minHeight: '2.2rem' }}>
        {subtitle}
      </div>
    )}
  </div>
);
