import { ListedResources, Resource } from '../models';
import { Thumbnail } from '../../models';

export interface Tutorial2Resource extends Resource {
  label: string
  date: string
  cardThumbnail: Thumbnail
  tutorialItems: ListedResources
}
