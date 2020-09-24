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
                    <div className="content">
                        <ResourceCardMedia {...media} />

                        <nav className="level">
                            <div className="level-left">
                                <div className="level-item">
                                    {author && <ResourceCardAuthor {...author} />}
                                </div>
                                <div className="level-item tags">
                                    {products && products.items && products.items.length > 0 && <ResourceCardProducts {...products} />}
                                    {technologies.items && technologies.items.length > 0 && <ResourceCardTechnologies {...technologies} />}
                                    {topics.items && topics.items.length > 0 && <ResourceCardTopics {...topics} />}
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
