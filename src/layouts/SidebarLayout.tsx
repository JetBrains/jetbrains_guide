import React, { ReactNode } from 'react';
import Heading from '../components/Heading';
import BaseLayout from './BaseLayout';

import './index.scss';

// @ts-ignore

export interface ISidebarLayoutProps {
  title: string;
  subtitle?: string;
  children: {
    topNav?: ReactNode;
    sidebar?: ReactNode;
    main: ReactNode;
    bottomNav?: ReactNode;
  };
}

const SidebarLayout: React.FunctionComponent<ISidebarLayoutProps> = ({
  title,
  subtitle,
  children: { topNav, main, bottomNav, sidebar }
}) => (
  <BaseLayout title={title}>
    <main className="bd-main bulmaio-body">
      <div className="bd-side-background" />
      <div className="bd-main-container container">
        <div className="bd-duo">
          <div className="bd-lead">
            {topNav}
            <Heading title={title} subtitle={subtitle} />
            {main}
            {bottomNav}
          </div>
          {sidebar}
        </div>
      </div>
    </main>
  </BaseLayout>
);

export default SidebarLayout;
