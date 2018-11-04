import * as React from 'react';
import { GITHUB_URL, LOGO_ALT, TWITTER_URL } from './constants';
// @ts-ignore
import logo from './PyCharm_Logo.svg.png';
import { Link } from 'gatsby';

export interface INavbarBrandProps {
}

class NavbarBrand extends React.Component<INavbarBrandProps> {

  toggleBurger = ({currentTarget}: React.MouseEvent) => {
    const target = 'navMenuIndex';
    const $target = document.getElementById(target);
    if ($target) {
      currentTarget.classList.toggle('is-active');
      $target.classList.toggle('is-active');
    }
  };

  render() {
    return (
      <div className="navbar-brand">
        <Link className="navbar-item bio-navbar-brand"
              to={`/`}>
          <img src={logo} className="bio-navbar-logo-image"
               alt={LOGO_ALT} height="28"/>
        </Link>
        <Link className="navbar-item is-hidden-desktop bio-navbar-brand-github"
              to={GITHUB_URL} target="_blank">
          <span className="icon" style={{ color: '#333' }}>
            <i className="fab fa-lg fa-github-alt"/>
          </span>
        </Link>

        <Link className="navbar-item is-hidden-desktop bio-navbar-brand-twitter"
              to={TWITTER_URL} target="_blank">
          <span className="icon" style={{ color: '#55acee' }}>
            <i className="fab fa-lg fa-twitter"/>
          </span>
        </Link>

        <div id="navbarBurger" className="navbar-burger burger"
             onClick={this.toggleBurger}>
          <span/>
          <span/>
          <span/>
        </div>
      </div>
    );
  }
}

export default NavbarBrand;