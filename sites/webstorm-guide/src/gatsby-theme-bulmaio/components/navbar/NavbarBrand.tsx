import { Link } from 'gatsby';
import * as React from 'react';
// @ts-ignore
import Logo from './jetbrains-simple.svg';

export interface NavbarBrandProps {
  githubUrl: string;
  twitterUrl: string;
}

class NavbarBrand extends React.Component<NavbarBrandProps> {
  public toggleBurger = ({ currentTarget }: React.MouseEvent) => {
    // TODO Re-implement this as React, not plain JS
    const target = 'navMenuIndex';
    const $target = document.getElementById(target);
    if ($target) {
      currentTarget.classList.toggle('is-active');
      $target.classList.toggle('is-active');
    }
  };

  public render() {
    const { githubUrl, twitterUrl } = this.props;
    return (
      <div className="navbar-brand">
        <Link  data-testid={`navbarbrand-logo`} className="navbar-item bio-navbar-brand" to={`/`}>
          <img
                    src={Logo}
                    alt={`JetBrains Logo`}
                    role="presentation"
                    width="36"
                    height="36"
                    style={{ maxHeight: '4rem' }}
                  />
        </Link>
        <Link  className="navbar-item bio-navbar-brand" to={`/`} style={{paddingRight: '3rem'}}>
          WebStorm Guide
        </Link>

        <a data-testid={`navbarbrand-github`} className="navbar-item is-hidden-desktop bio-navbar-brand-github" href={githubUrl} target="_blank">
          <span className="icon">
            <i className="fab fa-lg fa-github-alt"/>
          </span>
        </a>

        <a data-testid={`navbarbrand-twitter`} className="navbar-item is-hidden-desktop bio-navbar-brand-twitter" href={twitterUrl} target="_blank">
          <span className="icon">
            <i className="fab fa-lg fa-twitter"/>
          </span>
        </a>

        <div id="navbarBurger" className="navbar-burger burger" onClick={this.toggleBurger}>
          <span/>
          <span/>
          <span/>
        </div>
      </div>
    );
  }
}

export default NavbarBrand;
