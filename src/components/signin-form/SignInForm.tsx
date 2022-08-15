import React from 'react';
import NextLink from 'next/link';
import { UseFormRegister } from 'react-hook-form';
import * as yup from 'yup';

import TextField from 'components/text-field';
import Checkbox from 'components/checkbox';

export type SignInFormFields = {
  fullName: string;
  email: string;
  pwd: string;
  terms: boolean;
};

type SignInFormProps = {
  register: UseFormRegister<SignInFormFields>;
  // eslint-disable-next-line no-unused-vars
  onSubmit: () => void;
  errors: any;
  actionButtons: React.ReactNode;
};

export const schema = yup
  .object()
  .shape({
    fullName: yup.string().required(),
    email: yup.string().required(),
    pwd: yup.string().required(),
    terms: yup.boolean().isTrue().required(),
  })
  .required();

const SignInForm = ({ register, onSubmit, errors, actionButtons }: SignInFormProps) => {
  console.log('errors:', errors);
  return (
    <form className="space-y-4" onSubmit={onSubmit}>
      <TextField
        label="Full Name"
        type="text"
        autoFocus
        error={errors.fullName && errors.fullName.message}
        {...register('fullName', { required: true })}
        fullWidth
      />
      <TextField
        label="Email"
        type="email"
        error={errors.email && errors.email.message}
        autoComplete="username"
        placeholder="ie. john.doe@email.com"
        {...register('email', { required: true })}
        fullWidth
      />
      <TextField
        label="Password"
        type="password"
        error={errors.pwd && errors.pwd.message}
        autoComplete="current-password"
        {...register('pwd', { required: true })}
        fullWidth
      />
      <Checkbox
        {...register('terms', { required: true })}
        label={
          <>
            I confirm I&apos;ve read and accept{' '}
            <NextLink href="/terms">
              <a className="text-[#FAA806]" tabIndex={-1}>
                terms &amp; conditions
              </a>
            </NextLink>
          </>
        }
      />
      <div className="pt-2">{actionButtons}</div>
    </form>
  );
};

export default SignInForm;
