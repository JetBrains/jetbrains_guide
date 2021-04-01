import React from 'react';
import {Thumbnail} from "../../../models";

export interface ResourceCardThumbnailProps {
  thumbnail: Thumbnail
}

export const ResourceCardThumbnail:React.FC<ResourceCardThumbnailProps> = (
  {thumbnail}
) => {
  return (
    <figure className="image is-96x96">
      <img 
          src={thumbnail.childImageSharp.resized.src} 
          alt={`rcg-thumbnail`} 
          width="96px"
          height="96px"
          loading="lazy" />
    </figure>
  );
};
