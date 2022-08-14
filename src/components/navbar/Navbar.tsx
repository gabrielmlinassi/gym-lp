import cn from 'classnames';

import Button from 'components/button';
import Container from 'components/container';
import Logo from 'components/logo';

type NavbarProps = {
  absolute?: boolean;
};

const s = {
  root: /*tw:*/ `flex h-24 items-center md:h-36`,
  absolute: /*tw:*/ `absolute top-0 left-0 right-0 z-10`,
};

const Navbar = ({ absolute }: NavbarProps) => {
  return (
    <nav className={cn(s.root, [absolute && s.absolute])}>
      <Container variant="inner">
        <div className="flex w-full items-center justify-between">
          <Logo variant="full" />
          <div className="flex-shrink-0">
            <span className="hidden font-semibold text-[#CCD4E2] sm:inline-block">
              Logged in as <span className="text-white">John Smith</span>
            </span>
            <Button variant="outlined">Sign out</Button>
          </div>
        </div>
      </Container>
    </nav>
  );
};

export default Navbar;
