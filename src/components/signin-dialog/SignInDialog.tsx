import React from 'react';
import { useRouter } from 'next/router';
import NextLink from 'next/link';
import * as DialogPrimitive from '@radix-ui/react-dialog';

import { XIcon } from 'components/icons';
import ButtonIcon from 'components/button-icon';
import { AppleIcon, FbIcon, GoogleIcon } from 'components/icons';
import SigninForm from 'components/signin-form';
import { Text } from 'components/typography';
import Button from 'components/button';
import Logo from 'components/logo';

type DialogProps = {} & React.ComponentProps<typeof DialogPrimitive.Root>;

const classes = {
  overlay: /*tw:*/ `fixed inset-0 bg-black bg-opacity-25 rdx-state-open:animate-fade-in rdx-state-closed:animate-fade-out`,
  content: /*tw:*/ `fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] bg-[#1E2229] pt-12 px-8 pb-14 rounded-3xl rdx-state-open:animate-fade-in rdx-state-closed:animate-fade-out`,
};

const SignInDialog = ({ children, ...props }: DialogProps) => {
  const router = useRouter();
  const isSignIn = router.asPath === '/signin';

  return (
    <DialogPrimitive.Root {...props}>
      <DialogPrimitive.Trigger asChild>{children}</DialogPrimitive.Trigger>
      <DialogPrimitive.Portal>
        <DialogPrimitive.Overlay className={classes.overlay} />
        <DialogPrimitive.Content className={classes.content}>
          <div className="relative">
            <DialogPrimitive.Title className="flex flex-col items-center font-industry text-[22px] font-semibold uppercase text-white">
              <Logo />
              {isSignIn ? 'Login' : 'Register'} with email
            </DialogPrimitive.Title>
            <div className="absolute top-0 right-0">
              <DialogPrimitive.Close asChild>
                <ButtonIcon variant="subtle" size="sm">
                  <XIcon className="h-full w-full" />
                </ButtonIcon>
              </DialogPrimitive.Close>
            </div>
            <div className="mt-6">
              <SigninForm
                actions={
                  <Button type="submit" color="primary" disabled={false} fullWidth>
                    {isSignIn ? 'Log In' : 'Register'}
                  </Button>
                }
              />
            </div>
            {/* separator */}
            <div className="mt-6">
              <div className="flex items-center gap-2">
                <hr className="w-full border-[#4A5465]" />
                <span className="font-industry text-white">OR</span>
                <hr className="w-full border-[#4A5465]" />
              </div>
            </div>
            {/* social icons */}
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
            {/*  */}
            <div className="mt-6 text-center">
              <Text size="sm" className="font-semibold text-white">
                {isSignIn ? 'Have an account?' : "Don't have an account?"}
              </Text>
              <NextLink href="" as={isSignIn ? '/signup' : '/signin'} shallow>
                <a>
                  <Text
                    size="sm"
                    className="mt-0.5 font-industry font-semibold uppercase text-[#FAA806]"
                  >
                    {isSignIn ? 'Register' : 'Log in'} here
                  </Text>
                </a>
              </NextLink>
            </div>
          </div>
        </DialogPrimitive.Content>
      </DialogPrimitive.Portal>
    </DialogPrimitive.Root>
  );
};

export default SignInDialog;
