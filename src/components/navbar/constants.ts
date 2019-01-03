import { INavbarProps } from './Navbar';
import { INavbarBrandProps } from './NavbarBrand';
import { INavbarEndProps } from './NavbarEnd';
import { INavbarMenuItemProps } from './NavbarMenuItem';
import { INavbarStartProps } from './NavbarStart';
import { INavbarSubMenuProps } from './NavbarSubMenu';

export const BRAND: INavbarBrandProps = {
    github_url: '/github',
    logo_alt: 'Logo',
    twitter_url: '/twitter'
};

export const LINKS = [
    {
        color: 'light',
        href: 'https://github.com/jetbrains/pycharm_guide',
        icon: 'github'
    },
    {
        color: '55acee',
        href: 'https://twitter.com/pycharm',
        icon: 'twitter'
    }
];

export const BUTTONS = [
    {
        accent: 'light',
        href: 'https://www.jetbrains.com/pycharm/download/',
        label: 'Get PyCharm'
    }
];

export const MENUITEM1: INavbarMenuItemProps = {
    accent: 'primary',
    css_class: 'documentation',
    href: 'href1',
    icon: 'book',
    label: 'Learn'
};

export const MENUITEM2: INavbarMenuItemProps = {
    accent: 'rss',
    css_class: 'blog',
    href: 'href2',
    icon: 'rss',
    label: 'News'
};

export const MORE_SUBMENU: INavbarSubMenuProps = {
    href: '/more',
    items: [
        {
            accent: 'success',
            description: 'The PyCharm Guide is a community-driven compendium of PyCharm learning resources.',
            href: 'about',
            icon: 'rocket',
            label: 'About the Guide'
        }
    ],
    label: 'More'
};

export const START: INavbarStartProps = {items: [MENUITEM1, MENUITEM2, MORE_SUBMENU]};
export const END: INavbarEndProps = {links: LINKS, buttons: BUTTONS};
export const NAVBAR: INavbarProps = {brand: BRAND, start: START, end: END};
