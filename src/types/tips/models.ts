import { IBaseResourceFrontmatter, IBaseResourceNode, IVideoPlayer } from '../base_models';

export interface ITipFrontmatter extends IBaseResourceFrontmatter {
  shortVideo: IVideoPlayer;
  longVideo: IVideoPlayer;
  leadin: string;
}

export interface ITipNode extends IBaseResourceNode {
  frontmatter: ITipFrontmatter;
}

export interface ITipEdge {
  node: ITipNode;
}

export type ITipEdges = ITipEdge[];
