import React from 'react';
import NextImage from 'next/image';
import NextLink from 'next/link';
import { cnMerge } from 'utils/cn-merge';

import LogoMark from '/public/logos/logo-mark.svg';
import LogoFull from '/public/logos/logo-full.svg';

type LogoProps = {
  variant?: 'mark' | 'full';
  size?: 'onlySm' | 'onlyLg' | 'responsive';
  noRedirect?: boolean;
};

const pathByVariant = {
  full: LogoFull,
  mark: LogoMark,
};

const s = {
  root: /*tw:*/ `inline-block`,
  sizes: {
    'mark.responsive': /*tw:*/ `w-[44px] md:w-[72px]`,
    'mark.onlySm': /*tw:*/ `w-[44px] md:w-[44px]`,
    'mark.onlyLg': /*tw:*/ `w-[72px] md:w-[72px]`,
    'full.responsive': /*tw:*/ `w-[170px] md:w-[290px]`,
    'full.onlySm': /*tw:*/ `w-[170px] md:w-[170px]`,
    'full.onlyLg': /*tw:*/ `w-[290px] md:w-[290px]`,
  },
};

const Logo = ({ variant = 'mark', size = 'responsive', noRedirect }: LogoProps) => {
  const comp = (
    <div className={cnMerge(s.root, s.sizes[`${variant}.${size}`])}>
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
