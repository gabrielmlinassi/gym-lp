import React from 'react';
import * as ToggleGroupPrimitive from '@radix-ui/react-toggle-group';

const s = {
  toggle: /*tw:*/ `bg-[#1E2229] p-2 inline-flex rounded-3xl`,
  toggleItem: /*tw:*/ `rounded-2xl py-3 px-6 text-white font-proximaNova rdx-state-on:bg-[#4A5465]`,
};

type ToggleGroupRootProps = {
  children: React.ReactNode;
} & React.ComponentProps<typeof ToggleGroupPrimitive.Root>;

const ToggleGroupRoot = ({ children, ...props }: ToggleGroupRootProps) => {
  return (
    <ToggleGroupPrimitive.Root className={s.toggle} {...props}>
      {children}
    </ToggleGroupPrimitive.Root>
  );
};

type ToggleGroupItemProps = {
  children: React.ReactNode;
} & React.ComponentProps<typeof ToggleGroupPrimitive.Item>;

const ToggleGroupItem = ({ children, ...props }: ToggleGroupItemProps) => {
  return (
    <ToggleGroupPrimitive.Item className={s.toggleItem} {...props}>
      {children}
    </ToggleGroupPrimitive.Item>
  );
};

ToggleGroupRoot.Item = ToggleGroupItem;
export default ToggleGroupRoot;
