import NextImage from 'next/image';

import Container from 'components/container';
import { AtomIcon, MuscleIcon, SettingsIcon, StatsIcon } from 'components/icons';
import Text from 'components/Text';
import pattern from '/public/patterns/bg-matrix-peaks.svg';

const WhatFor = () => {
  return (
    <div className="relative">
      <div className="absolute inset-0 z-10">
        <NextImage src={pattern} layout="fill" objectFit="cover" objectPosition="top" />
      </div>
      <div
        className="absolute inset-0 -inset-y-32 z-10"
        style={{
          background: 'linear-gradient(to bottom, rgba(37, 42, 51, 0) 50%, #252A33 100%)',
        }}
      />
      <Container variant="inner" className="relative z-30">
        <div className="mx-auto mt-32 max-w-[550px] text-center">
          <h2>Strength coach in your pocket</h2>
        </div>
        <div className="mt-16 grid grid-cols-[minmax(auto,500px)] justify-center gap-12 md:grid-cols-[repeat(2,minmax(auto,510px))] lg:gap-16">
          {data.map(({ Icon, heading, text }, i) => (
            <div key={i} className="flex gap-4">
              <div>
                <div className="flex h-16 w-16 items-center justify-center rounded-3xl bg-[#1E2229] p-4 lg:h-20 lg:w-20">
                  <Icon className="h-full w-full" />
                </div>
              </div>
              <div>
                <h4>{heading}</h4>
                <Text size="md">{text}</Text>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

const data = [
  {
    Icon: MuscleIcon,
    heading: 'Train with confidence',
    text: 'Take the guesswork out of your training with exact exercises, sets, reps, and weights to perform every week.',
  },
  {
    Icon: SettingsIcon,
    heading: 'Built for you',
    text: 'Whether you are an elite athlete or just starting out, Peak Strength will build your program to develop the strength characteristics needed for your sport.',
  },
  {
    Icon: AtomIcon,
    heading: 'built by experience',
    text: 'Our training algorithm is backed by 15 years of experience training high-performance athletes with concepts based on the latest scientific research in the field.',
  },
  {
    Icon: StatsIcon,
    heading: 'Reach your peak',
    text: 'Tell the app when your season starts or when your biggest competition is, and you will reach your peak strength levels at that time with our proven periodization system.',
  },
];

export default WhatFor;
