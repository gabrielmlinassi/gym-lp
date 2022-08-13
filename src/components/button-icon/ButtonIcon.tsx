import React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cnMerge } from 'utils/cn-merge';

type AsButton = {
  asChild?: false;
} & React.ComponentPropsWithoutRef<'button'>;

type AsSlot = {
  asChild?: true;
};

type ButttonIconProps = {
  children: React.ReactNode;
  variant?: 'filled' | 'subtle';
  size?: 'base' | 'sm';
} & (AsButton | AsSlot);

const classes = {
  root: /*tw:*/ `flex items-center justify-center p-1.5 rounded-lg`,
  sizes: {
    base: /*tw:*/ `h-12 w-12`,
    sm: /*tw:*/ `h-7 w-7`,
  },
  variants: {
    filled: /*tw:*/ `bg-[#252932] border border-[#4A5465] hover:bg-black hover:bg-opacity-5`,
    subtle: /*tw:*/ `hover:bg-black hover:bg-opacity-10`,
  },
};

const ButtonIcon = React.forwardRef<any, ButttonIconProps>(
  ({ children, variant = 'filled', size = 'base', asChild, ...props }, forwardedRef) => {
    const Comp = asChild ? Slot : 'button';
    return (
      <Comp
        ref={forwardedRef}
        className={cnMerge(classes.root, classes.variants[variant], classes.sizes[size])}
        {...props}
      >
        {children}
      </Comp>
    );
  }
);

ButtonIcon.displayName = 'ButtonIcon';
export default ButtonIcon;
