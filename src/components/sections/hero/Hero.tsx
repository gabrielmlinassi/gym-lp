import NextImage from 'next/image';
import NextLink from 'next/link';
import { useRouter } from 'next/router';

import Container from 'components/container';
import Text from 'components/Text';
import Button from 'components/button';
import SigninDialog from 'components/signin-dialog';

import ScreenshotHeroCombo from '/public/images/screenshot-hero-combo.png';
import pattern from '/public/patterns/pattern.svg';

const Hero = () => {
  const router = useRouter();

  const onOpenChange = (open: boolean) => {
    router.replace('', open ? '/signup' : '', { scroll: false, shallow: true });
  };

  return (
    <Container variant="hero">
      <div className="grid grid-cols-1 sm:grid-cols-[minmax(auto,450px),minmax(400px,1fr)] xl:grid-cols-[minmax(auto,550px),minmax(400px,1fr)]">
        <div className="z-10 col-start-1 max-w-[450px]">
          <h1>Strength Training Built For You</h1>
        </div>
        <div className="z-10 col-start-1 mt-5">
          <Text>
            Maximize your athletic potential with individualized, sport-specific training
            to increase your strength, explosiveness, and speed.
          </Text>
        </div>
        <div className="col-start-1 mt-8">
          {/* Temporary workaround. If I conditionally render with a hook, it throws an 
          hydratation error. It's possibility something on Radix side. Wait for new versions. */}
          <div className="hidden sm:block">
            <SigninDialog onOpenChange={onOpenChange}>
              <Button>Start free trial</Button>
            </SigninDialog>
          </div>
          <div className="block sm:hidden">
            <NextLink href="/signup" passHref>
              <Button>Start free trial</Button>
            </NextLink>
          </div>
        </div>
        <div className="relative row-start-2 h-[400px] md:col-start-2 md:row-start-1 md:row-end-5 md:-mt-24 md:h-[700px]">
          <div className="absolute inset-0 -inset-x-6 -inset-y-36 sm:inset-0 sm:bottom-20 sm:-right-8">
            <div>
              <NextImage
                src={pattern}
                layout="fill"
                priority
                sizes="(min-width: 48em) 50vw, 90vw"
                className="object-cover object-center sm:object-contain md:object-right"
              />
            </div>
          </div>
          <NextImage
            src={ScreenshotHeroCombo}
            layout="fill"
            placeholder="blur"
            priority
            quality={100}
            objectFit="contain"
            sizes="(min-width: 48em) 40vw, 90vw"
            className="object-center md:object-right"
          />
        </div>
      </div>
    </Container>
  );
};

export default Hero;
