import type { GetServerSideProps } from 'next';
import NextImage from 'next/image';
import { NextPageWithLayout } from './_app';

import Container from 'components/container';
import { CardIcon } from '@icons/CardIcon';
import Logo from 'components/logo';
import Text from 'components/Text';
import Layout from 'components/layout';

import athleteImg from '/public/images/bg-athlete-1.png';
import appStoreImg from '/public/images/app-store.png';
import googlePlayImg from '/public/images/google-play.png';

const gradientStyle = {
  /** Workaround to TW lack of support for gradient percentage stops */
  background: `linear-gradient(90deg, rgba(37, 41, 50, 0.9) 50%, rgba(37, 41, 50, 0) 100%)`,
};

const AccountPage: NextPageWithLayout = () => {
  return (
    <div>
      <div className="relative h-[325px] sm:h-[500px]">
        <NextImage src={athleteImg} layout="fill" sizes="100vw" objectFit="cover" />
        <div style={gradientStyle} className="absolute inset-0" />
        <div className="absolute top-1/2 left-1/2 mt-4 w-full max-w-[600px] -translate-x-1/2 -translate-y-1/2 text-center lg:max-w-[800px]">
          <Logo variant="mark" size="onlyLg" noRedirect />
          <h2 className="text-base md:text-5xl">Your PeakStrength account is</h2>
          <h1 className="text-yellow-500">Active</h1>
        </div>
      </div>
      <div className="relative -mt-12 sm:-mt-24">
        <Container variant="inner">
          <div className="mx-auto flex max-w-[640px] flex-col items-center overflow-hidden rounded-[32px] bg-[#1E2229] p-8 sm:p-16">
            <div className="flex flex-col items-center justify-center sm:flex-row sm:items-baseline">
              <h1 className="text-yellow-500">$39</h1>
              <h5>
                <span className="hidden sm:inline-block">/</span>
                <span className="inline-block sm:hidden">per</span> month{' '}
                <span className="text-[#97A3B7]">paid monthly</span>
              </h5>
            </div>
            <Text size="md" className="mt-2 text-center font-normal">
              Your next payment is on{' '}
              <span className="block text-white sm:inline-block">September 29, 2022</span>
            </Text>
            <div className="mt-8 flex w-full gap-4 rounded-2xl border border-[#373E4B] bg-[#252932] p-4">
              <CardIcon className="flex-shrink-0" />
              <div className="flex w-full flex-col justify-between gap-0 sm:flex-row sm:gap-4">
                <div className="flex items-center gap-4 font-semibold text-white">
                  <span>
                    <span className="text-[#97A3B7]">Visa ending in</span> 4242
                  </span>
                </div>
                <div className="font-semibold text-yellow-500">
                  Update payment information
                </div>
              </div>
            </div>
          </div>
          <div className="mt-8 flex items-center justify-center gap-4 sm:mt-12">
            <a href="/" target="_blank" rel="noreferrer">
              <NextImage src={appStoreImg} />
            </a>
            <a href="/" target="_blank" rel="noreferrer">
              <NextImage src={googlePlayImg} />
            </a>
          </div>
        </Container>
      </div>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  return {
    props: {},
  };
};

AccountPage.getLayout = (page) => {
  return (
    <Layout absoluteNav userMenu>
      {page}
    </Layout>
  );
};

export default AccountPage;
