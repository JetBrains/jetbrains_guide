import { AuthorReference } from '../references/author/models';
import { Topic2Reference } from '../references/topic2/models';
import { TechnologyReference } from '../references/technology/models';
import { ResourceCardAuthorProps } from 'gatsby-theme-bulmaio/src/components/resourcecard/author';
import { Thumbnail } from 'gatsby-theme-bulmaio/src/models';
import { ResourceCardTechnologies } from 'gatsby-theme-bulmaio/src/components/resourcecard/technology';
import { ResourceCardTopics } from 'gatsby-theme-bulmaio/src/components/resourcecard/topic';

/* Various models used throughout the site*/

export interface Resource {
  author: AuthorReference
  body: string
  id: string
  parent: Resource
  slug: string
  date: string;
  title: string
  subtitle?: string;
  thumbnail: Thumbnail
  technologies: TechnologyReference[]
  topics2: Topic2Reference[]
}

export interface ListedResource {
  // Data needed for listing in a resource card
  slug: string;
  type: string;
  title: string;
  subtitle?: string;
  date: string;
  author: ResourceCardAuthorProps;
  technologies: ResourceCardTechnologies;
  topics2: ResourceCardTopics;
  thumbnail: Thumbnail
}

export type ListedResources = ListedResource[];
// export type ListedResourcesQuery = { resources: ListedResources }
