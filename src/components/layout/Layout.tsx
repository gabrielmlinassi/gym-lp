import React, { ComponentProps } from 'react';
import cn from 'classnames';

import Navbar from 'components/navbar';
import Footer from 'components/footer';

type LayoutProps = {
  children: React.ReactNode;
  marginFooter?: boolean;
} & ComponentProps<typeof Navbar>;

const Layout = ({
  children,
  absoluteNav,
  userMenu,
  marginFooter = true,
  navContainer,
}: LayoutProps) => {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar {...{ absoluteNav, userMenu, navContainer }} />
      <main className={cn('grow', [marginFooter && 'mb-8'])}>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
