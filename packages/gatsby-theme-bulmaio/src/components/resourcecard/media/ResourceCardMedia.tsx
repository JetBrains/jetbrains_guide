import React from 'react';

import { Link } from 'gatsby';

export interface ResourceCardMediaProps {
  href: string;
  title: string;
  subtitle?: string;
}

export const ResourceCardMedia: React.FC<ResourceCardMediaProps> = (
  { href, title, subtitle }
) => (
  <div className="content bio-resourcecard-props">
    <Link data-testid={`rcm-href`} to={href}>
      <strong>{title}</strong>
    </Link>
    {subtitle && <div data-testid={`rcm-subtitle`} style={{ minHeight: '2.2rem' }}>{subtitle}</div>}
  </div>
);
