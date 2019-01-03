import * as React from 'react';

export interface INavbarButtonProps {
    accent: string;
    href: string;
    label: string;
}

const NavbarButton: React.FunctionComponent<INavbarButtonProps> = ({accent, href, label}) => (
    <p className="control">
        <a className={`button is-${accent}`} href={href} target="_new">
            <strong>{label}</strong>
        </a>
    </p>
);

export default NavbarButton;
