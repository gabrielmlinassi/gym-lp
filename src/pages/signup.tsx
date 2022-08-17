import { NextPage } from 'next';
import SignupForm from '@forms/signup-form';
import Logo from 'components/logo';

const SignInPage: NextPage = () => {
  return (
    <div className="flex h-screen items-center">
      <div className="mx-auto h-screen max-w-[500px] bg-[#1E2229] py-12 px-8 sm:h-auto sm:rounded-3xl">
        <div className="mb-8 text-center">
          <Logo />
          <h4>Register with email</h4>
        </div>
        <SignupForm samePageRouting={false} autoFocus={false} />
      </div>
    </div>
  );
};

export default SignInPage;
