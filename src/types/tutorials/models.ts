import { IBaseResourceNode, IBaseResourceFrontmatter } from '../base_models';

export interface ITutorialStepFrontmatter extends IBaseResourceFrontmatter {
  steps: string[];
}

export interface ITutorialFrontmatter extends IBaseResourceFrontmatter {
  steps: string[];
}

export interface ITutorialStep extends IBaseResourceNode {
  frontmatter: ITutorialStepFrontmatter;
}

export interface ITutorial extends IBaseResourceNode {
  frontmatter: ITutorialFrontmatter;
}

export interface ITutorialEdge {
  node: ITutorial;
}

export type ITutorialEdges = ITutorialEdge[];
export interface ITutorialStepEdge {
  node: ITutorialStep;
}

export type ITutorialStepEdges = ITutorialStepEdge[];
