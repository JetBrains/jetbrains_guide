import { ListedResources, Resource } from '../models';
import { Thumbnail } from '../../models';

export interface Playlist2Resource extends Resource {
  label: string
  date: string
  cardThumbnail: Thumbnail
  playlistItems: ListedResources
}
