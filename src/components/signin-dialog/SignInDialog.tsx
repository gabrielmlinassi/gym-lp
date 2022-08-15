import React from 'react';
import { useRouter } from 'next/router';
import NextLink from 'next/link';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import Dialog from 'components/dialog';
import ButtonIcon from 'components/button-icon';
import { AppleIcon, FbIcon, GoogleIcon } from 'components/icons';
import SigninForm, { schema } from 'components/signin-form';
import { Text } from 'components/typography';
import { SignInFormFields } from 'components/signin-form';
import Button from 'components/button';

type DialogProps = {} & React.ComponentProps<typeof Dialog>;

const SignInDialog = ({ children, ...props }: DialogProps) => {
  const router = useRouter();
  const { register, handleSubmit, setError, formState } = useForm<SignInFormFields>({
    mode: 'all',
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data: SignInFormFields) => {
    await new Promise((resolve) => setTimeout(resolve, 2000));
    setError('email', { message: 'Email already exists' }, { shouldFocus: true });
    console.log(data);
  };

  const isSignIn = router.asPath === '/signin';

  return (
    <Dialog {...props}>
      <Dialog.Trigger asChild>{children}</Dialog.Trigger>
      <Dialog.Content title={`${isSignIn ? 'Login' : 'Register'} with email`}>
        <SigninForm
          register={register}
          onSubmit={handleSubmit(onSubmit)}
          errors={formState.errors}
          actionButtons={
            <Button
              type="submit"
              // color={formState.isValid ? 'primary' : 'secondary'}
              color="primary"
              disabled={!formState.isValid}
              loading={formState.isSubmitting}
              fullWidth
            >
              {isSignIn ? 'Log In' : 'Register'}
            </Button>
          }
        />
        <div className="mt-6">
          <div className="flex items-center gap-2">
            <hr className="w-full border-[#4A5465]" />
            <span className="font-industry text-white">OR</span>
            <hr className="w-full border-[#4A5465]" />
          </div>
        </div>
        {/* social icons */}
        <div className="mt-6 flex items-center justify-center gap-4">
          <NextLink href="/account" passHref>
            <ButtonIcon asChild>
              <a>
                <AppleIcon />
              </a>
            </ButtonIcon>
          </NextLink>
          <ButtonIcon asChild>
            <a>
              <FbIcon />
            </a>
          </ButtonIcon>
          <ButtonIcon>
            <GoogleIcon />
          </ButtonIcon>
        </div>
        {/*  */}
        <div className="mt-6 text-center">
          <Text size="sm" className="font-semibold text-white">
            {isSignIn ? 'Have an account?' : "Don't have an account?"}
          </Text>
          <NextLink href="" as={isSignIn ? '/signup' : '/signin'} shallow>
            <a className="mt-0.5 font-industry font-semibold uppercase text-[#FAA806] text-opacity-50 decoration-2 underline-offset-[3px] hover:underline">
              <span className="text-[#FAA806]">
                {isSignIn ? 'Register' : 'Log in'} here
              </span>
            </a>
          </NextLink>
        </div>
      </Dialog.Content>
    </Dialog>
  );
};

export default SignInDialog;
