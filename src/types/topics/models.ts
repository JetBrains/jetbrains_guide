import { IBaseCategoryFrontmatter, IBaseCategoryNode } from '../base_models';

export interface ITopicFrontmatter extends IBaseCategoryFrontmatter {
  accent: string;
  icon: string;
}

export interface ITopic extends IBaseCategoryNode {
  frontmatter: ITopicFrontmatter;
}

export interface ITopicEdge {
  node: ITopic;
}

export type ITopicEdges = ITopicEdge[];