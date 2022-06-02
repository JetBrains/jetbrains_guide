import * as React from 'react';
import { Thumbnail } from 'gatsby-theme-bulmaio/src/models';

export interface ResourceCardLogoProps {
  thumbnail: Thumbnail;
}

export const ResourceCardLogo: React.FC<ResourceCardLogoProps> = ({
  thumbnail,
}) => (
  <div className="media-left">
    <figure className="image is-64x64">
      <img
        data-testid={`rcl-publicURL`}
        loading="lazy"
        src={thumbnail.childImageSharp.resized.src}
        alt="Logo"
      />
    </figure>
  </div>
);
