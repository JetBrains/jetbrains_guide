import { ListedResources, Resource } from '../models';
import { Thumbnail } from '../../models';

export interface PlaylistResource extends Resource {
  label: string
  date: string
  cardThumbnail: Thumbnail
  playlistItems: ListedResources
}
