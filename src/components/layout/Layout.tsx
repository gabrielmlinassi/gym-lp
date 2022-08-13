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
      <main className="pt-28 md:pt-36">{children}</main>
    </Container>
  );
};

export default Layout;

// <-- 1120px -->
//mx-auto max-w-[calc(1120px+32px)] px-4
