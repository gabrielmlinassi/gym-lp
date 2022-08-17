import Container from 'components/container';
import Logo from 'components/logo';
import Text from 'components/Text';
import type { GetServerSideProps, NextPage } from 'next';
import NextImage from 'next/image';

import athleteImg from '/public/images/bg-athlete-1.png';
import appStoreImg from '/public/images/app-store.png';
import googlePlayImg from '/public/images/google-play.png';
import { CardIcon } from '@icons/CardIcon';

const gradientStyle = {
  /** Workaround to TW lack of support for gradient percentage stops */
  background: `linear-gradient(90deg, rgba(37, 41, 50, 0.9) 50%, rgba(37, 41, 50, 0) 100%)`,
};

const AccountPage: NextPage = () => {
  return (
    <div>
      <div className="relative h-[500px]">
        <NextImage src={athleteImg} layout="fill" sizes="100vw" objectFit="cover" />
        <div style={gradientStyle} className="absolute inset-0" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
          <Logo noRedirect />
          <h2>Your PeakStrength account is</h2>
          <h1 className="text-[#FAA806]">Active</h1>
        </div>
      </div>
      <div className="relative -mt-24">
        <Container variant="inner">
          <div className="mx-auto flex max-w-[640px] flex-col items-center overflow-hidden rounded-[32px] bg-[#1E2229] p-16">
            <div className="flex items-baseline">
              <h1 className="text-[#FAA806]">$39</h1>
              <Text
                size="lg"
                className="font-industry font-semibold uppercase text-white"
              >
                / month <span className="text-[#97A3B7]">paid monthly</span>
              </Text>
            </div>
            <Text size="md" className="font-normal">
              Your next payment is on{' '}
              <span className="text-white">September 29, 2022</span>
            </Text>
            <div className="mt-8 flex w-full justify-between gap-4 rounded-2xl border border-[#373E4B] bg-[#252932] p-4">
              <div className="flex items-center gap-4 font-semibold text-white">
                <CardIcon />
                <span>
                  <span className="text-[#97A3B7]">Visa ending in</span> 4242
                </span>
              </div>
              <div className="font-semibold text-[#FAA806]">
                Update payment information
              </div>
            </div>
          </div>
        </Container>
        <div className="mt-12 flex items-center justify-center gap-4">
          <a href="/" target="_blank" rel="noreferrer">
            <NextImage src={appStoreImg} />
          </a>
          <a href="/" target="_blank" rel="noreferrer">
            <NextImage src={googlePlayImg} />
          </a>
        </div>
      </div>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  return {
    props: {},
  };
};

export default AccountPage;
