import { IAuthorNode } from './authors/models';
import { ITipNode } from './tips/models';
import { ITechnologyNode } from './technologies/models';
import { ITopicNode } from './topics/models';

export interface ISeeAlso {
  title: string;
  href: string;
}

export interface IVideoPlayer {
  poster: any;
  url: any;
}

export interface IBaseFrontmatter {
  type: string;
  title: string;
  subtitle?: string;
  seealso?: ISeeAlso[];
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

export interface IBaseResourceFields extends IFields {
  author: IAuthorNode;
  technologies: ITechnologyNode[];
  topics: ITopicNode[];
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
  fields: IBaseResourceFields;
}

export interface IBaseCategoryNode extends IBaseNode {
  frontmatter: IBaseCategoryFrontmatter;
  fields: ICategoryFields;
}

export interface IBaseResourceEdge {
  node: IBaseResourceNode;
}

export type IBaseResourceEdges = IBaseResourceEdge[];
