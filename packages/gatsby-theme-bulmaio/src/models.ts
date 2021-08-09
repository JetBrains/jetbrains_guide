/*
 * Interfaces and types common across the project.
 */

export interface Thumbnail {
  publicURL: string;
  childImageSharp: {
    resized : {
      src : string,
      width: number,
      height: number,
      originalName : string
    }
    /* this is the graphQL
       type of gatsbyImageData
       use the graphQL tool to see
       what properties are available
     */
    gatsbyImageData: any
  }
}
