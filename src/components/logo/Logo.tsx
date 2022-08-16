import React from 'react';
import NextImage from 'next/image';
import NextLink from 'next/link';

import LogoMark from '/public/logos/logo-mark.svg';
import LogoFull from '/public/logos/logo-full.svg';

type MarkOnly = {
  variant?: 'mark';
  size?: 'sm' | 'base';
};

type FullOnly = {
  variant?: 'full';
  size?: never;
};

type LogoProps = {
  noRedirect?: boolean;
} & (MarkOnly | FullOnly);

const WidthBySize = {
  sm: 44,
  base: 72,
};

const Logo = ({ variant = 'mark', size = 'base', noRedirect }: LogoProps) => {
  switch (variant) {
    case 'full': {
      const comp = <NextImage src={LogoFull} />;
      return noRedirect ? comp : <WithRedirect>{comp}</WithRedirect>;
    }
    case 'mark': {
      const comp = <NextImage src={LogoMark} width={WidthBySize[size]} />;
      return noRedirect ? comp : <WithRedirect>{comp}</WithRedirect>;
    }
  }
};

const WithRedirect = ({ children }: { children: React.ReactNode }) => {
  return (
    <NextLink href="/">
      <a>{children}</a>
    </NextLink>
  );
};

export default Logo;
