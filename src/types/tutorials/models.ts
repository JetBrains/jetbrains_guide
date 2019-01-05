import { IBaseResourceNode, IBaseResourceFrontmatter, IBaseResourceFields } from '../base_models';

export interface ITutorialStepFrontmatter extends IBaseResourceFrontmatter {
  steps: string[];
}

export interface ITutorialFrontmatter extends IBaseResourceFrontmatter {
  steps: string[];
}

export interface ITutorialStep extends IBaseResourceNode {
  frontmatter: ITutorialStepFrontmatter;
}

export interface ITutorialFields extends IBaseResourceFields {
  steps: ITutorialStep[];
}

export interface ITutorialNode extends IBaseResourceNode {
  frontmatter: ITutorialFrontmatter;
}

export interface ITutorialEdge {
  node: ITutorialNode;
}

export type ITutorialEdges = ITutorialEdge[];
export interface ITutorialStepEdge {
  node: ITutorialStep;
}

export type ITutorialStepEdges = ITutorialStepEdge[];
