import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import NextImage from 'next/image';
import NextLink from 'next/link';
import { NextPageWithLayout } from './_app';

import Logo from 'components/logo';
import Text from 'components/Text';
import { CheckIcon } from 'components/icons';
import ToggleGroup from 'components/toggle-group';
import SigninDialog from 'components/signin-dialog';
import Container from 'components/container';
import Button from 'components/button';
import Layout from 'components/layout';
import Reviews from '@sections/reviews';

import athleteImg from '/public/images/bg-athlete-1.png';
import appStoreImg from '/public/images/app-store.png';
import googlePlayImg from '/public/images/google-play.png';

const gradientStyle = {
  /** Workaround to TW lack of support for gradient percentage stops */
  background: `linear-gradient(90deg, rgba(37, 41, 50, 0.9) 50%, rgba(37, 41, 50, 0) 100%)`,
};

const PlanEnum = {
  Monthly: 'monthly',
  Annualy: 'annualy',
} as const;

type PlanEnum = typeof PlanEnum[keyof typeof PlanEnum];

const SubscriptionPage: NextPageWithLayout = () => {
  const router = useRouter();
  const [plan, setPlan] = useState<PlanEnum>('monthly');

  useEffect(() => {
    console.log({ plan });
  }, [plan]);

  const onOpenChange = (open: boolean) => {
    router.push('', open ? '/signup' : '', { scroll: false });
  };

  return (
    <div>
      <div className="relative h-[700px]">
        <NextImage src={athleteImg} layout="fill" sizes="100vw" objectFit="cover" />
        <div style={gradientStyle} className="absolute inset-0" />
        <div className="absolute top-1/2 left-1/2 w-full -translate-x-1/2 -translate-y-1/2 pl-4 pr-8 text-center">
          <Logo variant="mark" size="onlyLg" />
          <h1 className="mt-2 text-[#FAA806]">Premium</h1>
          <h2>Strength training</h2>
          <Text size="2xl" className="mb-4">
            is just few clicks away
          </Text>
          <ToggleGroup
            type="single"
            defaultValue={plan}
            defaultChecked
            onValueChange={(value) => setPlan(value as PlanEnum)}
          >
            <ToggleGroup.Item value={PlanEnum.Monthly}>Pay monthly</ToggleGroup.Item>
            <ToggleGroup.Item value={PlanEnum.Annualy}>Pay annualy</ToggleGroup.Item>
          </ToggleGroup>
        </div>
      </div>
      <div className="relative -mt-24">
        <Container variant="inner">
          <div className="flex flex-col overflow-hidden rounded-[32px] bg-[#1E2229] lg:flex-row">
            <div className="grow p-8 sm:p-16">
              <h1 className="text-[#FAA806]">10% off</h1>
              <h5>
                your first month for a limited time.
                <br className="hidden sm:block" /> No risk, cancel anytime.
              </h5>
              <div className="mt-6 space-y-3">
                {[
                  {
                    Icon: CheckIcon,
                    text: 'Generate a workout program custom tailored to your goals',
                  },
                  {
                    Icon: CheckIcon,
                    text: 'Access 600+ technique and movement videos',
                  },
                  {
                    Icon: CheckIcon,
                    text: 'Track your exercise history and estimate 1 rep maxes',
                  },
                  {
                    Icon: CheckIcon,
                    text: 'Reach your peak right on time for your biggest competition',
                  },
                ].map(({ Icon, text }, idx) => (
                  <div key={idx} className="flex items-start gap-4">
                    <Icon className="mt-1 flex-shrink-0" />
                    <Text size="md" className="text-white">
                      {text}
                    </Text>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex flex-shrink-0 flex-col items-center justify-center bg-[#373E4B] p-8 sm:p-16 lg:max-w-[400px]">
              <div className="flex items-end gap-2">
                <h1>$29*</h1>
                <h2 className="text-[#97A3B7]">$39</h2>
              </div>
              <Text size="base" className="mt-2 text-center text-[#CCD4E2]">
                * Early bird pricing.
                <br /> Subscription will increase to{' '}
                <span className="text-white">$39</span> after your first month.
              </Text>
              <div className="mt-4">
                {/* Temporary workaround. If I conditionally render with a hook, it throws an 
                hydratation error. It's possibility something on Radix side. Wait for new versions. */}
                <div className="hidden sm:block">
                  <SigninDialog onOpenChange={onOpenChange}>
                    <Button size="lg">Gain access today</Button>
                  </SigninDialog>
                </div>
                <div className="block sm:hidden">
                  <NextLink href="/signup" passHref>
                    <Button size="lg">Gain access today</Button>
                  </NextLink>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
      <Container variant="inner">
        <div className="mt-12 flex items-center justify-center gap-4">
          <a href="/" target="_blank" rel="noreferrer">
            <NextImage src={appStoreImg} />
          </a>
          <a href="/" target="_blank" rel="noreferrer">
            <NextImage src={googlePlayImg} />
          </a>
        </div>
      </Container>
      <Reviews className="mt-12" />
    </div>
  );
};

SubscriptionPage.getLayout = (page) => {
  return (
    <Layout absoluteNav marginFooter={false}>
      {page}
    </Layout>
  );
};

export default SubscriptionPage;
