import { IBaseResourceNode, IBaseResourceFrontmatter } from '../base_models';

export interface IVideoPlayer {
  poster: any;
  url: any;
}

interface ISeeAlso {
  title: string;
  href: string;
}

export interface ITutorialFrontmatter extends IBaseResourceFrontmatter {
  shortVideo: IVideoPlayer;
  longVideo: IVideoPlayer;
  leadin: string;
  seealso?: ISeeAlso[];
}

export interface ITutorial extends IBaseResourceNode {
  frontmatter: ITutorialFrontmatter;
}

export interface ITutorialEdge {
  node: ITutorial;
}

export type ITutorialEdges = ITutorialEdge[];
