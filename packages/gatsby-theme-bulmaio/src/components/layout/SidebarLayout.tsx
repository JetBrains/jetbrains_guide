/*

A variation of the MasterLayout which makes a sidebar.

 */

import * as React from 'react';
// @ts-ignore
import { MDXProvider } from '@mdx-js/react';

import SiteLayout from './SiteLayout';
import Heading from '../heading/Heading';
import { TwitterCardPage } from './MasterLayout';
import CodeBlock from '../../common/CodeBlock';

const components = {
  pre: (props: any) => <div {...props} style={{ marginBottom: '1rem' }} />,
  code: CodeBlock,
};

interface SidebarLayoutProps {
  pageTitle: string;
  subtitle?: string;
  twitterCardPage?: TwitterCardPage;
  children: {
    topNav?: React.ReactNode;
    sidebar?: React.ReactNode;
    main: React.ReactNode;
    bottomNav?: React.ReactNode;
  };
}

const SidebarLayout: React.FC<SidebarLayoutProps> = ({
  pageTitle,
  subtitle,
  twitterCardPage,
  children: { topNav, main, bottomNav, sidebar },
}) => {
  return (
    <MDXProvider components={components}>
      <SiteLayout pageTitle={pageTitle} twitterCardPage={twitterCardPage}>
        <main className="bd-main bulmaio-body">
          <div className="bd-side-background" />
          <div className="bd-main-container container">
            <div className="bd-duo">
              <div className="bd-lead">
                {topNav}
                <Heading title={pageTitle} subtitle={subtitle} />
                {main}
                {bottomNav}
              </div>
              {sidebar}
            </div>
          </div>
        </main>
      </SiteLayout>
    </MDXProvider>
  );
};

export default SidebarLayout;
