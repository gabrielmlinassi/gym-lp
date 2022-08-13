import React from 'react';
import NextLink from 'next/link';
import * as DialogPrimitive from '@radix-ui/react-dialog';

import { XIcon } from 'components/icons';
import ButtonIcon from 'components/button-icon';
import { AppleIcon, FbIcon, GoogleIcon } from 'components/icons';
import SigninForm from 'components/signin-form';

type DialogProps = {} & React.ComponentProps<typeof DialogPrimitive.Root>;

const classes = {
  overlay: /*tw:*/ `fixed inset-0 bg-black bg-opacity-25 rdx-state-open:animate-fade-in rdx-state-closed:animate-fade-out`,
  content: /*tw:*/ `fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] bg-[#1E2229] p-12 rounded-3xl rdx-state-open:animate-fade-in rdx-state-closed:animate-fade-out`,
};

const SignInDialog = ({ children, ...props }: DialogProps) => {
  return (
    <DialogPrimitive.Root {...props}>
      <DialogPrimitive.Trigger asChild>{children}</DialogPrimitive.Trigger>
      <DialogPrimitive.Portal>
        <DialogPrimitive.Overlay className={classes.overlay} />
        <DialogPrimitive.Content className={classes.content}>
          <div className="relative">
            <DialogPrimitive.Title className="text-center font-industry text-[22px] font-semibold uppercase text-white">
              Register with email
            </DialogPrimitive.Title>
            <div className="absolute top-0 right-0 translate-x-full">
              <DialogPrimitive.Close asChild>
                <ButtonIcon variant="subtle" size="sm">
                  <XIcon className="h-full w-full" />
                </ButtonIcon>
              </DialogPrimitive.Close>
            </div>
            <SigninForm />
            <div className="mt-6">
              <div className="flex items-center gap-2">
                <hr className="w-full border-[#4A5465]" />
                <span className="font-industry text-white">OR</span>
                <hr className="w-full border-[#4A5465]" />
              </div>
              <div className="mt-6 flex items-center justify-center gap-4">
                <NextLink href="/account" passHref>
                  <ButtonIcon asChild>
                    <a>
                      <AppleIcon />
                    </a>
                  </ButtonIcon>
                </NextLink>
                <ButtonIcon asChild>
                  <a>
                    <FbIcon />
                  </a>
                </ButtonIcon>
                <ButtonIcon>
                  <GoogleIcon />
                </ButtonIcon>
              </div>
            </div>
          </div>
        </DialogPrimitive.Content>
      </DialogPrimitive.Portal>
    </DialogPrimitive.Root>
  );
};

export default SignInDialog;
