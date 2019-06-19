/*

Interfaces and types common across the project.

 */

export interface Thumbnail {
  publicURL: string;
  childImageSharp: {
    fluid: {
      aspectRatio: number,
      src: string,
      srcSet: string,
      sizes: string
    }
  }
}
