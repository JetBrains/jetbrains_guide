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
  cardThumbnail?: any;
}

export interface IBaseCategoryFrontmatter extends IBaseFrontmatter {
  label: string;
}

export interface IFields {
  slug: string;
}

export interface IBaseResourceFields extends IFields {}

export interface ICategoryFields extends IFields {}

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

export interface IBaseCategoryEdge {
  node: IBaseCategoryNode;
}

export interface IBaseResourceEdge {
  node: IBaseResourceNode;
}

export type IBaseResourceEdges = IBaseResourceEdge[];
