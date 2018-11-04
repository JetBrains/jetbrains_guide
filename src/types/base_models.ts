export interface IBaseFrontmatter {
  type: string;
  title: string;
  subtitle?: string;
}

export interface IBaseResourceFrontmatter extends IBaseFrontmatter {
  path: string;
  date: string;
  technologies: string[];
  topics: string[];
  author: string;
  shortVideo?: any;
}

export interface IBaseCategoryFrontmatter extends IBaseFrontmatter {
  label: string;
}

export interface IBaseNode {
  id: string;
  excerpt: string;
  html: string;
  frontmatter: IBaseFrontmatter;
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
