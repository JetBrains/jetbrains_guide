import { AuthorReference } from '../references/author/models';
import { TopicReference } from '../references/topic/models';
import { TechnologyReference } from '../references/technology/models';
import { Thumbnail } from 'gatsby-theme-bulmaio/src/models';
import { ProductReference } from '../references/product/models';
import { ResourceCardProducts } from '../components/resourcecard/product/ResourceCardProducts';
import { ResourceCardAuthorProps } from '../components/resourcecard/author/ResourceCardAuthor';
import { ResourceCardTechnologies } from '../components/resourcecard/technology/ResourceCardTechnologies';
import { ResourceCardTopics } from '../components/resourcecard/topic/ResourceCardTopics';

/* Various models used throughout the site */

export interface Resource {
  author: AuthorReference;
  body: string;
  id: string;
  parent: Resource;
  slug: string;
  date: string;
  title: string;
  subtitle?: string;
  excerpt?: string;
  resourceType?: string;
  thumbnail: Thumbnail;
  products: ProductReference[];
  technologies: TechnologyReference[];
  topics: TopicReference[];
}

export interface ListedResource {
  // Data needed for listing in a resource card
  slug: string;
  type: string;
  title: string;
  subtitle?: string;
  date: string;
  author: ResourceCardAuthorProps;
  products: ResourceCardProducts;
  technologies: ResourceCardTechnologies;
  topics: ResourceCardTopics;
  thumbnail: Thumbnail;
  resourceType?: string;
}

export type ListedResources = ListedResource[];
