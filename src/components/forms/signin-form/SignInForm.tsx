import React from 'react';
import NextLink from 'next/link';
import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { signIn } from 'next-auth/react';

import Button from 'components/button';
import TextField from 'components/text-field';
import Text from 'components/Text';
import OAuth2 from '@forms/OAuth2';
import { ErrorIcon } from '@icons/ErrorIcon';
import { SignInResponse } from 'next-auth/react';

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
  const router = useRouter();
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
    await signIn('credentials', {
      email: data.email,
      password: data.pwd,
      redirect: false,
    }).then((response) => {
      if (response?.ok) {
        window.location.replace('/account');
      } else if (response?.error) {
        const { errors } = JSON.parse(response.error);
        setError('email', { message: errors[0].message });
        setError('pwd', {});
      }
    });
  };

  return (
    <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
      <TextField
        label="Email"
        type="email"
        error={!!errors.email && !!errors.pwd}
        autoFocus={autoFocus}
        autoComplete="username"
        placeholder="ie. john.doe@email.com"
        {...register('email', { required: true })}
        fullWidth
      />
      <TextField
        label="Password"
        type="password"
        error={!!errors.email && !!errors.pwd}
        autoComplete="current-password"
        {...register('pwd', { required: true })}
        fullWidth
      />
      {errors.email && errors.pwd && (
        <div className="mt-2 flex items-start gap-2 rounded-lg bg-black bg-opacity-10 p-4 text-left text-sm text-red">
          <ErrorIcon className="mt-0.5 flex-shrink-0" />
          <span>{errors.email.message}</span>
        </div>
      )}
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
            ? { href: '', as: '/signup', replace: true, scroll: false, shallow: true }
            : { href: '/signup' })}
        >
          <a className="mt-0.5 font-industry font-semibold uppercase text-yellow-500 text-opacity-50 decoration-2 underline-offset-[3px] hover:underline">
            <span className="text-yellow-500">Register here</span>
          </a>
        </NextLink>
      </div>
    </form>
  );
};

export default SignInForm;
