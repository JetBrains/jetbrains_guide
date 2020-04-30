import React, { FC } from 'react';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import ResourceCard from '../../components/resourcecard/ResourceCard';
import ReferenceLayout2 from '../../components/layout/ReferenceLayout2';
import { Author2Reference } from './models';

export interface AuthorProps {
  data: {
    author2: Author2Reference
  }
}

const Author: FC<AuthorProps> = (
  {
    data: {
      author2: { title, subtitle, body, thumbnail, resources }
    }
  }) => {

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
      ...ListedAuthor2Fragment
      resources {
        ...ListedResourceFragment2
      }
    }
  }
`;
