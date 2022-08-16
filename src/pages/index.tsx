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
    </div>
  );
};

export default HomePage;
