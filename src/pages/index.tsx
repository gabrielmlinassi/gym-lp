import { Suspense } from 'react';
import { NextPageWithLayout } from './_app';

import Hero from '@sections/hero';
import WhatFor from '@sections/what-for';
import HowItWorks from '@sections/how-it-works';
import Reviews from '@sections/reviews';
import Screenshots from '@sections/screenshots';
import SuccessStories from '@sections/success-stories';
import Layout from 'components/layout';

const HomePage: NextPageWithLayout = () => {
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

HomePage.getLayout = (page) => {
  return (
    <Layout marginFooter={false} navContainer="hero">
      {page}
    </Layout>
  );
};

export default HomePage;
