import { Resource } from '../models';
import { Video } from '../../components/video/models';
import { SeeAlsos } from '../../components/seealso';
import { InPlaylists } from '../../components/playlists';

export interface TipResource extends Resource {
  cardThumbnail: {
    publicURL: string
  }
  date: string;
  hasBody?: boolean;
  animatedGif?: {
    file: {
      publicURL: string
    }
    width: number
    height: number
  };
  screenshot?: {
    publicURL: string;
  };
  shortVideo?: Video;
  longVideo?: Video;
  leadin: string;
  seealso?: SeeAlsos;
  inPlaylists: InPlaylists
}
