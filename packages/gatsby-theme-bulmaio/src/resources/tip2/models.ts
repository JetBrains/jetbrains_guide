import { Resource } from '../models';
import { Video } from '../../components/video';
import { SeeAlsos } from '../../components/seealso';

export interface Tip2Resource extends Resource {
  cardThumbnail: {
    publicURL: string
  }
  date: string;
  animatedGif?: {
    file: {
      publicURL: string
    }
    width: number
    height: number
  };
  shortVideo?: Video;
  longVideo?: Video;
  leadin: string;
  seealso?: SeeAlsos;
}
