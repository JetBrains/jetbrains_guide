import React from 'react';
import { ResourceCardLogo, ResourceCardLogoProps } from './logo';
import { ResourceCardMedia, ResourceCardMediaProps } from './media';
import { ResourceCardAuthor, ResourceCardAuthorProps } from './author';
import { ResourceCardTechnologies, ResourceCardTechnologiesProps } from './technology';
import { ResourceCardTopics, ResourceCardTopicsProps } from './topic';
import { ResourceCardDate, ResourceCardDateProps } from './date';
import { ResourceCardThumbnail, ResourceCardThumbnailProps } from './thumbnail';
import { ResourceCardProducts, ResourceCardProductsProps } from './product';

export interface ResourceCardProps {
  logo?: ResourceCardLogoProps,
  thumbnail?: ResourceCardThumbnailProps,
  media: ResourceCardMediaProps,
  author?: ResourceCardAuthorProps,
  products?: ResourceCardProductsProps,
  technologies: ResourceCardTechnologiesProps,
  topics: ResourceCardTopicsProps,
  date: ResourceCardDateProps
}

const ResourceCard: React.FC<ResourceCardProps> = (
  { logo, thumbnail, media, author, products, technologies, topics, date }
) => {

  return (
    <div className="bio-resourcecard box">
      <article className="media">
        <div className="media-left">
          {logo && <ResourceCardLogo {...logo} />}
          {thumbnail && (
            <ResourceCardThumbnail childImageSharp={thumbnail.childImageSharp} />
          )}
        </div>
        <div className="media-content">
          <ResourceCardMedia {...media} />
          <nav className="level is-mobile">
            <div className="level-left">
              {author && <ResourceCardAuthor {...author} />}
              {products && products.items && products.items.length > 0 && <ResourceCardProducts {...products} />}
              {technologies.items && technologies.items.length > 0 && <ResourceCardTechnologies {...technologies} />}
              {topics.items && topics.items.length > 0 && <ResourceCardTopics {...topics} />}
            </div>
            {date && <ResourceCardDate {...date} />}
          </nav>
        </div>
      </article>
    </div>
  );
};

export default ResourceCard;
