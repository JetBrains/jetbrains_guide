import * as React from 'react';
import { withPrefix } from 'gatsby';
import { Thumbnail } from '../../../models';

export interface ResourceCardThumbnailProps {
  thumbnail: Thumbnail;
}

export const ResourceCardThumbnail: React.FC<ResourceCardThumbnailProps> = ({
  thumbnail,
}) => {
  return (
    <figure className="image is-96x96">
      <img
        src={withPrefix(thumbnail.childImageSharp.resized.src)}
        alt={`rcg-thumbnail`}
        width="96"
        height="96"
        loading="lazy"
      />
    </figure>
  );
};
