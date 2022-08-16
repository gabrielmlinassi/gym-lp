import NextLink from 'next/link';
import Container from 'components/container';
import Text from 'components/Text';

const Footer = () => {
  return (
    <Container variant="inner">
      <footer className="flex flex-col items-center justify-between gap-3 py-8 sm:flex-row sm:gap-0">
        <Text size="base">
          © Copyright 2022 • Built by{' '}
          <a
            href="https://linkedin.com/in/gabriellinassi"
            target="_blank"
            rel="noreferrer"
            className="text-white"
          >
            GarageStrength
          </a>
        </Text>
        <div className="flex items-center gap-8 text-white">
          <NextLink href="/terms">
            <a className="font-proximaNova">Terms of Service</a>
          </NextLink>
          <NextLink href="/policy">
            <a className="font-proximaNova">Privacy Policy</a>
          </NextLink>
        </div>
      </footer>
    </Container>
  );
};

export default Footer;
