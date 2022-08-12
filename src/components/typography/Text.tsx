import React from 'react';
import { cnMerge } from 'utils/cn-merge';

type TextProps = {
  children: React.ReactNode;
  size?: 'sm' | 'md' | 'base' | 'lg';
  className?: string;
};

const s = {
  root: /*tw:*/ `font-proximaNova font-normal text-[#CCD4E2]`,
  sizes: {
    sm: /*tw:*/ `text-base`, // 16px
    md: /*tw:*/ `text-xl leading-normal`, // 20px
    base: /*tw:*/ `text-2xl leading-normal`, // 24px
    lg: /*tw:*/ `text-[28px] leading-snug`, // 28px
  },
};

const Text = ({ children, size = 'base', className }: TextProps) => {
  return <p className={cnMerge(s.root, s.sizes[size], className)}>{children}</p>;
};

export { Text };
