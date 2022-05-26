/*

A variation of the MasterLayout which makes lists entries.

 */

import * as React from 'react';
import SiteLayout from './SiteLayout';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { TwitterCardPage } from './MasterLayout';

interface ReferenceLayoutProps {
  pageTitle: string;
  subtitle?: string;
  bodyHtml?: string;
  children: {
    figure?: React.ReactNode;
    listing: React.ReactNode;
  };
  twitterCardPage?: TwitterCardPage;
}

const ReferenceLayout: React.FC<ReferenceLayoutProps> = ({
  pageTitle,
  subtitle,
  bodyHtml,
  children: { figure, listing },
  twitterCardPage,
}) => {
  return (
    <SiteLayout pageTitle={pageTitle} twitterCardPage={twitterCardPage}>
      <main className="bd-main bulmaio-body">
        <div className="bd-main-container container">
          <div className="bd-duo">
            <div className="bd-lead">
              <header className="bd-header">
                <article className="media">
                  {figure && <figure className="media-left">{figure}</figure>}
                  <div className="media-content">
                    <div className="content">
                      <div className="bd-header-titles">
                        <h1 className="title">{pageTitle}</h1>
                        {subtitle && (
                          <p className="subtitle is-4">{subtitle}</p>
                        )}
                      </div>
                    </div>
                  </div>
                </article>
              </header>

              {bodyHtml && (
                <div className="columns">
                  <div className="column is-three-quarters-desktop">
                    <div className="bd-content content">
                      <MDXRenderer>{bodyHtml}</MDXRenderer>
                    </div>
                  </div>
                </div>
              )}
              <div className="columns">
                <div className="column is-three-quarters-desktop bio-resourcecards">
                  {listing}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </SiteLayout>
  );
};

export default ReferenceLayout;
