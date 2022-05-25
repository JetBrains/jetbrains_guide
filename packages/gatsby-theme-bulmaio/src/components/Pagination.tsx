import React, { FC } from 'react';

// import { Link } from 'gatsby';

interface PaginationProps {
  numPages: number;
  prefix: string;
}

const Pagination: FC<PaginationProps> = ({ numPages, prefix }) => (
  // TODO Re-enable this for 2.1
  <div />
);
// const Pagination: FC<PaginationProps> = (
//   { numPages, prefix }
// ) => (
//   <div>
//     {Array.from({ length: numPages }, (_, i) => (
//       <Link
//         key={`pagination-number${i + 1}`}
//         to={`/${prefix}/${i === 0 ? '' : i + 1}`}
//         style={{ paddingRight: '1em' }}
//       >
//         {i + 1}
//       </Link>
//     ))}
//   </div>
// );

export default Pagination;
