import React, { FC } from 'react';
import { graphql } from 'gatsby';
import { Tip2Resource } from './models';
// @ts-ignore
// noinspection ES6UnusedImports
import { SeeAlso } from '../../components2/seealso';
import SidebarLayout from '../../components/layout/SidebarLayout';
import { TwitterCardPage } from '../../components/layout/MasterLayout';

export interface TipProps {
  location: {
    search: string;
  };
  data: {
    tip2: Tip2Resource
  }
}

const Tip2: FC<TipProps> = (
  {
    location,
    data: {
      tip2
    }
  }) => {

  const twitterCardPage: TwitterCardPage = {
    title: tip2.title,
    description: tip2.subtitle ? tip2.subtitle : '',
    image: tip2.cardThumbnail ? `https://www.jetbrains.com${tip2.cardThumbnail.publicURL}` : ''
  };

  const main = <div>xx</div>
  return (
    <SidebarLayout
      pageTitle={tip2.title}
      subtitle={tip2.subtitle}
      twitterCardPage={twitterCardPage}>
      {{
        // topNav,
        // bottomNav,
        // sidebar,
        main
      }}
    </SidebarLayout>
  )
  // return (
  //   <ReferenceLayout2 pageTitle={'title'} subtitle={'subtitle'} bodyHtml={'body'}>
  //     {{
  //       figure: (
  //         <div className="image is-96x96">
  //           xxx
  //         </div>
  //       ),
  //       listing: (
  //         <div>
  //           Hello
  //         </div>
  //       )
  //     }}
  //   </ReferenceLayout2>
  // );
};

// noinspection JSUnusedGlobalSymbols
export default Tip2;

export const query = graphql`
  query($slug: String!) {
    tip2(slug: { eq: $slug }) {
      label
      slug
      title
      subtitle
      slug
      date(formatString: "MMMM Do, YYYY")
      author2 {
        ...ListedAuthor2Fragment
      }
      cardThumbnail {
        publicURL
      }
      date(formatString: "MMMM Do, YYYY")
      animatedGif {
        file {
            publicURL
        }
        width
        height
      }
      shortVideo {
        ...VideoFragment
      }
      longVideo {
        ...VideoFragment
      }
      leadin
      author2 {
        ...ListedAuthor2Fragment
      }      
    }
  }
`;
