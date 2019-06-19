/*

A variation of the MasterLayout which makes lists entries.

 */

import React from 'react';
import SiteLayout from './SiteLayout';

interface ReferenceLayoutProps {
  pageTitle: string;
  subtitle?: string;
  bodyHtml?: string;
  children: {
    figure?: React.ReactNode;
    listing: React.ReactNode;
  };
}

const ReferenceLayout: React.FC<ReferenceLayoutProps> = (
  {
    pageTitle,
    subtitle,
    bodyHtml,
    children: { figure, listing }

  }) => {
  return (
    <SiteLayout pageTitle={pageTitle}>
      <main className="bd-main bulmaio-body">
        <div className="bd-main-container container">
          <header className="bd-header">
            <article className="media">
              {figure && <figure className="media-left">{figure}</figure>}
              <div className="media-content">
                <div className="content">
                  <div className="bd-header-titles">
                    <h1 className="title">{pageTitle}</h1>
                    {subtitle && <p className="subtitle is-4">{subtitle}</p>}
                  </div>
                </div>
              </div>
            </article>
          </header>

          {bodyHtml && (
            <div className="columns">
              <div className="column is-three-quarters-desktop">
                <div className="bd-content content" dangerouslySetInnerHTML={{ __html: bodyHtml }}/>
              </div>
            </div>
          )}
          <div className="columns">
            <div className="column is-three-quarters-desktop bio-resourcecards">{listing}</div>
          </div>
        </div>
      </main>
    </SiteLayout>
  );
};

export default ReferenceLayout;
