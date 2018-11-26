import { IBaseResourceNode, IBaseResourceFrontmatter } from '../base_models';

export interface IVideoPlayer {
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

export interface ITipNode extends IBaseResourceNode {
  frontmatter: ITipFrontmatter;
}

export interface ITipEdge {
  node: ITipNode;
}

export type ITipEdges = ITipEdge[];
