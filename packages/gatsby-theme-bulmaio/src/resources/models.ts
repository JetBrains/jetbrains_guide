import { AuthorReference } from '../references/author/models'
import { TopicReference } from '../references/topic/models'

export interface Resource {
  author: AuthorReference
  body: string
  id: string
  parent: Resource
  slug: string
  title: string
  topics: TopicReference[]
}
