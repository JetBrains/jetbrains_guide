import React, { FC } from 'react';
import { Link } from 'gatsby';

interface PaginationProps {
  numPages: number;
  prefix: string;
}

const Pagination: FC<PaginationProps> = (
  { numPages, prefix }
) => (
  <nav className="mt-5 pagination is-small" role="navigation" aria-label="pagination">
    <ul className="pagination-list">
      {numPages > 1 && (
          /*@ts-ignore*/Array.from({ length: numPages }, (_, i) => (
          <li>
            <Link key={`pagination-number${i + 1}`}
                  to={`/${prefix}/${i === 0 ? '' : i + 1}`}
                  style={{ minWidth: 'auto' }}
                  className={`pagination-link`}>
              {i + 1}
            </Link>
          </li>
          ))
      )}
    </ul>
  </nav>
);

export default Pagination;
