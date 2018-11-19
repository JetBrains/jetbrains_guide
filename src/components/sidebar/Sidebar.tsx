import React, { ReactNode } from 'react';

interface ISidebarProps {
  children: ReactNode;
}

const Sidebar: React.SFC<ISidebarProps> = ({ children }) => <aside className="bd-side bio-page-sidebar">{children}</aside>;

export default Sidebar;
