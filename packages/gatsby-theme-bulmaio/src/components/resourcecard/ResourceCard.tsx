import React from 'react';
// noinspection TypeScriptPreferShortImport
import { ResourceCardLogo, ResourceCardLogoProps } from './logo/ResourceCardLogo';
// noinspection TypeScriptPreferShortImport
import { ResourceCardMedia, ResourceCardMediaProps } from './media/ResourceCardMedia';
// noinspection TypeScriptPreferShortImport
import { ResourceCardAuthor, ResourceCardAuthorProps } from './author/ResourceCardAuthor';
// noinspection TypeScriptPreferShortImport
import { ResourceCardTechnologies, ResourceCardTechnologiesProps } from './technology/ResourceCardTechnologies';
// noinspection TypeScriptPreferShortImport
import { ResourceCardProducts, ResourceCardProductsProps } from './product/ResourceCardProducts';
// noinspection TypeScriptPreferShortImport
import { ResourceCardTopics, ResourceCardTopicsProps } from './topic/ResourceCardTopics';
// noinspection TypeScriptPreferShortImport
import { ResourceCardDate, ResourceCardDateProps } from './date/ResourceCardDate';
// noinspection TypeScriptPreferShortImport
import { ResourceCardThumbnail, ResourceCardThumbnailProps } from './thumbnail/ResourceCardThumbnail';

export interface ResourceCardProps {
  logo?: ResourceCardLogoProps,
  thumbnail?: ResourceCardThumbnailProps,
  media: ResourceCardMediaProps,
  author?: ResourceCardAuthorProps,
  technologies: ResourceCardTechnologiesProps,
  products: ResourceCardProductsProps,
  topics: ResourceCardTopicsProps,
  date: ResourceCardDateProps
}

const ResourceCard: React.FC<ResourceCardProps> = (
  { logo, thumbnail, media, author, technologies, products, topics, date }
) => {

  return (
    <div className="bio-resourcecard box">
      <article className="media">
        <div className="media-left">
          {logo && <ResourceCardLogo {...logo}/>}
          {thumbnail && (
            <ResourceCardThumbnail childImageSharp={thumbnail.childImageSharp}/>
          )}
        </div>
        <div className="media-content">
          <ResourceCardMedia {...media}/>
          <nav className="level is-mobile">
            <div className="level-left">
              {author && <ResourceCardAuthor {...author}/>}
              {technologies.items && technologies.items.length > 0 && <ResourceCardTechnologies {...technologies}/>}
              {products.items && products.items.length > 0 && <ResourceCardProducts {...products}/>}
              {topics.items && topics.items.length > 0 && <ResourceCardTopics {...topics}/>}
            </div>
            {date && <ResourceCardDate {...date}/>}
          </nav>
        </div>
      </article>
    </div>
  );
};

export default ResourceCard;
