import Container from 'components/container';
import { AtomIcon, MuscleIcon, SettingsIcon, StatsIcon } from 'components/icons';
import { Heading, Text } from 'components/typography';

const WhatFor = () => {
  return (
    <div>
      <Container variant="inner">
        <div className="mx-auto mt-32 max-w-[500px] text-center">
          <Heading variant="h2">Strength coach in your pocket</Heading>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-12 md:grid-cols-2">
          {data.map(({ Icon, heading, text }, i) => (
            <div key={i} className="flex gap-4">
              <div>
                <div className="flex h-16 w-16 items-center justify-center rounded-3xl bg-[#1E2229] p-4 sm:h-20 sm:w-20">
                  <Icon className="h-full w-full" />
                </div>
              </div>
              <div>
                <Heading variant="h3">{heading}</Heading>
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
