/*

A variation of the MasterLayout which makes a sidebar.

 */

import React from 'react';
import SiteLayout from './SiteLayout';
import { TwitterCardConfig } from '../../common/TwitterCard';
import Heading from '../heading/Heading';

interface SidebarLayoutProps {
  pageTitle: string;
  subtitle?: string;
  twitterCard?: TwitterCardConfig
  children: {
    topNav?: React.ReactNode;
    sidebar?: React.ReactNode;
    main: React.ReactNode;
    bottomNav?: React.ReactNode;
  };
}

const SidebarLayout: React.FC<SidebarLayoutProps> = (
  {
    pageTitle,
    subtitle,
    twitterCard,
    children: { topNav, main, bottomNav, sidebar }

  }) => {
  return (
    <SiteLayout pageTitle={pageTitle}>
      <main className="bd-main bulmaio-body">
        <div className="bd-side-background"/>
        <div className="bd-main-container container">
          <div className="bd-duo">
            <div className="bd-lead">
              {topNav}
              <Heading title={pageTitle} subtitle={subtitle}/>
              {main}
              {bottomNav}
            </div>
            {sidebar}
          </div>
        </div>
      </main>
    </SiteLayout>
  );
};

export default SidebarLayout;
