import { IBaseCategoryNode, IBaseResourceFrontmatter } from '../base_models';

export interface IPlaylistFrontmatter extends IBaseResourceFrontmatter {
  label: string;
  items: string[];
}

export interface IPlaylistNode extends IBaseCategoryNode {
  frontmatter: IPlaylistFrontmatter;
}

export interface IPlaylistEdge {
  node: IPlaylistNode;
}

export type IPlaylistEdges = IPlaylistEdge[];
