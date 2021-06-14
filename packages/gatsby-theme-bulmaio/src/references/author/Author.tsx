import React, {FC} from 'react';
import {graphql} from 'gatsby';
import ResourceCard from '../../components/resourcecard/ResourceCard';
import ReferenceLayout from '../../components/layout/ReferenceLayout';
import {AuthorReference} from './models';
import {Resource} from '../../resources/models';
import { TwitterCardPage } from '../../components/layout/MasterLayout';
import { withPrefix } from 'gatsby'

export interface AuthorProps {
    data: {
        author: AuthorReference
    }
}

const Author: FC<AuthorProps> = (
    {
        data: {
            author: {title, subtitle, body, thumbnail, referenceResources}
        }
    }) => {

    // ##### Twitter Card support
    const twitterCardPage: TwitterCardPage = {
        title: title,
        description: 'Content by ' + title + (subtitle ? ' - ' + subtitle : ''),
        image: thumbnail
            ? `https://www.jetbrains.com${thumbnail.publicURL}`
            : ''
    };

    // ##### Resources
    const resources = referenceResources;
    return (<ReferenceLayout pageTitle={title} subtitle={subtitle} bodyHtml={body} twitterCardPage={twitterCardPage}>
            {{
                figure: (
                    <div className="image is-rounded is-96x96">
                        <img
                            alt="" className="bio-resourcecard-logo" 
                            loading="lazy"
                            height="96"
                            width="96"
                            src={withPrefix(thumbnail.childImageSharp.resized.src)} />
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
export default Author;

export const query = graphql`
  query($slug: String!) {
    author(slug: { eq: $slug }) {
      ...ListedAuthorFragment
      referenceResources {
        ...ListedResourceFragment
      }
    }
  }
`;
