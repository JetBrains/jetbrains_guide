import React from 'react';
import { GatsbyImage } from "gatsby-plugin-image";

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
      <GatsbyImage image={childImageSharp.gatsbyImageData} alt={`rcg-thumbnail`} />
    </figure>
  );
};
