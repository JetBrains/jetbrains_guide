import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import ReferenceLayout from 'gatsby-theme-bulmaio/src/components/layout/ReferenceLayout';
import SubsectionProduct from 'gatsby-theme-bulmaio/src/components/subsections/SubsectionProduct';

interface ProductsProps {
  allProductYaml: {
    nodes: {
      label: string;
      title: string;
      subtitle?: string;
      logo?: {
        publicURL: string
      };
    }[]
  }
}

const DEFAULT_LOGO = 'https://resources.jetbrains.com/storage/products/resharper/img/meta/resharper_logo_300x300.png';

export const Products = () => {
  const
    { allProductYaml: { nodes } }: ProductsProps = useStaticQuery(
      graphql`
  query {
    allProductYaml(limit: 1000) {
      nodes {
        label
        title
        subtitle
        logo {
          publicURL
        }
      }
    }
  }
`
    );
  return (
    <ReferenceLayout pageTitle={'Products'} subtitle={'Resources organized by product'}>
      {{
        listing: (
          <nav className="bd-links bio-resourcecards">
            {nodes &&
            nodes.map(node => {
              let logo = DEFAULT_LOGO;
              if (node.logo) {
                logo = node.logo.publicURL;
              }
              return (
                <SubsectionProduct
                  key={node.label}
                  title={node.title}
                  subtitle={node.subtitle}
                  href={`/products/${node.label}/`}
                  logo={logo}
                />
              );
            })}
          </nav>
        )
      }}
    </ReferenceLayout>
  );
};
