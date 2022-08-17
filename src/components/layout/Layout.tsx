import React from 'react';

import Container from 'components/container';
import Navbar from 'components/navbar';
import Footer from 'components/footer';

type LayoutProps = {
  children: React.ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <Container variant="outer">
      <Navbar />
      <main className="grow">{children}</main>
      <Footer />
    </Container>
  );
};

export default Layout;
