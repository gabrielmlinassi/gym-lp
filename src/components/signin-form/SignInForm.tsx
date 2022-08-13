import NextLink from 'next/link';

import Button from 'components/button';
import TextField from 'components/text-field';
import Checkbox from 'components/checkbox';

const SignInForm = () => {
  return (
    <form className="mt-6 space-y-4">
      <TextField name="fullName" label="Full Name" type="text" fullWidth />
      <TextField
        name="email"
        label="Email"
        type="email"
        autoComplete="username"
        placeholder="ie. john.doe@email.com"
        fullWidth
      />
      <TextField
        name="pwd"
        label="Password"
        type="password"
        autoComplete="current-password"
        fullWidth
      />
      <Checkbox
        id="terms"
        name="terms"
        label={
          <>
            I confirm I&apos;ve read and accept{' '}
            <NextLink href="/terms">
              <a className="text-[#FAA806]">terms &amp; conditions</a>
            </NextLink>
          </>
        }
      />
      <Button color="secondary" disabled fullWidth>
        Register
      </Button>
    </form>
  );
};

export default SignInForm;
