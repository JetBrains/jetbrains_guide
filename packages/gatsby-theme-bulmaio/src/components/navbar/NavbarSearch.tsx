import * as React from 'react';
import { useState, useEffect, useRef } from 'react';
import { Search } from '../search/Search';

// import '../../../../guide-sass/NavbarSearch.scss';

export interface NavbarSearchProps {
}

const NavbarSearch : React.FC<NavbarSearchProps> = () => {
  const ref = useRef(null);

  const [isSearchVisible, setSearchVisible] = useState(false);

  useEffect(() => {
    const clickListener  = (e: MouseEvent) => {
      if (!(ref.current! as any).contains(e.target))
        setSearchVisible(false);
    };

    const escapeListener = (e: KeyboardEvent) => {
      if (e.key === 'Escape')
        setSearchVisible(false);
      };

    document.addEventListener("mousedown", clickListener );
    document.addEventListener('keyup', escapeListener);

    return () => {
      document.removeEventListener("mousedown", clickListener );
      document.removeEventListener('keyup', escapeListener);
    };
  }, [ref.current]);

  return (
    <div className="navbar-item navbar-search">
      <div className="control" ref={ref}>
        <div className={'dropdown ' + (!isSearchVisible ? '' : ' is-active')}>
          <div className="dropdown-trigger">
            <button className="button is-black" aria-haspopup="true" aria-controls="search-menu"
                    onClick={() => {
                      setSearchVisible(!isSearchVisible);
                    }}>
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
