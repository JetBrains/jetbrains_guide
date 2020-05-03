import { Resource } from '../models';
import { Thumbnail } from '../../models';

export interface TutorialStep2Resource extends Resource {
  label: string
  date: string
  cardThumbnail: Thumbnail
}
