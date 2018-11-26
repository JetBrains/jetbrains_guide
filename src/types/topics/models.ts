import { IBaseCategoryFrontmatter, IBaseCategoryNode } from '../base_models';

export interface ITopicFrontmatter extends IBaseCategoryFrontmatter {
  accent: string;
  icon: string;
}

export interface ITopicNode extends IBaseCategoryNode {
  frontmatter: ITopicFrontmatter;
}

export interface ITopicEdge {
  node: ITopicNode;
}

export type ITopicEdges = ITopicEdge[];
