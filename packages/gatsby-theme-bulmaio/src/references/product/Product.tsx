import React, {FC} from 'react';
import {graphql} from 'gatsby';
import ReferenceLayout from '../../components/layout/ReferenceLayout';
import ResourceCard from '../../components/resourcecard/ResourceCard';
import {ProductReference} from './models';
import {Resource} from '../../resources/models';
import {TwitterCardPage} from '../../components/layout/MasterLayout';

export interface ProductProps {
    data: {
        product: ProductReference
    }
}

const Product: FC<ProductProps> = (
    {
        data: {
            product: {title, subtitle, body, logo, referenceResources}
        }
    }: ProductProps) => {

    // ##### Twitter Card support
    const twitterCardPage: TwitterCardPage = {
        title: title,
        description: title + (subtitle ? ' - ' + subtitle : ''),
        image: logo
            ? `https://www.jetbrains.com${logo.publicURL}`
            : ''
    };

    // ##### Resources
    const resources = referenceResources;
    return (
        <ReferenceLayout pageTitle={title} subtitle={subtitle} bodyHtml={body} twitterCardPage={twitterCardPage}>
            {{
                figure: (
                    <div className="image is-rounded is-96x96">
                        <img className="bio-resourcecard-logo" src={logo.publicURL} alt="Logo"/>
                    </div>
                ),
                listing: (
                    <div>
                        {resources && resources
                            .sort((r1: Resource, r2: Resource) => {
                                if (r1.title < r2.title) {
                                    return -1;
                                }
                                if (r1.title > r2.title) {
                                    return 1;
                                }
                                return 0;
                            })
                            .map(resource => (
                                <ResourceCard
                                    key={resource.slug}
                                    thumbnail={resource.thumbnail}
                                    resourceType={resource.resourceType}
                                    media={{href: resource.slug, title: resource.title, subtitle: resource.subtitle}}
                                    products={{items: resource.products}}
                                    technologies={{items: resource.technologies}}
                                    topics={{items: resource.topics}}
                                    date={{date: resource.date}}
                                    author={{
                                        thumbnail: resource.author.thumbnail,
                                        slug: resource.author.slug,
                                        title: resource.author.title
                                    }}
                                />
                            ))
                        }
                    </div>
                )
            }}
        </ReferenceLayout>
    );
};

// noinspection JSUnusedGlobalSymbols
export default Product;

export const query = graphql`
  query($slug: String!) {
    product(slug: { eq: $slug }) {
      ...ListedProductFragment
      referenceResources {
        ...ListedResourceFragment
      }
    }
  }
`;