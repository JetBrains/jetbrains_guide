import { IBaseCategoryFrontmatter, IBaseCategoryNode } from '../base_models';

export interface IPlaylistFrontmatter extends IBaseCategoryFrontmatter {}

export interface IPlaylistNode extends IBaseCategoryNode {
  frontmatter: IPlaylistFrontmatter;
}

export interface IPlaylistEdge {
  node: IPlaylistNode;
}

export type IPlaylistEdges = IPlaylistEdge[];
