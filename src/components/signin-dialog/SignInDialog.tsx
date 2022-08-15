import React from 'react';
import { useRouter } from 'next/router';
import NextLink from 'next/link';
import Dialog from 'components/dialog';

import ButtonIcon from 'components/button-icon';
import { AppleIcon, FbIcon, GoogleIcon } from 'components/icons';
import SigninForm from 'components/signin-form';
import { Text } from 'components/typography';
import { SignInFormFields } from 'components/signin-form';

type DialogProps = {} & React.ComponentProps<typeof Dialog>;

const SignInDialog = ({ children, ...props }: DialogProps) => {
  const router = useRouter();

  const onSubmit = async (data: SignInFormFields) => {
    await new Promise((resolve) => setTimeout(resolve, 2000));
    console.log(data);
  };

  const isSignIn = router.asPath === '/signin';

  return (
    <Dialog {...props}>
      <Dialog.Trigger asChild>{children}</Dialog.Trigger>
      <Dialog.Content title={`${isSignIn ? 'Login' : 'Register'} with email`}>
        <SigninForm onSubmit={onSubmit} buttonLabel={isSignIn ? 'Log In' : 'Register'} />
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
      </Dialog.Content>
    </Dialog>
  );
};

export default SignInDialog;
