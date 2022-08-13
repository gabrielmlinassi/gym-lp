import NextImage from 'next/image';
import NextLink from 'next/link';

import LogoMark from '/public/logos/logo-mark.svg';
import LogoFull from '/public/logos/logo-full.svg';

const WidthBySize = {
  sm: 44,
  base: 72,
};

type MarkOnly = {
  variant?: 'mark';
  size?: 'sm' | 'base';
};

type FullOnly = {
  variant?: 'full';
  size?: never;
};

type LogoProps = {} & (MarkOnly | FullOnly);

const Logo = ({ variant = 'mark', size = 'base' }: LogoProps) => {
  switch (variant) {
    case 'mark':
      return (
        <NextLink href="/">
          <a>
            <NextImage src={LogoMark} width={WidthBySize[size]} />
          </a>
        </NextLink>
      );
    case 'full':
      return (
        <NextLink href="/">
          <a>
            <NextImage src={LogoFull} />
          </a>
        </NextLink>
      );
  }
};

export default Logo;
