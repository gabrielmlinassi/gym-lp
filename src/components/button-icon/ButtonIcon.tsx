import React from 'react';
import { Slot } from '@radix-ui/react-slot';

type AsButton = {
  asChild?: false;
} & React.ComponentPropsWithoutRef<'button'>;

type AsSlot = {
  asChild?: true;
};

type ButttonIconProps = {
  children: React.ReactNode;
} & (AsButton | AsSlot);

const ButtonIcon = React.forwardRef<any, ButttonIconProps>(
  ({ children, asChild, ...props }, forwardedRef) => {
    const Comp = asChild ? Slot : 'button';
    return (
      <Comp
        ref={forwardedRef}
        className="flex h-12 w-12 items-center justify-center rounded-lg border border-[#4A5465] bg-[#252932]"
        {...props}
      >
        {children}
      </Comp>
    );
  }
);

ButtonIcon.displayName = 'ButtonIcon';
export default ButtonIcon;
