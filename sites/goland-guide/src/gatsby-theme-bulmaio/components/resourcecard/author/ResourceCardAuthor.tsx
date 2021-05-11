import React from 'react';
import {Thumbnail} from 'gatsby-theme-bulmaio/src/models';

export interface ResourceCardAuthorProps {
    thumbnail: Thumbnail;
    slug: string;
    title: string;
}

export const ResourceCardAuthor: React.FC<ResourceCardAuthorProps> = (
    {thumbnail, slug, title}
) => <></>;
