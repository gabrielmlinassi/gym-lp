import Container from 'components/container';
import Logo from 'components/logo';

const Navbar = () => {
  return (
    <nav className="absolute left-0 right-0 flex h-24 items-center md:h-36">
      <Container variant="inner">
        <Logo variant="full" />
      </Container>
    </nav>
  );
};

export default Navbar;
