import { IAuthor } from './authors/models';

export interface IBaseFrontmatter {
  type: string;
  title: string;
  subtitle?: string;
}

export interface IBaseResourceFrontmatter extends IBaseFrontmatter {
  date: string;
  technologies: string[];
  topics: string[];
  author: IAuthor;
  shortVideo?: any;
  thumbnail?: any;
}

export interface IBaseCategoryFrontmatter extends IBaseFrontmatter {
  label: string;
}

export interface IFields {
  slug: string;
}

export interface IBaseNode {
  id: string;
  excerpt: string;
  html: string;
  frontmatter: IBaseFrontmatter;
  fields: IFields;
}

export interface IBaseResourceNode extends IBaseNode {
  frontmatter: IBaseResourceFrontmatter;
}

export interface IBaseCategoryNode extends IBaseNode {
  frontmatter: IBaseCategoryFrontmatter;
}

export interface IBaseResourceEdge {
  node: IBaseResourceNode;
}

export type IBaseResourceEdges = IBaseResourceEdge[];
