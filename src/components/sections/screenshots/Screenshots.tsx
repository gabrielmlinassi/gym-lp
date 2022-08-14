import { useState } from 'react';
import NextImage from 'next/image';

import Container from 'components/container';
import { Heading, Text } from 'components/typography';

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
  const [activeId, setActiveId] = useState<1 | 2 | 3>(1);

  return (
    <Container variant="inner">
      <div className="mt-32 flex flex-col-reverse gap-8 md:flex-row">
        <div className="w-[475px] space-y-12">
          {data.map(({ heading, text, id }, i) => (
            <div
              key={i}
              className="cursor-pointer select-none"
              onClick={() => setActiveId(id)}
            >
              <Heading
                variant="h3"
                className={id === activeId ? 'text-white' : 'text-[#4A5465]'}
              >
                {heading}
              </Heading>
              <Text
                size="md"
                className={id === activeId ? 'text-[#CCD4E2]' : 'text-[#4A5465]'}
              >
                {text}
              </Text>
            </div>
          ))}
        </div>
        <div className="flex h-[600px] md:grow">
          <div className="relative w-[300px] flex-shrink-0 md:w-full md:flex-shrink">
            <NextImage
              src={Screens[activeId][0]}
              layout="fill"
              objectFit="contain"
              sizes="350px"
            />
          </div>
          <div className="relative w-[300px] flex-shrink-0 md:w-full md:flex-shrink">
            <NextImage
              src={Screens[activeId][1]}
              layout="fill"
              objectFit="contain"
              sizes="350px"
            />
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
