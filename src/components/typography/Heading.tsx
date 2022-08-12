import React from 'react';
import { cnMerge } from 'utils/cn-merge';

type HeadingProps = {
  variant: 'h1' | 'h2' | 'h3';
  className?: string;
  children: React.ReactNode;
};

const s = {
  root: /*tw:*/ `font-industry font-semibold uppercase leading-none`,
  h1: /*tw:*/ `text-[64px] text-[#F8F8F9]`,
  h2: /*tw:*/ `text-5xl text-white`,
  h3: /*tw:*/ `text-[32px] text-white`,
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
