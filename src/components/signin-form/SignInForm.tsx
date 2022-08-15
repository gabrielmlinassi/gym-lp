import React from 'react';
import NextLink from 'next/link';
import { useForm } from 'react-hook-form';

import Button from 'components/button';
import TextField from 'components/text-field';
import Checkbox from 'components/checkbox';

export type SignInFormFields = {
  fullName: string;
  email: string;
  pwd: string;
  terms: boolean;
};

type SignInFormProps = {
  // eslint-disable-next-line no-unused-vars
  onSubmit: (fields: SignInFormFields) => void;
  buttonLabel: string;
};

const SignInForm = ({ onSubmit, buttonLabel }: SignInFormProps) => {
  const { register, handleSubmit } = useForm<SignInFormFields>();

  return (
    <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
      <TextField
        label="Full Name"
        type="text"
        {...register('fullName', { required: true })}
        fullWidth
      />
      <TextField
        label="Email"
        type="email"
        autoComplete="username"
        placeholder="ie. john.doe@email.com"
        {...register('email', { required: true })}
        fullWidth
      />
      <TextField
        label="Password"
        type="password"
        autoComplete="current-password"
        {...register('pwd', { required: true })}
        fullWidth
      />
      <Checkbox
        id="terms"
        {...register('terms', { required: true })}
        label={
          <>
            I confirm I&apos;ve read and accept{' '}
            <NextLink href="/terms">
              <a className="text-[#FAA806]">terms &amp; conditions</a>
            </NextLink>
          </>
        }
      />
      <div className="pt-2">
        <Button type="submit" color="primary" disabled={false} loading={false} fullWidth>
          {buttonLabel}
        </Button>
      </div>
    </form>
  );
};

export default SignInForm;
