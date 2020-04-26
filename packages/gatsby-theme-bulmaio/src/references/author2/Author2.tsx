import React, { FC } from 'react';
import { graphql } from 'gatsby';
import { ListedResources } from '../../resources/models';
import Img from 'gatsby-image';
import ResourceCard from '../../components/resourcecard/ResourceCard';
import ReferenceLayout2 from '../../components/layout/ReferenceLayout2';

export interface AuthorProps {
  data: {
    author2: {
      label: string;
      title: string;
      subtitle?: string;
      body?: string;
      thumbnail: {
        publicURL: string;
        childImageSharp: {
          fluid: any;
        }
      }
      resources: ListedResources;
    }
  }
}

const Author: FC<AuthorProps> = (
  {
    data: {
      author2: { title, subtitle, body, thumbnail, resources }
    }
  }: AuthorProps) => {
  return (<ReferenceLayout2 pageTitle={title} subtitle={subtitle} bodyHtml={body}>
      {{
        figure: (
          <div className="image is-rounded is-96x96">
            <Img className="bio-resourcecard-logo" fluid={thumbnail.childImageSharp.fluid} />
          </div>
        ),
        listing: (
          <div>
            {resources.map(resource => (
              <ResourceCard
                key={resource.slug}
                thumbnail={resource.thumbnail}
                media={{ href: resource.slug, title: resource.title, subtitle: resource.subtitle }}
                technologies={{ items: resource.technologies2 }}
                topics={{ items: resource.topics2 }}
                date={{ date: resource.date }}
              />
            ))
            }
          </div>
        )
      }}
    </ReferenceLayout2>
  );
};

// noinspection JSUnusedGlobalSymbols
export default Author;

export const query = graphql`
  query($slug: String!) {
    author2(slug: { eq: $slug }) {
      label      
      title
      subtitle
      body
      thumbnail {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }      
      }
      resources {
        ...ListedResourceFragment2
      }
    }
  }
`;
