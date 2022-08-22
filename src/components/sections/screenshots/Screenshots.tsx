import { useCallback, useEffect, useState } from 'react';
import NextImage, { StaticImageData } from 'next/image';
import cn from 'classnames';
import useEmblaCarousel from 'embla-carousel-react';

import { useMediaQuery } from 'hooks';
import Text from 'components/Text';

import img1A from '/public/images/screenshot-mobility-active.png';
import img1B from '/public/images/screenshot-mobility-selection.png';
import img2A from '/public/images/screenshot-exercise-active.png';
import img2B from '/public/images/screenshot-workout-active.png';
import img3A from '/public/images/screenshot-replace-confirm.png';
import img3B from '/public/images/screenshot-replace-selection.png';

const Screenshots = () => {
  const [emblaRef, embla] = useEmblaCarousel({ align: 'start' });
  const [emblaIsActive, setEmblaIsActive] = useState(false);
  const [selectedContentIdx, setSelectedContentIdx] = useState(0);
  const [selectedScreenshotIdx, setSelectedScreenshotIdx] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);
  const isTabletOrLower = useMediaQuery('(max-width: 1024px)');

  const onSelect = useCallback(() => {
    if (!embla) return;
    setSelectedScreenshotIdx(embla.selectedScrollSnap());
  }, [embla, setSelectedScreenshotIdx]);

  useEffect(() => {
    if (isTabletOrLower) {
      setEmblaIsActive(true);
    }
  }, [isTabletOrLower]);

  useEffect(() => {
    if (!embla) return;
    onSelect();
    setScrollSnaps(embla.scrollSnapList());
    embla.on('select', onSelect);
  }, [embla, setScrollSnaps, onSelect]);

  const onItemClick = async (idx: number) => {
    setSelectedContentIdx(idx);
    if (!isTabletOrLower) return;
    const containerEl = document.querySelector('.screenshots-container');
    containerEl?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="screenshots-container relative z-10 mx-auto mt-5 max-w-[calc(1120px+48px)] pt-14 md:mt-24">
      <div className="flex flex-col-reverse gap-8 md:flex-row md:gap-4">
        {/* ---- text fields ----- */}
        <div className="px-6 sm:pr-0">
          <div className="flex-shrink-0 space-y-12 sm:w-[300px] md:w-[400px] xl:w-[475px]">
            {data.map(({ heading, text }, screenIdx) => {
              const active = screenIdx == selectedContentIdx;
              return (
                <div key={screenIdx} className="cursor-pointer select-none">
                  <div onClick={() => onItemClick(screenIdx)}>
                    <h3 className={active ? 'text-white' : 'text-gray-400'}>{heading}</h3>
                    <Text
                      size="md"
                      className={active ? 'text-gray-200' : 'text-gray-400'}
                    >
                      {text}
                    </Text>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        {/* ---- screenshots ----- */}
        <div className="overflow-hidden">
          <div ref={emblaIsActive ? emblaRef : null} className="overflow-hidden">
            <div className="ml-6 flex h-[600px] gap-1">
              <div className="relative w-[300px] flex-shrink-0">
                <NextImage
                  src={data[selectedContentIdx].screens[0]}
                  placeholder="blur"
                  quality={100}
                  layout="fill"
                  objectFit="contain"
                  sizes="350px"
                />
                <NextImage
                  // Prefetch screenshot of next content
                  // PS. 2 in ..% 2 is the amount of screenshots for the selected content
                  src={data[(selectedContentIdx + 1) % data.length].screens[0]}
                  placeholder="blur"
                  className="invisible" // For prefeching purposes
                  quality={100}
                  layout="fill"
                  objectFit="contain"
                  sizes="350px"
                />
              </div>
              <div className="relative w-[300px] flex-shrink-0">
                <NextImage
                  src={data[selectedContentIdx].screens[1]}
                  placeholder="blur"
                  quality={100}
                  layout="fill"
                  objectFit="contain"
                  sizes="350px"
                />
                <NextImage
                  // Prefetch screenshot of next content
                  src={data[(selectedContentIdx + 1) % data.length].screens[1]}
                  placeholder="blur"
                  className="invisible" // For prefeching purposes
                  quality={100}
                  layout="fill"
                  objectFit="contain"
                  sizes="350px"
                />
              </div>
            </div>
          </div>
          <div className="mt-2 flex items-center justify-center gap-1">
            {scrollSnaps.map((_, idx) => (
              <DotBtn key={idx} active={selectedScreenshotIdx == idx} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const DotBtn = ({ active }: { active: boolean }) => {
  return (
    <button
      className={cn(['h-2 w-2 rounded-full', active ? 'bg-yellow-500' : 'bg-gray-300'])}
    />
  );
};

const data: {
  heading: string;
  text: string;
  screens: [StaticImageData, StaticImageData];
}[] = [
  {
    heading: 'Mobility Workouts',
    text: 'Select which part of the body you want to target to improve flexibility or aid recovery, and the app will provide the best movements to perform.',
    screens: [img1A, img1B],
  },
  {
    heading: 'Track Your Progress',
    text: 'The built-in 1 rep max estimator will let you know how your strength is progressing while scaling your workouts to keep challenging you as you get stronger.',
    screens: [img2A, img2B],
  },
  {
    heading: 'Exercise Substitution',
    text: 'If you lack a piece of equipment or are unable to perform an exercise, you can swap out the exercise mid-workout and we will suggest alternatives that will provide a similar result.',
    screens: [img3A, img3B],
  },
];

export default Screenshots;
