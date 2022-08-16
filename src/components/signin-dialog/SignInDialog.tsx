import React from 'react';
import { useRouter } from 'next/router';

import Dialog from 'components/dialog';
import SigninForm from '@forms/signin-form';
import SignupForm from '@forms/signup-form';

type DialogProps = {} & React.ComponentProps<typeof Dialog>;

const SignInDialog = ({ children, ...props }: DialogProps) => {
  const router = useRouter();
  const isSignIn = router.asPath === '/signin';
  return (
    <Dialog {...props}>
      <Dialog.Trigger asChild>{children}</Dialog.Trigger>
      <Dialog.Content title={`${isSignIn ? 'Login' : 'Register'} with email`}>
        {isSignIn ? <SigninForm /> : <SignupForm />}
      </Dialog.Content>
    </Dialog>
  );
};

export default SignInDialog;
