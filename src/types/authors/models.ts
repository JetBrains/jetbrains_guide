import { IBaseCategoryFrontmatter, IBaseCategoryNode } from '../base_models';

export interface IAuthorFrontmatter extends IBaseCategoryFrontmatter {
  headshot: string;
}

export interface IAuthorNode extends IBaseCategoryNode {
  frontmatter: IAuthorFrontmatter;
}

export interface IAuthorEdge {
  node: IAuthorNode;
}

export type IAuthorEdges = IAuthorEdge[];
