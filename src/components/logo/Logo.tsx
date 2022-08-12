import NextImage from 'next/image';
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
      return <NextImage src={LogoMark} width={WidthBySize[size]} />;
    case 'full':
      return <NextImage src={LogoFull} />;
  }
};

export default Logo;
