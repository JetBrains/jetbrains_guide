import { IBaseResourceNode, IBaseResourceFrontmatter, IBaseResourceFields } from '../base_models';

export interface ITutorialStepFrontmatter extends IBaseResourceFrontmatter {
  steps: string[];
}

export interface ITutorialFrontmatter extends IBaseResourceFrontmatter {
  steps: string[];
}

export interface ITutorialStepFields extends IBaseResourceFields {
  tutorial: ITutorialNode;
}

export interface ITutorialStepNode extends IBaseResourceNode {
  frontmatter: ITutorialStepFrontmatter;
  fields: ITutorialStepFields;
}

export interface ITutorialFields extends IBaseResourceFields {
  tutorialsteps: ITutorialStepNode[];
}

export interface ITutorialNode extends IBaseResourceNode {
  frontmatter: ITutorialFrontmatter;
  fields: ITutorialFields;
}

export interface ITutorialEdge {
  node: ITutorialNode;
}

export type ITutorialEdges = ITutorialEdge[];
export interface ITutorialStepEdge {
  node: ITutorialStepNode;
}

export type ITutorialStepEdges = ITutorialStepEdge[];
