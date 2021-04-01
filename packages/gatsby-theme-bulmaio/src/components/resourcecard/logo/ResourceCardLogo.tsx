import React from 'react';
import {withPrefix} from "gatsby";

export interface ResourceCardLogoProps {
  publicURL: string;
}

export const ResourceCardLogo: React.FC<ResourceCardLogoProps> = (
  { publicURL }
  ) => (
  <div className="media-left">
      <figure className="image is-64x64">
        <img data-testid={`rcl-publicURL`}
             loading="lazy"
             src={withPrefix(publicURL)} 
             alt="Logo"/>
      </figure>
  </div>
);
