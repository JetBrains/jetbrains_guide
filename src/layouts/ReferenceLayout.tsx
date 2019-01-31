import React, { ReactNode } from 'react';
import BaseLayout from './BaseLayout';

import './index.scss';

// @ts-ignore

export interface IReferenceLayoutProps {
  title: string;
  subtitle?: string;
  bodyHtml?: string;
  children: {
    figure?: ReactNode;
    listing: ReactNode;
  };
}

const ReferenceLayout: React.FunctionComponent<IReferenceLayoutProps> = ({ title, subtitle, bodyHtml, children: { figure, listing } }) => {
  return (
    <BaseLayout title={title}>
      <main className="bd-main bulmaio-body">
        <div className="bd-main-container container">
          <header className="bd-header">
            <article className="media">
              {figure && <figure className="media-left">{figure}</figure>}
              <div className="media-content">
                <div className="content">
                  <div className="bd-header-titles">
                    <h1 className="title">{title}</h1>
                    {subtitle && <p className="subtitle is-4">{subtitle}</p>}
                  </div>
                </div>
              </div>
            </article>
          </header>

          {bodyHtml && (
            <div className="columns">
              <div className="column is-three-quarters-desktop">
                <div className="bd-content content" dangerouslySetInnerHTML={{ __html: bodyHtml }} />
              </div>
            </div>
          )}
          <div className="columns">
            <div className="column is-three-quarters-desktop bio-resourcecards">{listing}</div>
          </div>
        </div>
      </main>
    </BaseLayout>
  );
};
export default ReferenceLayout;
