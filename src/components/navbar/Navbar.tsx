import React, { useEffect, useState } from 'react';
import { signOut, useSession } from 'next-auth/react';
import cn from 'classnames';

import Button from 'components/button';
import Container from 'components/container';
import Logo from 'components/logo';
import { getViewer } from 'services/auth.service';

type NavbarProps = {
  absoluteNav?: boolean;
  userMenu?: boolean; //TODO: showUserMenu
  navContainer?: React.ComponentProps<typeof Container>['variant'];
};

const s = {
  root: /*tw:*/ `flex h-24 items-center md:h-36`,
  absolute: /*tw:*/ `absolute top-0 left-0 right-0 z-10`,
};

const Navbar = ({ absoluteNav, userMenu, navContainer = 'inner' }: NavbarProps) => {
  const { status } = useSession();

  return (
    <nav className={cn(s.root, [absoluteNav && s.absolute])}>
      <Container variant={navContainer}>
        <div className="flex w-full items-center justify-between">
          <Logo variant="full" />
          {userMenu && status == 'authenticated' && <UserMenu />}
        </div>
      </Container>
    </nav>
  );
};

const UserMenu = () => {
  const [me, setMe] = useState<Awaited<ReturnType<typeof getViewer>>['me']>();

  // TODO: Replace this by SWR?
  useEffect(() => {
    getViewer().then(({ me }) => {
      setMe(me);
    });
  }, []);

  return (
    <div className="flex-shrink-0">
      {me && (
        <span className="mr-5 hidden font-semibold text-gray-200 sm:inline-block">
          Logged in as <span className="text-white">{me.user.name}</span>
        </span>
      )}
      <Button
        variant="outlined"
        onClick={() => signOut({ callbackUrl: '/' })}
        className="px-6 py-2"
      >
        Sign out
      </Button>
    </div>
  );
};

export default Navbar;
