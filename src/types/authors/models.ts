import { IBaseCategoryFrontmatter, IBaseCategoryNode } from '../base_models';

export interface IAuthorFrontmatter extends IBaseCategoryFrontmatter {
  headshot: string;
}

export interface IAuthor extends IBaseCategoryNode {
  frontmatter: IAuthorFrontmatter;
}

export interface IAuthorEdge {
  node: IAuthor;
}

export type IAuthorEdges = IAuthorEdge[];