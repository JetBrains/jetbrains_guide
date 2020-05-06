export interface SeeAlsoItem {
  title: string;
  href: string;
}

export type SeeAlsos = SeeAlsoItem[];

export interface SeeAlsoProps {
  items: SeeAlsos;
}
