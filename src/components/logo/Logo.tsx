import React from 'react';
import NextImage from 'next/image';
import NextLink from 'next/link';

import LogoMark from '/public/logos/logo-mark.svg';
import LogoFull from '/public/logos/logo-full.svg';

type LogoProps = {
  variant?: 'mark' | 'full';
  noRedirect?: boolean;
};

const pathByVariant = {
  full: LogoFull,
  mark: LogoMark,
};

const s = {
  mark: /*tw:*/ `inline-block w-[44px] md:w-[72px]`,
  full: /*tw:*/ `inline-block w-[170px] md:w-[290px]`,
};

const Logo = ({ variant = 'mark', noRedirect }: LogoProps) => {
  const comp = (
    <div className={s[variant]}>
      <NextImage src={pathByVariant[variant]} />
    </div>
  );
  return noRedirect ? comp : <WithRedirect>{comp}</WithRedirect>;
};

const WithRedirect = ({ children }: { children: React.ReactNode }) => {
  return (
    <NextLink href="/">
      <a>{children}</a>
    </NextLink>
  );
};

export default Logo;
