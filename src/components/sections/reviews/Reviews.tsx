import NextImage from 'next/image';

import { cnMerge } from 'utils/cn-merge';
import Container from 'components/container';
import Text from 'components/Text';
import { StarIcon } from 'components/icons';
import bgAthlete from '/public/images/bg-athlete-2.png';

const gradientStyle = {
  /** Workaround to TW lack of support for gradient percentage stops */
  background: `linear-gradient(90deg, rgba(37, 41, 50, 0.8) 50%, rgba(37, 41, 50, 0) 100%)`,
};

const Reviews = ({ className }: { className?: string }) => {
  return (
    <div className={cnMerge('relative h-[400px] sm:h-[550px]', className)}>
      <NextImage
        src={bgAthlete}
        placeholder="blur"
        layout="fill"
        objectFit="cover"
        sizes="100vw"
      />
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
          <Text className="mt-7 pr-8 text-white" size="2xl">
            &quot;100% worth it. This was one of the best programs I&apos;ve used. My
            overall strength, mobility and explosion increased significantly. Highly
            recommend this program to any athlete.&quot;
          </Text>
          <Text className="mt-7 text-white" size="2xl">
            - Nasir N
          </Text>
        </div>
      </Container>
    </div>
  );
};

export default Reviews;
