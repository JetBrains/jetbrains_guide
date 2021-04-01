import { Reference } from '../models';
import {Thumbnail} from "../../models";

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface TechnologyReference extends Reference {
  logo: Thumbnail
}
