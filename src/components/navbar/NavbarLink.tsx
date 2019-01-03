import * as React from 'react';

export interface INavbarLinkProps {
    href: string;
    color: string;
    icon: string;
}

const NavbarLink: React.FunctionComponent<INavbarLinkProps> = ({href, color, icon}) => (
    <a className="navbar-item is-hidden-touch is-hidden-desktop-only" href={href} target="_blank">
        <span className="icon" style={{color: `#${color}`}}>
            <i className={`fab fa-lg fa-${icon}`}/>
        </span>
    </a>
);

export default NavbarLink;
