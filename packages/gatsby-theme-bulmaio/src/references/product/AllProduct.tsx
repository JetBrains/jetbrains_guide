import React, { FC } from 'react';
import { graphql } from 'gatsby';
import ReferenceLayout from 'gatsby-theme-bulmaio/src/components/layout/ReferenceLayout';
import { PageContext } from '../../components/models';
import Pagination from '../../components/Pagination';
import { ProductReference } from './models';
import SubsectionProduct from '../../components/subsections/SubsectionProduct';

interface ProductsProps {
  data: {
    allProduct: {
      nodes: ProductReference[]
    }
  }
  pageContext: PageContext
}

const DEFAULT_LOGO = 'https://cdn.worldvectorlogo.com/logos/python-5.svg';
const PAGE_TITLE = 'Products';
const SUBTITLE = 'Jump to all available learning resources on specific products, such as libraries, languages, and frameworks.';

const AllProduct: FC<ProductsProps> = (
  {
    data: { allProduct: { nodes } },
    pageContext: { numPages }
  }
) => {
  const listing = nodes && (
    <nav className="bd-links bio-resourcecards">
      {nodes &&
      nodes.map(node => {
        const logo = node.logo ? node.logo.publicURL : DEFAULT_LOGO;
        return (
          <SubsectionProduct
            key={node.label}
            title={node.title}
            subtitle={node.subtitle}
            href={node.slug}
            logo={logo}
          />
        );
      })}
    </nav>
  );
  return (
    <ReferenceLayout
      pageTitle={PAGE_TITLE}
      subtitle={SUBTITLE}
    >
      {{
        listing: (
          <>
            {listing}
            <Pagination numPages={numPages} prefix={'products'} />
          </>
        )
      }}
    </ReferenceLayout>
  );
};

// noinspection JSUnusedGlobalSymbols
export default AllProduct;

export const query = graphql`
  query($skip: Int!, $limit: Int!) {
    allProduct(limit: $limit, skip: $skip, sort: {fields: [title]}) {
      nodes {
        ...ListedProductFragment
      }
    }
  }
`;
