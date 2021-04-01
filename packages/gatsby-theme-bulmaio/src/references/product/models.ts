import {Reference} from '../models';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface ProductReference extends Reference {
    logo: {
        publicURL: string,
        childImageSharp: {
            resized: {
                src: string
                width: number,
                height: number,
                originalName: string
            },
            gatsbyImageData: any
        }
    };
}
