/*

Support for Twitter Cards, meaning <meta> info that goes in the <head>

 */

export interface TwitterCardConfig {
  title: string;
  description: string;
  imageUrl: string;
}

export interface MetaValue {
  name: string;
  content: string;
}

const makeTwitterMeta = (twitterInfo: TwitterCardConfig): MetaValue[] => {
  return [
    { name: `twitter:card`, content: `summary_large_image` },
    { name: `twitter:site`, content: `summary_large_image` },
    { name: `twitter:creator`, content: `@PyCharm` },
    { name: `twitter:title`, content: twitterInfo.title },
    { name: `twitter:description`, content: twitterInfo.description },
    { name: `twitter:image`, content: twitterInfo.imageUrl }
  ];
};

export default makeTwitterMeta;
