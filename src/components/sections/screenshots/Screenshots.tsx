import { useEffect, useState } from 'react';
import NextImage from 'next/image';
import cn from 'classnames';

import Container from 'components/container';
import Text from 'components/Text';

import img1A from '/public/images/screenshot-mobility-active.png';
import img1B from '/public/images/screenshot-mobility-selection.png';
import img2A from '/public/images/screenshot-exercise-active.png';
import img2B from '/public/images/screenshot-workout-active.png';
import img3A from '/public/images/screenshot-replace-confirm.png';
import img3B from '/public/images/screenshot-replace-selection.png';

const Screens = {
  1: [img1A, img1B],
  2: [img2A, img2B],
  3: [img3A, img3B],
};

const Screenshots = () => {
  const [activeIdx, setActiveIdx] = useState<1 | 2 | 3>(1);
  const [activeDotIdx, setActiveDotIdx] = useState(-1);

  useEffect(() => {
    const options = {
      root: document.querySelector('.carousel'),
      threshold: 0.7,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveDotIdx((idx) => {
            const newIdx = entry.boundingClientRect.x >= 0 ? idx + 1 : idx - 1;
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

  return (
    <Container variant="inner">
      <div className="mt-32 flex flex-col-reverse gap-8 md:flex-row">
        <div className="space-y-12 sm:w-[300px] md:w-[475px]">
          {data.map(({ heading, text, id }, i) => (
            <div
              key={i}
              className="cursor-pointer select-none"
              onClick={() => setActiveIdx(id)}
            >
              <h3 className={id === activeIdx ? 'text-white' : 'text-[#4A5465]'}>
                {heading}
              </h3>
              <Text
                size="md"
                className={id === activeIdx ? 'text-[#CCD4E2]' : 'text-[#4A5465]'}
              >
                {text}
              </Text>
            </div>
          ))}
        </div>
        <div className="grow">
          <div className="carousel -mr-4 flex h-[600px] snap-x snap-mandatory overflow-auto md:mr-0 md:grow">
            <div className="slide relative w-[300px] flex-shrink-0 snap-start md:w-full md:flex-shrink">
              <NextImage
                src={Screens[activeIdx][0]}
                quality={100}
                layout="fill"
                objectFit="contain"
                sizes="350px"
              />
            </div>
            <div className="slide relative mr-4 w-[300px] flex-shrink-0 snap-start md:mr-0 md:w-full md:flex-shrink">
              <NextImage
                src={Screens[activeIdx][1]}
                quality={100}
                layout="fill"
                objectFit="contain"
                sizes="350px"
              />
            </div>
          </div>
          <div className="mt-4 flex items-center justify-center gap-2 md:hidden">
            {Object.values(Screens[activeIdx]).map((_, i) => (
              <div
                key={i}
                className={cn([
                  'h-2 w-2 rounded-full',
                  i == activeDotIdx ? 'bg-[#FAA806]' : 'bg-[#97A3B7]',
                ])}
              />
            ))}
          </div>
        </div>
      </div>
    </Container>
  );
};

const data: { id: 1 | 2 | 3; heading: string; text: string }[] = [
  {
    id: 1,
    heading: 'Mobility Workouts',
    text: 'Select which part of the body you want to target to improve flexibility or aid recovery, and the app will provide the best movements to perform.',
  },
  {
    id: 2,
    heading: 'Track Your Progress',
    text: 'The built-in 1 rep max estimator will let you know how your strength is progressing while scaling your workouts to keep challenging you as you get stronger.',
  },
  {
    id: 3,
    heading: 'Exercise Substitution',
    text: 'If you lack a piece of equipment or are unable to perform an exercise, you can swap out the exercise mid-workout and we will suggest alternatives that will provide a similar result.',
  },
];

export default Screenshots;
