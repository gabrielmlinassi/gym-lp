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

const ButtonIcon = ({ children, asChild, ...props }: ButttonIconProps) => {
  const Comp = asChild ? Slot : 'button';
  return (
    <Comp
      className="flex h-12 w-12 items-center justify-center rounded-lg border border-[#4A5465] bg-[#252932]"
      {...props}
    >
      {children}
    </Comp>
  );
};

export default ButtonIcon;
