import React, { FC } from 'react';
import { graphql } from 'gatsby';
import { Tip2Resource } from './models';
import ReferenceLayout2 from '../../components/layout/ReferenceLayout2';
import Img from 'gatsby-image';

export interface TipProps {
  data: {
    tip2: Tip2Resource
  }
}

const Tip2: FC<TipProps> = (
  {
    data: {
      tip2: { author2, body, title, subtitle, thumbnail, technologies2, topics2 }
    }
  }) => {
  return (
    <ReferenceLayout2 pageTitle={title} subtitle={subtitle} bodyHtml={body}>
      {{
        figure: (
          <div className="image is-96x96">
            <Img className="bio-resourcecard-logo" fluid={thumbnail.childImageSharp.fluid} />
          </div>
        ),
        listing: (
          <div>
            Hello
          </div>
        )
      }}
    </ReferenceLayout2>
  );
};

// noinspection JSUnusedGlobalSymbols
export default Tip2;

export const query = graphql`
  query($slug: String!) {
    tip2(slug: { eq: $slug }) {
      ...ListedTip2Fragment
    }
  }
`;
