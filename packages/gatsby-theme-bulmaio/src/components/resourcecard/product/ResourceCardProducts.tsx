import * as React from 'react';

import { Link } from 'gatsby';

interface ResourceCardProduct {
  label: string;
  slug: string;
}

export type ResourceCardProducts = ResourceCardProduct[];

export interface ResourceCardProductsProps {
  items: ResourceCardProducts;
}

export const ResourceCardProducts: React.FC<ResourceCardProductsProps> = ({
  items,
}) => (
  <>
    {items.map(product => (
      <span
        data-testid={`rcte-key`}
        className="bio-common-card-references"
        key={product.slug}
      >
        <span className="tag is-rounded">
          <Link to={product.slug} className="has-text-info">
            {product.label}
          </Link>
        </span>
      </span>
    ))}
  </>
);
