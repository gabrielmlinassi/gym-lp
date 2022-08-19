import { SVGProps } from 'react';
import { twMerge } from 'tailwind-merge';

const XIcon = ({ className, ...props }: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 14 14"
      fill="none"
      className={twMerge('h-6 w-6 text-yellow-500', className)}
      {...props}
    >
      <path
        d="M13.707 1.70703L12.293 0.29303L6.99997 5.58603L1.70697 0.29303L0.292969 1.70703L5.58597 7.00003L0.292969 12.293L1.70697 13.707L6.99997 8.41403L12.293 13.707L13.707 12.293L8.41397 7.00003L13.707 1.70703Z"
        fill="currentColor"
      />
    </svg>
  );
};

export { XIcon };
