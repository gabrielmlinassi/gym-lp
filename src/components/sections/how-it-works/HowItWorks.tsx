import NextImage from 'next/image';

import Container from 'components/container';
import Text from 'components/Text';
import Logo from 'components/logo';

import bgAthlete from '/public/images/bg-athlete-1.png';
import pattern from '/public/patterns/pattern2.svg';

const gradientStyle = {
  /** Workaround to TW lack of support for gradient percentage stops */
  background: `linear-gradient(90deg, rgba(37, 41, 50, 0.9) 50%, rgba(37, 41, 50, 0) 100%)`,
};

const HowItWorks = () => {
  return (
    <>
      <div className="relative mt-36 h-[400px] lg:h-[675px]">
        <NextImage
          src={bgAthlete}
          placeholder="blur"
          layout="fill"
          objectFit="cover"
          sizes="100vw"
        />
        <div style={gradientStyle} className="absolute inset-0" />
        <Container variant="inner">
          <div className="absolute top-1/2 max-w-[550px] -translate-y-1/2">
            <Logo variant="mark" noRedirect />
            <h2 className="mt-5">champions are built</h2>
            <Text size="2xl" className="mt-3">
              Peak Strength targets only the exercises and movements that are
              scientifically proven to make you the best you can be.
            </Text>
          </div>
        </Container>
      </div>
      <div className="relative mt-36">
        <Container variant="inner" className="relative md:static">
          <div className="absolute left-0 right-0 top-[80%] bottom-0 z-0 h-screen md:-top-8">
            <NextImage
              src={pattern}
              layout="fill"
              sizes="100vw"
              className="object-cover object-top lg:object-fill"
            />
          </div>
          <div className="relative z-30 text-center">
            <h2>How It Works</h2>
          </div>
          <div className="relative z-30 mt-16 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {data.map(({ step, heading, text }, i) => (
              <div key={i} className="flex flex-col">
                <h3>
                  <span className="mr-2 text-yellow-500">{step}</span>
                  {heading}
                </h3>
                <Text size="md">{text}</Text>
              </div>
            ))}
          </div>
        </Container>
      </div>
    </>
  );
};

const data = [
  {
    step: '01',
    heading: 'Build',
    text: 'The app will build a 10-40 week program specific to your individual needs, getting you to peak strength levels by your selected date.',
  },
  {
    step: '02',
    heading: 'Train',
    text: 'Start training with workouts crafted by world-class coach Dane Miller and access 600+ videos of movement demos and technique instruction.',
  },
  {
    step: '03',
    heading: 'Adapt',
    text: 'The built-in AI will learn from your feedback and workouts to tell you how much weight to put on the bar each set for maximum results.',
  },
  {
    step: '04',
    heading: 'Improve',
    text: 'As you get stronger, the app gets smarter, collecting and analyzing your workout data to ensure you are at peak strength when it matters most.',
  },
];

export default HowItWorks;
