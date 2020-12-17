/* eslint-disable @typescript-eslint/no-empty-interface */
import { Resource } from '../resources/models';

export interface Reference extends Resource {
  label: string
  subtitle?: string
  resources: Resource[]
  referenceResources: Resource[]
}
