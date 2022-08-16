import type { NextPage } from 'next';

import SigninForm from 'components/forms/signin-form';
import { Heading } from 'components/typography';
import Container from 'components/container';

const SignInPage: NextPage = () => {
  return (
    <Container variant="inner">
      <div className="my-12">
        <div className="mx-auto mt-6 max-w-[500px] rounded-3xl bg-[#1E2229] py-12 px-8">
          <div className="mb-10 text-center">
            <Heading variant="h1">Log In</Heading>
          </div>
          <SigninForm shallowRouting={false} />
        </div>
      </div>
    </Container>
  );
};

export default SignInPage;
