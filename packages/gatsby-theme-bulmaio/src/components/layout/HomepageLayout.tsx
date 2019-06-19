/*

A variation of the MasterLayout which takes a hero and a main area
as children.

 */

import React from 'react';
import SiteLayout from './SiteLayout';

interface HomepageLayoutProps {
  title: string;
  children: {
    hero: React.ReactNode;
    main: React.ReactNode;
  };
}

const HomepageLayout: React.FC<HomepageLayoutProps> = ({ title, children: { hero, main } }) => {
  return (
    <SiteLayout pageTitle={title}>
      <div className="content">
        {hero}
        {main}
      </div>
    </SiteLayout>
  );
};

export default HomepageLayout;
