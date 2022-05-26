import * as React from 'react';

import { Link, withPrefix } from 'gatsby';
import { Thumbnail } from '../../../models';

export interface ResourceCardAuthorProps {
  thumbnail: Thumbnail;
  slug: string;
  title: string;
}

export const ResourceCardAuthor: React.FC<ResourceCardAuthorProps> = ({
  thumbnail,
  slug,
  title,
}) => {
  return (
    <>
      {thumbnail && thumbnail.publicURL && (
        <Link
          data-testid={`rca-key`}
          className="level-item bio-card-author"
          to={slug}
        >
          <figure
            className="image is-rounded is-24x24"
            style={{ marginLeft: '0.2rem', marginRight: '0.2rem' }}
          >
            {thumbnail && thumbnail.childImageSharp && (
              <div className="image is-rounded is-24x24">
                <img
                  src={withPrefix(thumbnail.childImageSharp.resized.src)}
                  alt={`rca-fluid`}
                  loading="lazy"
                  width="24px"
                  height="24px"
                  className="bio-resourcecard-logo"
                />
              </div>
            )}
          </figure>
          <span className="bio-card-author-label">{title}</span>
        </Link>
      )}
    </>
  );
};
