import type { NextPage } from 'next';

import Container from 'components/container';
import SignupForm from '@forms/signup-form';

const SignInPage: NextPage = () => {
  return (
    <Container variant="inner">
      <div className="my-12">
        <div className="mx-auto max-w-[500px] rounded-3xl bg-[#1E2229] py-12 px-8">
          <div className="mb-10 text-center">
            <h1>Register</h1>
          </div>
          <SignupForm shallowRouting={false} />
        </div>
      </div>
    </Container>
  );
};

export default SignInPage;
