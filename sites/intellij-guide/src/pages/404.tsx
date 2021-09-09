import React from 'react';
import SiteLayout from 'gatsby-theme-bulmaio/src/components/layout/SiteLayout';

const NotFoundPage = () => (
  <SiteLayout pageTitle={`Not Found`}>
    <main className="bd-main bulmaio-body">
      <div className="bd-main-container container">
        <header className="bd-header">
          <article className="media">
            <div className="media-content">
              <div className="content">
                <div className="bd-header-titles">
                  <h1 className="title">
                    页面不存在
                  </h1>
                  <p className="subtitle is-4">
                    找不到你搜索的页面
                  </p>
                </div>
              </div>
            </div>
          </article>
        </header>
      </div>
    </main>
  </SiteLayout>
);

export default NotFoundPage;
