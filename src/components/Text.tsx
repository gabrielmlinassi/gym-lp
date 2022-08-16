import React from 'react';
import { cnMerge } from 'utils/cn-merge';

type TextProps = {
  children: React.ReactNode;
  size?: 'base' | 'md' | 'lg' | 'xl' | '2xl';
  className?: string;
};

const s = {
  root: /*tw:*/ `font-proximaNova font-normal text-[#CCD4E2]`,
  sizes: {
    base: /*tw:*/ `text-base`, // 16px
    md: /*tw:*/ `text-xl leading-normal`, // 20px
    lg: /*tw:*/ `text-[22px] leading-normal`, // 22px
    xl: /*tw:*/ `text-2xl leading-normal`, // 24px
    '2xl': /*tw:*/ `text-[28px] leading-snug`, // 28px
  },
};

const Text = ({ children, size = 'xl', className }: TextProps) => {
  return <p className={cnMerge(s.root, s.sizes[size], className)}>{children}</p>;
};

export default Text;
