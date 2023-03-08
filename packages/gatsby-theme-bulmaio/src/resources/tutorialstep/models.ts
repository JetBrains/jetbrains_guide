import {Resource} from '../models';
import {Thumbnail} from '../../models';
import {Video} from '../../components/video';
import {TutorialResource} from '../tutorial/models';

export interface TutorialStepResource extends Resource {
  label: string
  date: string
  cardThumbnail: Thumbnail
  longVideo?: Video
  inTutorial: TutorialResource
}
