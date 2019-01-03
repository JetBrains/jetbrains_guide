import { Link } from 'gatsby';
import * as React from 'react';
// @ts-ignore
import logo from './PyCharm_Logo.svg.png';

export interface INavbarBrandProps {
  github_url: string;
  logo_alt: string;
  twitter_url: string;
}

class NavbarBrand extends React.Component<INavbarBrandProps> {
  public toggleBurger = ({ currentTarget }: React.MouseEvent) => {
    const target = 'navMenuIndex';
    const $target = document.getElementById(target);
    if ($target) {
      currentTarget.classList.toggle('is-active');
      $target.classList.toggle('is-active');
    }
  };

  public render() {
    const { github_url, logo_alt, twitter_url } = this.props;
    return (
      <div className="navbar-brand">
        <Link className="navbar-item bio-navbar-brand" to={`/`}>
          <img src={logo} className="bio-navbar-logo-image" alt={logo_alt} height="28" />
        </Link>
        <Link className="navbar-item is-hidden-desktop bio-navbar-brand-github" to={github_url} target="_blank">
          <span className="icon" style={{ color: '#333' }}>
            <i className="fab fa-lg fa-github-alt" />
          </span>
        </Link>

        <Link className="navbar-item is-hidden-desktop bio-navbar-brand-twitter" to={twitter_url} target="_blank">
          <span className="icon" style={{ color: '#55acee' }}>
            <i className="fab fa-lg fa-twitter" />
          </span>
        </Link>

        <div id="navbarBurger" className="navbar-burger burger" onClick={this.toggleBurger}>
          <span />
          <span />
          <span />
        </div>
      </div>
    );
  }
}

export default NavbarBrand;
