import React from 'react';
import Img from 'gatsby-image';

export interface ResourceCardThumbnailProps {
  childImageSharp: {
    fluid: { aspectRatio: number, src: string, srcSet: string, sizes: string }
  }
}

export const ResourceCardThumbnail:React.FC<ResourceCardThumbnailProps> = (
  {childImageSharp}
) => {
  return (
    <figure className="image is-96x96">
      <Img alt={`rcg-thumbnail`} fluid={childImageSharp.fluid}/>
    </figure>
  )
};
