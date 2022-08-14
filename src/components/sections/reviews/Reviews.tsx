import NextImage from 'next/image';

import logoNcaa from '/public/logos/logo-ncaa.svg';
import logoNfl from '/public/logos/logo-nfl.svg';
import logoMll from '/public/logos/logo-mll.svg';
import logoOlympics from '/public/logos/logo-olympics.svg';
import logoDiamondLeague from '/public/logos/logo-diamond-league.svg';
import bgAthlete from '/public/images/bg-athlete-2.png';

import Container from 'components/container';
import { Heading, Text } from 'components/typography';
import { StarIcon } from 'components/icons';

const gradientStyle = {
  /** Workaround to TW lack of support for gradient percentage stops */
  background: `linear-gradient(90deg, rgba(37, 41, 50, 0.8) 50%, rgba(37, 41, 50, 0) 100%)`,
};

const Review = () => {
  return (
    <>
      <Container variant="inner">
        <div className="mt-32 text-center">
          <Heading variant="h2">Proven results</Heading>
        </div>
        <div className="mx-auto max-w-[575px] text-center">
          <Text>
            Join the training system that has produced countless Division I athletes,
            All-Americans, State Champions, and Olympians!
          </Text>
        </div>
      </Container>
      <div className="mt-20 bg-[#373E4B] py-14">
        <Container variant="inner" className="h-full">
          <div className="flex h-full flex-wrap items-center justify-center gap-8 sm:flex-nowrap md:gap-16">
            <NextImage src={logoNcaa} />
            <NextImage src={logoNfl} />
            <NextImage src={logoMll} />
            <NextImage src={logoOlympics} />
            <NextImage src={logoDiamondLeague} />
          </div>
        </Container>
      </div>
      <div className="relative h-[550px]">
        <NextImage src={bgAthlete} layout="fill" objectFit="cover" sizes="100vw" />
        <div style={gradientStyle} className="absolute inset-0" />
        <Container variant="inner">
          <div className="absolute top-1/2 max-w-[490px] -translate-y-1/2">
            <div className="flex items-center gap-1.5">
              <StarIcon />
              <StarIcon />
              <StarIcon />
              <StarIcon />
              <StarIcon />
            </div>
            <Text className="mt-7 text-white" size="lg">
              &quot;100% worth it. This was one of the best programs I&apos;ve used. My
              overall strength, mobility and explosion increased significantly. Highly
              recommend this program to any athlete.&quot;
            </Text>
            <Text className="mt-7 text-white" size="lg">
              - Nasir N
            </Text>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Review;
