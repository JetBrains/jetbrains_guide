import * as React from 'react';
import {
  ResourceCardLogo,
  ResourceCardLogoProps,
} from './logo/ResourceCardLogo';
import {
  ResourceCardMedia,
  ResourceCardMediaProps,
} from './media/ResourceCardMedia';
import {
  ResourceCardAuthor,
  ResourceCardAuthorProps,
} from './author/ResourceCardAuthor';
import {
  ResourceCardTechnologies,
  ResourceCardTechnologiesProps,
} from './technology/ResourceCardTechnologies';
import {
  ResourceCardTopics,
  ResourceCardTopicsProps,
} from './topic/ResourceCardTopics';
import {
  ResourceCardDate,
  ResourceCardDateProps,
} from './date/ResourceCardDate';
import { ResourceCardThumbnail } from './thumbnail/ResourceCardThumbnail';
import {
  ResourceCardProducts,
  ResourceCardProductsProps,
} from './product/ResourceCardProducts';
import { Thumbnail } from '../../models';

export interface ResourceCardProps {
  logo?: ResourceCardLogoProps;
  thumbnail?: Thumbnail;
  resourceType?: string;
  media: ResourceCardMediaProps;
  author?: ResourceCardAuthorProps;
  products?: ResourceCardProductsProps;
  technologies: ResourceCardTechnologiesProps;
  topics: ResourceCardTopicsProps;
  date: ResourceCardDateProps;
}

function resourceTypeSuffixForDisplay(
  resourceType?: string
): string | undefined {
  if (resourceType != null) {
    switch (resourceType.toLowerCase()) {
      case 'tip':
        return 'tip';
      case 'tutorial':
        return 'tutorial';
      case 'tutorialstep':
        return 'part of tutorial';
      case 'playlist':
        return 'playlist';
    }
  }

  return resourceType;
}

const ResourceCard: React.FC<ResourceCardProps> = ({
  logo,
  thumbnail,
  resourceType,
  media,
  author,
  products,
  technologies,
  topics,
  date,
}) => {
  const referenceDate = new Date();
  referenceDate.setDate(referenceDate.getDate() - 30);

  const resourceDate = new Date(date.date);

  const shouldHighlight = resourceDate > referenceDate;

  return (
    <div className={"bio-resourcecard box " + (shouldHighlight ? "has-background-info-light": "")}>
      <article className="media">
        <div className="media-left">
          {logo && <ResourceCardLogo {...logo} />}
          {thumbnail && <ResourceCardThumbnail thumbnail={thumbnail} />}
        </div>
        <div className="media-content is-clipped">
          <div className="content">
            {shouldHighlight && <span className="tag is-warning is-pulled-right">New</span>}

            <ResourceCardMedia
              {...media}
              resourceType={resourceTypeSuffixForDisplay(resourceType)}
            />

            <nav className="level">
              <div className="level-left">
                <div className="level-item">
                  {author && <ResourceCardAuthor {...author} />}
                </div>
                <div className="level-item tags">
                  {products && products.items && products.items.length > 0 && (
                    <ResourceCardProducts {...products} />
                  )}
                  {technologies.items && technologies.items.length > 0 && (
                    <ResourceCardTechnologies {...technologies} />
                  )}
                  {topics.items && topics.items.length > 0 && (
                    <ResourceCardTopics {...topics} />
                  )}
                </div>
              </div>
              <div className="level-right">
                <div className="level-item">
                  {date && <ResourceCardDate {...date} />}
                </div>
              </div>
            </nav>
          </div>
        </div>
      </article>
    </div>
  );
};

export default ResourceCard;
