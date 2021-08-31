import { ListedResources, Resource } from '../models';
import { Thumbnail } from '../../models';

export interface TutorialResource extends Resource {
  label: string
  date: string
  cardThumbnail: Thumbnail
  tutorialItems: ListedResources
  videoBottom: boolean
}
