import React, {FC} from 'react';
import {graphql} from 'gatsby';
import {TopicReference} from './models';
import ResourceCard from '../../components/resourcecard/ResourceCard';
import ReferenceLayout from '../../components/layout/ReferenceLayout';
import {Resource} from '../../resources/models';
import { TwitterCardPage } from '../../components/layout/MasterLayout';

export interface TopicProps {
    data: {
        topic: TopicReference
    }
}

const Topic: FC<TopicProps> = (
    {
        data: {
            topic: {title, subtitle, body, accent, icon, referenceResources}
        }
    }
) => {

    // ##### Twitter Card support
    const twitterCardPage: TwitterCardPage = {
        title: title,
        description: title + (subtitle ? ' - ' + subtitle : ''),
        image: ''
    };

    // ##### Resources
    const resources = referenceResources;
    return (
        <ReferenceLayout pageTitle={title} subtitle={subtitle} bodyHtml={body} twitterCardPage={twitterCardPage}>
            {{
                figure: (
                    <span className={`icon is-large has-text-${accent}`}>
                        <i className={`${icon} fa-3x`}/>
                    </span>
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
                                    media={{
                                        href: resource.slug,
                                        title: resource.title,
                                        subtitle: resource.subtitle ? resource.subtitle : ''
                                    }}
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
export default Topic;

export const query = graphql`
  query($slug: String!) {
    topic(slug: { eq: $slug }) {
      ...ListedTopicFragment
      referenceResources {
        ...ListedResourceFragment
      }
    }
  }
`;
