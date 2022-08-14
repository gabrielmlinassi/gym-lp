import React from 'react';
import Container from 'components/container';
import Navbar from 'components/navbar';

type LayoutProps = {
  children: React.ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <Container variant="outer">
      <Navbar />
      <main>{children}</main>
    </Container>
  );
};

export default Layout;
