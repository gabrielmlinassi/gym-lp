import { useEffect, useState } from 'react';
import NextImage from 'next/image';
import cn from 'classnames';

import { useMediaQuery } from 'hooks';
import Container from 'components/container';
import Text from 'components/Text';

import img1A from '/public/images/screenshot-mobility-active.png';
import img1B from '/public/images/screenshot-mobility-selection.png';
import img2A from '/public/images/screenshot-exercise-active.png';
import img2B from '/public/images/screenshot-workout-active.png';
import img3A from '/public/images/screenshot-replace-confirm.png';
import img3B from '/public/images/screenshot-replace-selection.png';

const Screens = [
  [img1A, img1B],
  [img2A, img2B],
  [img3A, img3B],
];

const Screenshots = () => {
  const isDesktop = useMediaQuery('(min-width: 768px)');
  const [activeScreenIdx, setActiveScreenIdx] = useState(0);
  const [activeDotIdx, setActiveDotIdx] = useState(-1); // will be updted by the intersection observer

  useEffect(() => {
    const options = {
      root: document.querySelector('.carousel'),
      threshold: 0.7,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveDotIdx((idx) => {
            // increment idx if scrolled to right and decrement if scrolled to left
            const newIdx = entry.boundingClientRect.x >= 0 ? idx + 1 : idx - 1;
            // prevent idx going out of boundaries
            return newIdx % 2;
          });
        }
      });
    }, options);

    document.querySelectorAll('.carousel .slide').forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const onItemClick = (idx: number) => {
    setActiveScreenIdx(idx);
    if (isDesktop) return;
    // scroll list into view and scroll to first slide
    document.querySelector('.carousel')?.scrollTo({ left: 0 });
    const top = (document.querySelector('.screenshots') as HTMLDivElement)?.offsetTop;
    window.scrollTo({ top: top - 60, behavior: 'smooth' });
  };

  return (
    <Container variant="inner" className="z-10 mt-20 md:mt-44">
      <div className="screenshots relative flex flex-col-reverse gap-8 md:flex-row">
        <div className="flex-shrink-0 space-y-12 sm:w-[300px] md:w-[400px] xl:w-[475px]">
          {data.map(({ heading, text }, screenIdx) => {
            const active = screenIdx == activeScreenIdx;
            return (
              <div
                key={screenIdx}
                className="cursor-pointer select-none"
                onClick={() => onItemClick(screenIdx)}
              >
                <h3 className={active ? 'text-white' : 'text-gray-400'}>{heading}</h3>
                <Text size="md" className={active ? 'text-gray-200' : 'text-gray-400'}>
                  {text}
                </Text>
              </div>
            );
          })}
        </div>
        <div className="-mr-6 overflow-hidden xl:w-full">
          <div className="carousel flex h-[600px] snap-x snap-mandatory gap-1 overflow-auto xl:mr-0 xl:grow">
            <div className="slide relative w-[300px] flex-shrink-0 snap-start xl:w-full xl:flex-shrink">
              <NextImage
                src={Screens[activeScreenIdx][0]}
                placeholder="blur"
                quality={100}
                layout="fill"
                objectFit="contain"
                sizes="350px"
              />
              <NextImage
                // ..% Screens.length to prevent prefetching a path out of boundary
                src={Screens[(activeScreenIdx + 1) % Screens.length][0]}
                placeholder="blur"
                className="invisible" // For prefeching purposes
                quality={100}
                layout="fill"
                objectFit="contain"
                sizes="350px"
              />
            </div>
            <div className="slide relative mr-4 w-[300px] flex-shrink-0 snap-start xl:mr-0 xl:w-full xl:flex-shrink">
              <NextImage
                src={Screens[activeScreenIdx][1]}
                placeholder="blur"
                quality={100}
                layout="fill"
                objectFit="contain"
                sizes="350px"
              />
              <NextImage
                // ..% Screens.length to prevent prefetching a path out of boundary
                src={Screens[(activeScreenIdx + 1) % Screens.length][1]}
                placeholder="blur"
                className="invisible" // For prefeching purposes
                quality={100}
                layout="fill"
                objectFit="contain"
                sizes="350px"
              />
            </div>
          </div>
          <div className="mt-4 flex items-center justify-center gap-2 xl:hidden">
            {Object.values(Screens[activeScreenIdx]).map((_, dotIdx) => (
              <div
                key={dotIdx}
                className={cn([
                  'h-2 w-2 rounded-full',
                  dotIdx == activeDotIdx ? 'bg-yellow-500' : 'bg-gray-300',
                ])}
              />
            ))}
          </div>
        </div>
      </div>
    </Container>
  );
};

const data: { heading: string; text: string }[] = [
  {
    heading: 'Mobility Workouts',
    text: 'Select which part of the body you want to target to improve flexibility or aid recovery, and the app will provide the best movements to perform.',
  },
  {
    heading: 'Track Your Progress',
    text: 'The built-in 1 rep max estimator will let you know how your strength is progressing while scaling your workouts to keep challenging you as you get stronger.',
  },
  {
    heading: 'Exercise Substitution',
    text: 'If you lack a piece of equipment or are unable to perform an exercise, you can swap out the exercise mid-workout and we will suggest alternatives that will provide a similar result.',
  },
];

export default Screenshots;
