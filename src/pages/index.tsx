import { Suspense } from 'react';
import type { NextPage } from 'next';

import Hero from '@sections/hero';
import WhatFor from '@sections/what-for';
import HowItWorks from '@sections/how-it-works';
import Reviews from '@sections/reviews';
import Screenshots from '@sections/screenshots';
import SuccessStories from '@sections/success-stories';

const HomePage: NextPage = () => {
  return (
    <div className="pt-8">
      <Hero />
      <Suspense>
        <WhatFor />
        <HowItWorks />
        <Screenshots />
        <SuccessStories />
        <Reviews />
      </Suspense>
      {/* <div className="h-[780px] bg-yellow-600">
        <Logo variant="full" />
        <div className="max-w-[450px] border-2 border-dashed">
          <Heading variant="h1">Strength Training Built For You</Heading>
        </div>
      </div> */}

      {/* <div className="flex h-screen w-screen items-center justify-center">
        <div className="flex h-80 w-full max-w-sm flex-col items-center justify-end rounded-md bg-gray-800 p-4">
          <NextImage src={AppStoreImg} />
          <SignInDialog onOpenChange={(open) => router.push({}, open ? '/signin' : '')}>
            <Button>Open</Button>
          </SignInDialog>
        </div>
      </div> */}
      {/* <div className="relative h-[668px]">
        <NextImage
          src={bgAthlete}
          layout="fill"
          className="object-cover object-[55%,50%]"
        />
      </div> */}
    </div>
  );
};

export default HomePage;
