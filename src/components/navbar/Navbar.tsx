import cn from 'classnames';
import Button from 'components/button';
import Container from 'components/container';
import Logo from 'components/logo';
import React from 'react';

type NavbarProps = {
  absoluteNav?: boolean;
  userMenu?: boolean;
  navContainer?: React.ComponentProps<typeof Container>['variant'];
};

const s = {
  root: /*tw:*/ `flex h-24 items-center md:h-36`,
  absolute: /*tw:*/ `absolute top-0 left-0 right-0 z-10`,
};

const Navbar = ({ absoluteNav, userMenu, navContainer = 'inner' }: NavbarProps) => {
  return (
    <nav className={cn(s.root, [absoluteNav && s.absolute])}>
      <Container variant={navContainer}>
        <div className="flex w-full items-center justify-between">
          <Logo variant="full" />
          {userMenu && (
            <div className="flex-shrink-0">
              <span className="mr-5 hidden font-semibold text-[#CCD4E2] sm:inline-block">
                Logged in as <span className="text-white">John Smith</span>
              </span>
              <Button variant="outlined" className="px-6 py-2">
                Sign out
              </Button>
            </div>
          )}
        </div>
      </Container>
    </nav>
  );
};

export default Navbar;
