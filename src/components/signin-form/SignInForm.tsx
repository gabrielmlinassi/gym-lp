import React from 'react';
import NextLink from 'next/link';

import TextField from 'components/text-field';
import Checkbox from 'components/checkbox';

type SignInFormProps = {
  /** Elements rendered below the form. Usually action Buttons */
  actions: React.ReactNode;
};

const SignInForm = ({ actions }: SignInFormProps) => {
  return (
    <form className="space-y-4">
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
      <div className="pt-2">{actions}</div>
    </form>
  );
};

export default SignInForm;
