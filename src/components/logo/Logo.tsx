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

type LogoProps = {
  noRedirect?: boolean;
} & (MarkOnly | FullOnly);

const getComp = (variant: LogoProps['variant'], size: LogoProps['size']) => {
  switch (variant) {
    case 'full':
      return <NextImage src={LogoFull} />;
    case 'mark':
      return <NextImage src={LogoMark} width={WidthBySize[size!]} />;
    default:
      return null;
  }
};

const Logo = ({ variant = 'mark', size = 'base', noRedirect }: LogoProps) => {
  const Comp = getComp(variant, size);

  if (noRedirect) return Comp;

  return (
    <NextLink href="/">
      <a>{Comp}</a>
    </NextLink>
  );
};

export default Logo;
