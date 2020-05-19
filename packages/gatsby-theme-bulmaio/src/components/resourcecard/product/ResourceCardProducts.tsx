import React from 'react';

import { Link } from 'gatsby';

interface ResourceCardProduct {
  label: string;
  slug: string;
}

export type ResourceCardProducts = ResourceCardProduct[];

export interface ResourceCardProductsProps {
  items: ResourceCardProducts
}

export const ResourceCardProducts: React.FC<ResourceCardProductsProps> = ({ items }) => (
  <>
    {items.map(product => (
      <span data-testid={`rcte-key`} className="level-item bio-common-card-references" key={product.slug}>
        <div className="tags">
          <span className="tag is-rounded has-text-warning">
            <Link to={product.slug} className="has-text-info">
              {product.label}
            </Link>
          </span>
        </div>
      </span>
    ))
    }
  </>
);

