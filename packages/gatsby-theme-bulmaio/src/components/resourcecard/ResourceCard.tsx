import React from 'react';
import {ResourceCardLogo, ResourceCardLogoProps} from './logo/ResourceCardLogo';
import {ResourceCardMedia, ResourceCardMediaProps} from './media/ResourceCardMedia';
import {ResourceCardAuthor, ResourceCardAuthorProps} from './author/ResourceCardAuthor';
import {ResourceCardTechnologies, ResourceCardTechnologiesProps} from './technology/ResourceCardTechnologies';
import {ResourceCardTopics, ResourceCardTopicsProps} from './topic/ResourceCardTopics';
import {ResourceCardDate, ResourceCardDateProps} from './date/ResourceCardDate';
import {ResourceCardThumbnail, ResourceCardThumbnailProps} from './thumbnail/ResourceCardThumbnail';
import {ResourceCardProducts, ResourceCardProductsProps} from './product/ResourceCardProducts';

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
    {logo, thumbnail, media, author, products, technologies, topics, date}
) => {

    return (
        <div className="bio-resourcecard box">
            <article className="media">
                <div className="media-left">
                    {logo && <ResourceCardLogo {...logo} />}
                    {thumbnail && (
                        <ResourceCardThumbnail childImageSharp={thumbnail.childImageSharp}/>
                    )}
                </div>
                <div className="media-content is-clipped">
                    <ResourceCardMedia {...media} />
                    <div className="columns is-vcentered">
                        <div className="column is-narrow">
                            {author && <ResourceCardAuthor {...author} />}
                        </div>
                        <div className="column">
                            {products && products.items && products.items.length > 0 &&
                        <ResourceCardProducts {...products} />}
                            {technologies.items && technologies.items.length > 0 &&
                            <ResourceCardTechnologies {...technologies} />}
                            {topics.items && topics.items.length > 0 && <ResourceCardTopics {...topics} />}
                        </div>
                        <div className="column is-narrow">{date && <ResourceCardDate {...date} />}</div>
                    </div>
                    <nav className="level is-mobile" style={{display: 'none'}}>
                        <div className="level-left is-clipped">
                            {author && <ResourceCardAuthor {...author} />}
                            {products && products.items && products.items.length > 0 &&
                            <ResourceCardProducts {...products} />}
                            {technologies.items && technologies.items.length > 0 &&
                            <ResourceCardTechnologies {...technologies} />}
                            {topics.items && topics.items.length > 0 && <ResourceCardTopics {...topics} />}
                        </div>
                        <div className="level-right">
                            {date && <ResourceCardDate {...date} />}
                        </div>
                    </nav>
                </div>
            </article>
        </div>
    );
};

export default ResourceCard;
