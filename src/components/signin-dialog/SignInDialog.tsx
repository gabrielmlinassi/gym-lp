import React from 'react';
import * as DialogPrimitive from '@radix-ui/react-dialog';

type DialogProps = {} & React.ComponentProps<typeof DialogPrimitive.Root>;

const classes = {
  overlay: /*tw:*/ `absolute inset-0 bg-black bg-opacity-25 rdx-state-open:animate-fade-in rdx-state-closed:animate-fade-out`,
  content: /*tw:*/ `absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[600px] bg-white p-4 rounded-lg rdx-state-open:animate-fade-in rdx-state-closed:animate-fade-out`,
};

const SignInDialog = ({ children, ...props }: DialogProps) => {
  return (
    <DialogPrimitive.Root {...props}>
      <DialogPrimitive.Trigger asChild>{children}</DialogPrimitive.Trigger>
      <DialogPrimitive.Portal>
        <DialogPrimitive.Overlay className={classes.overlay} />
        <DialogPrimitive.Content className={classes.content}>
          <div className="flex items-center justify-between">
            <DialogPrimitive.Title>Title</DialogPrimitive.Title>
            <DialogPrimitive.Close>Close</DialogPrimitive.Close>
          </div>
          <DialogPrimitive.Description>Description</DialogPrimitive.Description>
        </DialogPrimitive.Content>
      </DialogPrimitive.Portal>
    </DialogPrimitive.Root>
  );
};

export default SignInDialog;
