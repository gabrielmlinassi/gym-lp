import React from 'react';
import NextLink from 'next/link';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import Button from 'components/button';
import TextField from 'components/text-field';
import Text from 'components/Text';
import OAuth2 from '@forms/OAuth2';

type SignInFormProps = {
  samePageRouting?: boolean;
  autoFocus?: boolean;
};

export type SignInFormFields = {
  email: string;
  pwd: string;
};

export const schema = yup
  .object()
  .shape({
    email: yup.string().required(),
    pwd: yup.string().required(),
  })
  .required();

const SignInForm = ({ samePageRouting = true, autoFocus = true }: SignInFormProps) => {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isValid, isSubmitting },
  } = useForm<SignInFormFields>({
    mode: 'onChange',
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data: SignInFormFields) => {
    await new Promise((resolve) => setTimeout(resolve, 2000));
    setError('email', { message: 'Email already exists' }, { shouldFocus: true });
    console.log(data);
  };

  return (
    <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
      <TextField
        label="Email"
        type="email"
        error={errors.email && errors.email.message}
        autoFocus={autoFocus}
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
      <div className="pt-2">
        <Button
          type="submit"
          color={isValid ? 'primary' : 'secondary'}
          disabled={!isValid}
          loading={isSubmitting}
          fullWidth
        >
          Log In
        </Button>
      </div>
      <div className="mt-6">
        <div className="flex items-center gap-2">
          <hr className="w-full border-[#4A5465]" />
          <span className="font-industry text-white">OR</span>
          <hr className="w-full border-[#4A5465]" />
        </div>
      </div>
      <OAuth2 />
      <div className="mt-6 text-center">
        <Text size="base" className="font-semibold text-white">
          Don&apos;t Have an account?
        </Text>
        <NextLink
          {...(samePageRouting
            ? { href: '', as: '/signup', replace: true, scroll: false }
            : { href: '/signup' })}
        >
          <a className="mt-0.5 font-industry font-semibold uppercase text-[#FAA806] text-opacity-50 decoration-2 underline-offset-[3px] hover:underline">
            <span className="text-[#FAA806]">Register here</span>
          </a>
        </NextLink>
      </div>
    </form>
  );
};

export default SignInForm;
