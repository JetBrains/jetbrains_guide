import { IBaseResourceFrontmatter, IBaseResourceNode, IVideoPlayer } from '../base_models';

export interface ITipFrontmatter extends IBaseResourceFrontmatter {
  shortVideo: IVideoPlayer;
  longVideo: IVideoPlayer;
  leadin: string;
}

interface ISeriesEntry {
  label: string;
  slug: string;
}

export interface ITipNode extends IBaseResourceNode {
  frontmatter: ITipFrontmatter;
  // This next part is a temporary tip implementation of "playlist"
  series?: {
    title: string;
    position: number;
    total: number;
    previous: ISeriesEntry;
    next: ISeriesEntry;
    all: ISeriesEntry[];
  };
}

export interface ITipEdge {
  node: ITipNode;
}

export type ITipEdges = ITipEdge[];
