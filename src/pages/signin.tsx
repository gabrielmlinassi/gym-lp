import type { NextPage } from 'next';

import SigninForm from 'components/signin-form';
import { Heading } from 'components/typography';

const SignInPage: NextPage = () => {
  return (
    <div className="mt-12">
      <div className="text-center">
        <Heading variant="h1">Log In</Heading>
      </div>
      <div className="mx-auto mt-6 max-w-[500px] rounded-3xl bg-[#1E2229] p-12">
        <SigninForm onSubmit={() => {}} buttonLabel="Log In" />
      </div>
    </div>
  );
};

export default SignInPage;
