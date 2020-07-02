import * as React from 'react';
import { useState } from 'react';
import { Search } from '../search/Search';

import './NavbarSearch.scss';

export interface NavbarSearchProps {
}

const NavbarSearch: React.FC<NavbarSearchProps> = () => {
  const [isSearchVisible, setSearchVisible] = useState(false);

  // noinspection JSUnusedLocalSymbols
  // const orig = (
  //   <div className="navbar-end">
  //     {links && links.map(link => <NavbarLink key={link.href} {...link} />)}
  //     {buttons && buttons.filter(button => button.label != 'Skip').map(button => <NavbarButton
  //       key={button.href} {...button} />)}
  //   </div>
  // );

  return (
    <div className="navbar-item navbar-search">
      <div className="control">
        <div className={'dropdown is-right' + (!isSearchVisible ? '' : ' is-active')}>
          <div className="dropdown-trigger">
            <button className="button is-black" aria-haspopup="true" aria-controls="search-menu"
                    onClick={() => setSearchVisible(!isSearchVisible)}>
              <span className="icon">
                <i className="fas fa-search" aria-hidden="true" />
              </span>
            </button>
          </div>
          <div className="dropdown-menu" id="search-menu" role="menu">
            <div className="dropdown-content">
              <Search limit={10} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavbarSearch;
