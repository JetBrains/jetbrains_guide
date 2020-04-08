/* eslint-disable @typescript-eslint/no-empty-interface */
import { Resource } from '../resources/models'

export interface Reference extends Resource {
  resources: Resource[]
}
