import React, { ComponentProps } from 'react';

import Container from 'components/container';
import Navbar from 'components/navbar';
import Footer from 'components/footer';

type LayoutProps = {
  children: React.ReactNode;
} & ComponentProps<typeof Navbar>;

const Layout = ({ children, absoluteNav }: LayoutProps) => {
  return (
    <Container variant="outer" className="flex min-h-screen flex-col">
      <Navbar absoluteNav={absoluteNav} />
      <main className="grow">{children}</main>
      <Footer />
    </Container>
  );
};

export default Layout;
