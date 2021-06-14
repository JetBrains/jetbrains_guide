import React, {FC} from 'react';
import {graphql} from 'gatsby';
import ReferenceLayout from '../../components/layout/ReferenceLayout';
import ResourceCard from '../../components/resourcecard/ResourceCard';
import {TechnologyReference} from './models';
import {Resource} from '../../resources/models';
import { TwitterCardPage } from '../../components/layout/MasterLayout';

export interface TechnologyProps {
    data: {
        technology: TechnologyReference
    }
}

const Technology: FC<TechnologyProps> = (
    {
        data: {
            technology: {title, subtitle, body, logo, referenceResources}
        }
    }: TechnologyProps) => {

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
export default Technology;

export const query = graphql`
  query($slug: String!) {
    technology(slug: { eq: $slug }) {
      ...ListedTechnologyFragment
      referenceResources {
        ...ListedResourceFragment
      }
    }
  }
`;
