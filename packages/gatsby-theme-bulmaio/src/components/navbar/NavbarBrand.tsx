import * as React from 'react';
// @ts-ignore
// import '../../../../guide-sass/NavBrand.scss';
import NavbarBrandLogo from './NavbarBrandLogo';

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
    return (
      <div className="navbar-brand">
        <NavbarBrandLogo/>

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
