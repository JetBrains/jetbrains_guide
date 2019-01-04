import { IBaseCategoryFrontmatter, IBaseCategoryNode } from '../base_models';

export interface IAuthorFrontmatter extends IBaseCategoryFrontmatter {
  headshot: {
    childImageSharp: {
      fluid: any;
    };
  };
}

export interface IAuthorNode extends IBaseCategoryNode {
  frontmatter: IAuthorFrontmatter;
}

export interface IAuthorEdge {
  node: IAuthorNode;
}

export type IAuthorEdges = IAuthorEdge[];
