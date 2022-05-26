/*

A variation of the MasterLayout which takes a hero and a main area
as children.

 */

import * as React from 'react';
import SiteLayout from './SiteLayout';
import { TwitterCardPage } from './MasterLayout';

interface HomepageLayoutProps {
  title: string;
  children: {
    hero: React.ReactNode;
    main: React.ReactNode;
  };
  twitterCardPage?: TwitterCardPage;
}

const HomepageLayout: React.FC<HomepageLayoutProps> = ({
  title,
  children: { hero, main },
  twitterCardPage,
}) => {
  return (
    <SiteLayout pageTitle={title} twitterCardPage={twitterCardPage}>
      <div className="content">
        {hero}
        {main}
      </div>
    </SiteLayout>
  );
};

export default HomepageLayout;
