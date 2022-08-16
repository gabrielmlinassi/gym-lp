import NextImage from 'next/image';

import Container from 'components/container';
import Text from 'components/Text';

import logoNcaa from '/public/logos/logo-ncaa.svg';
import logoNfl from '/public/logos/logo-nfl.svg';
import logoMll from '/public/logos/logo-mll.svg';
import logoOlympics from '/public/logos/logo-olympics.svg';
import logoDiamondLeague from '/public/logos/logo-diamond-league.svg';

const SuccessStories = () => {
  return (
    <>
      <Container variant="inner">
        <div className="mt-32 text-center">
          <h2>Proven results</h2>
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
    </>
  );
};

export default SuccessStories;
