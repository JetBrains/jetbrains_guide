import { IBaseResourceNode, IBaseResourceFrontmatter } from '../base_models';

interface IVideoPlayer {
  poster: any;
  url: any;
}

interface ISeeAlso {
  title: string;
  href: string;
}

export interface ITipFrontmatter extends IBaseResourceFrontmatter {
  shortVideo: IVideoPlayer;
  longVideo: IVideoPlayer;
  leadin: string;
  seealso?: ISeeAlso[];
}

export interface ITip extends IBaseResourceNode {
  frontmatter: ITipFrontmatter;
}

export interface ITipEdge {
  node: ITip;
}

export type ITipEdges = ITipEdge[];
