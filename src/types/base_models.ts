import { IAuthorNode } from './authors/models';
import { ITipNode } from './tips/models';

export interface IBaseFrontmatter {
  type: string;
  title: string;
  subtitle?: string;
}

export interface IBaseResourceFrontmatter extends IBaseFrontmatter {
  date: string;
  technologies: string[];
  topics: string[];
  author: string;
  shortVideo?: any;
  thumbnail?: any;
}

export interface IBaseCategoryFrontmatter extends IBaseFrontmatter {
  label: string;
}

export interface IFields {
  slug: string;
}

export interface IResourceFields extends IFields {
  author: IAuthorNode;
}

export interface ICategoryFields extends IFields {
  tips: ITipNode[];
}

export interface IBaseNode {
  id: string;
  excerpt: string;
  html: string;
  frontmatter: IBaseFrontmatter;
}

export interface IBaseResourceNode extends IBaseNode {
  frontmatter: IBaseResourceFrontmatter;
  fields: IResourceFields;
}

export interface IBaseCategoryNode extends IBaseNode {
  frontmatter: IBaseCategoryFrontmatter;
  fields: ICategoryFields;
}

export interface IBaseResourceEdge {
  node: IBaseResourceNode;
}

export type IBaseResourceEdges = IBaseResourceEdge[];
