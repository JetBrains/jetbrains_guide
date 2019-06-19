import React from 'react';

import { Link } from 'gatsby';
import Img from 'gatsby-image';
import { Thumbnail } from '../../../models';

export interface ResourceCardAuthorProps {
  thumbnail: Thumbnail;
  slug: string;
  title: string;
}

export const ResourceCardAuthor: React.FC<ResourceCardAuthorProps> = (
  { thumbnail, slug, title }
) => {
  return (
    <>
      {thumbnail && thumbnail.publicURL && (
        <Link data-testid={`rca-key`} className="level-item bio-card-author" to={slug}>
          <figure className="image is-rounded is-24x24">
            {thumbnail && thumbnail.publicURL && (
              <div className="image is-rounded is-24x24">
                <Img alt={`rca-fluid`} className="bio-resourcecard-logo" fluid={thumbnail.childImageSharp.fluid}/>
              </div>
            )}
          </figure>
          <span className="bio-card-author-label">{title}</span>
        </Link>
      )}
    </>
  );
};
