import { IBaseCategoryFrontmatter, IBaseCategoryNode } from '../base_models';

export interface ITechnologyFrontmatter extends IBaseCategoryFrontmatter {
  logo: string;
}

export interface ITechnology extends IBaseCategoryNode {
  frontmatter: ITechnologyFrontmatter;
}

export interface ITechnologyEdge {
  node: ITechnology;
}

export type ITechnologyEdges = ITechnologyEdge[];