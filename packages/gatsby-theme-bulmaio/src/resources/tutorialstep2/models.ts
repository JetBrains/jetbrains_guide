import { Resource } from '../models';
import { Thumbnail } from '../../models';
import { Video } from '../../components/video';
import { Tutorial2Resource } from '../tutorial2/models';

export interface TutorialStep2Resource extends Resource {
  label: string
  date: string
  cardThumbnail: Thumbnail
  longVideo?: Video
  inTutorial: Tutorial2Resource
}
