import React from 'react';
import { cnMerge } from 'utils/cn-merge';

type ContainerProps = {
  variant: 'outer' | 'inner';
  border?: boolean;
  children: React.ReactNode;
};

const s = {
  outer: /*tw:*/ `mx-auto max-w-[1920px] w-full`,
  inner: /*tw:*/ `mx-auto max-w-[calc(1120px+32px)] w-full px-4`,
  border: /*tw:*/ `border-2 border-dashed border-yellow-500`,
};

const Container = ({ variant, border, children }: ContainerProps) => {
  return <div className={cnMerge(s[variant], [border && s.border])}>{children}</div>;
};

export default Container;
