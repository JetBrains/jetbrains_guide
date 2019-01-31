import * as React from 'react';
import BaseLayout from './BaseLayout';

interface IHomepageLayoutProps {
  title: string;
  children: {
    hero: React.ReactNode;
    main: React.ReactNode;
  };
}

const HomepageLayout: React.FunctionComponent<IHomepageLayoutProps> = ({ title, children: { hero, main } }) => (
  <BaseLayout title={title}>
    <div className="content">
      {hero}
      {main}
    </div>
  </BaseLayout>
);

export default HomepageLayout;
