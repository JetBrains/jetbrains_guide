import { Author2Reference } from '../references/author2/models';
import { Topic2Reference } from '../references/topic2/models';
import { Technology2Reference } from '../references/technology2/models';

export interface Resource {
  author2: Author2Reference
  body: string
  id: string
  parent: Resource
  slug: string
  title: string
  technologies2: Technology2Reference[]
  topics2: Topic2Reference[]
}
