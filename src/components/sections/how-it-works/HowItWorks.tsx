import NextImage from 'next/image';
import Container from 'components/container';
import { Heading, Text } from 'components/typography';
import bgAthlete from '/public/images/bg-athlete-1.png';
import Logo from 'components/logo';

const gradientStyle = {
  /** Workaround to TW lack of support for gradient percentage stops */
  background: `linear-gradient(90deg, rgba(37, 41, 50, 0.9) 50%, rgba(37, 41, 50, 0) 100%)`,
};

const HowItWorks = () => {
  return (
    <>
      <Container variant="inner" className="mt-32">
        <div className="text-center">
          <Heading variant="h2">How It Works</Heading>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {data.map(({ step, heading, text }, i) => (
            <div key={i} className="flex flex-col">
              <Heading variant="h3">
                <span className="mr-2 text-[#FAA806]">{step}</span>
                {heading}
              </Heading>
              <Text size="md">{text}</Text>
            </div>
          ))}
        </div>
      </Container>
      <div className="relative mt-28 h-[675px]">
        <NextImage src={bgAthlete} layout="fill" objectFit="cover" sizes="100vw" />
        <div style={gradientStyle} className="absolute inset-0" />
        <Container variant="inner">
          <div className="absolute top-1/2 max-w-[550px] -translate-y-1/2">
            <Logo variant="mark" />
            <Heading variant="h2" className="mt-5">
              champions are built
            </Heading>
            <Text size="lg" className="mt-3">
              Peak Strength targets only the exercises and movements that are
              scientifically proven to make you the best you can be.
            </Text>
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
