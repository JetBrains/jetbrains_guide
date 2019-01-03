import * as React from 'react';
import { Link } from 'gatsby';

const Footer: React.FunctionComponent = () => (
  <footer className="footer">
    <div className="container">
      <div className="bd-footer-links">
        <div className="columns">
          <div className="column is-3">
            <p className="bd-footer-link-title">
              <Link to={`/`}>Home</Link>
            </p>
            <p className="bd-footer-link-title">
              <Link to="/news/index.html">News</Link>
            </p>
            <p className="bd-footer-link">
              <Link to="/news/welcome_to_the_guide.html">Welcome to the Guide</Link>
            </p>
            <p className="bd-footer-link">
              <Link to="/1.html">Migrating to v0.7.0</Link>
            </p>
            <p className="bd-footer-link">
              <Link to="/1.html">Website redesign</Link>
            </p>
            <p className="bd-footer-link">
              <Link to="/1.html">Font Awesome 5</Link>
            </p>
            <p className="bd-footer-link bd-is-more">
              <Link to="/news/index.html">View all posts</Link>
            </p>
          </div>

          <div className="column is-3">
            <p className="bd-footer-link-title">
              <Link to="/documentation.html">Learn</Link>
            </p>
            <p className="bd-footer-link">
              <Link to="/learn/index.html">Overview</Link>
            </p>
            <p className="bd-footer-link">
              <Link to="/learn/author/index.html">Authors</Link>
            </p>
            <p className="bd-footer-link">
              <Link to="/learn/ide/index.html">IDEs</Link>
            </p>
            <p className="bd-footer-link">
              <Link to="/learn/resources/index.html">Resources</Link>
            </p>
            <p className="bd-footer-link">
              <Link to="/learn/technologies/index.html">Technologies</Link>
            </p>
            <p className="bd-footer-link">
              <Link to="/learn/topics/index.html">Topics</Link>
            </p>
          </div>

          <div className="column is-6">
            <p className="bd-footer-link-title">
              <Link to="/documentation.html">More</Link>
            </p>
            <p className="bd-footer-link bd-has-subtitle">
              <Link to="/1.html">
                <span className="bd-footer-link-icon has-text-star">
                  <i className="fas fa-star" />
                </span>
                <strong>Expo</strong>
                <em>Official Bulma showcase</em>
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
