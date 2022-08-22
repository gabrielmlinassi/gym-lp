import React from 'react';
import { cnMerge } from 'utils/cn-merge';

type TextProps = {
  children: React.ReactNode;
  size?: 'base' | 'md' | 'lg' | 'xl' | '2xl';
  className?: string;
};

const s = {
  root: /*tw:*/ `font-proximaNova font-normal text-gray-200`,
  sizes: {
    base: /*tw:*/ `text-base`, // 16px
    md: /*tw:*/ `text-base leading-snug sm:text-xl sm:leading-normal`, // 20px
    lg: /*tw:*/ `text-[22px] leading-normal`, // 22px
    xl: /*tw:*/ `text-2xl leading-normal`, // 24px
    '2xl': /*tw:*/ `text-xl leading-normal sm:text-2.5xl sm:leading-snug`, // 20->28
  },
};

const Text = ({ children, size = 'xl', className }: TextProps) => {
  return <p className={cnMerge(s.root, s.sizes[size], className)}>{children}</p>;
};

export default Text;
