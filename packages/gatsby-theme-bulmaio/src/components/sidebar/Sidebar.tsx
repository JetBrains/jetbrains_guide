import React, { ReactNode } from 'react';

interface Sidebar {
  children: ReactNode;
}

const Sidebar: React.FC<Sidebar> = ({ children }) => (
  <aside className="bd-side bio-page-sidebar">{children}</aside>
);

export default Sidebar;
