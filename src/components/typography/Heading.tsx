import React from 'react';
import { cnMerge } from 'utils/cn-merge';

type HeadingProps = {
  variant: 'h1' | 'h2' | 'h3';
  className?: string;
  children: React.ReactNode;
};

const s = {
  root: /*tw:*/ `font-industry font-semibold uppercase text-white`,
  h1: /*tw:*/ `text-5xl md:text-[64px] leading-[1.08] text-[#F8F8F9]`,
  h2: /*tw:*/ `text-[32px] leading-tight md:text-5xl md:leading-[1.08]`,
  h3: /*tw:*/ `text-[22px] leading-snug md:text-[32px] md:leading-tight `,
};

const getComp = (variant: HeadingProps['variant']) => {
  switch (variant) {
    case 'h1':
      return 'h1';
    case 'h2':
      return 'h2';
    case 'h3':
      return 'h3';
  }
};

const Heading = ({ children, variant, className }: HeadingProps) => {
  const Comp = getComp(variant);
  const classes = cnMerge(s.root, s[variant], className);
  return <Comp className={classes}>{children}</Comp>;
};

export { Heading };
