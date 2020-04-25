import { AuthorReference } from '../references/author/models'
import { Topic2Reference } from '../references/topic2/models'

export interface Resource {
  author: AuthorReference
  body: string
  id: string
  parent: Resource
  slug: string
  title: string
  topics2: Topic2Reference[]
}
