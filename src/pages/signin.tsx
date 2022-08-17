import type { NextPage } from 'next';
import SigninForm from '@forms/signin-form';
import Logo from 'components/logo';

const SignInPage: NextPage = () => {
  return (
    <div className="flex h-screen items-center">
      <div className="mx-auto h-screen max-w-[500px] bg-[#1E2229] py-12 px-8 sm:h-auto sm:rounded-3xl">
        <div className="mb-8 text-center">
          <Logo />
          <h4>Log in with email</h4>
        </div>
        <SigninForm samePageRouting={false} autoFocus={false} />
      </div>
    </div>
  );
};

export default SignInPage;
