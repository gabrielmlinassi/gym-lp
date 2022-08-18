import React from 'react';
import { cnMerge } from 'utils/cn-merge';

type ContainerProps = {
  variant: 'outer' | 'inner' | 'hero';
  border?: boolean;
  children: React.ReactNode;
  className?: string;
};

const s = {
  outer: /*tw:*/ `mx-auto max-w-[1920px] w-full`,
  inner: /*tw:*/ `mx-auto max-w-[calc(1120px+48px)] w-full px-6`,
  hero: /*tw:*/ `mx-auto max-w-[calc(1180px+48px)] w-full px-6`,
  border: /*tw:*/ `border-2 border-dashed border-yellow-500`,
};

const Container = ({ variant, border, className, children }: ContainerProps) => {
  return (
    <div className={cnMerge(s[variant], [border && s.border], className)}>{children}</div>
  );
};

export default Container;
