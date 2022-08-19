import { SVGProps } from 'react';
import { twMerge } from 'tailwind-merge';

const CheckIcon = ({ className, ...props }: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 17"
      fill="none"
      className={twMerge('h-6 w-6 text-yellow-500', className)}
      {...props}
    >
      <path
        d="M7.80006 16.53C7.40618 16.5307 7.01605 16.4536 6.65206 16.3031C6.28807 16.1526 5.95741 15.9317 5.67906 15.653L0.0860596 10.061L1.50006 8.64597L7.09306 14.239C7.28059 14.4264 7.5349 14.5318 7.80006 14.5318C8.06522 14.5318 8.31953 14.4264 8.50706 14.239L22.5001 0.245972L23.9141 1.65997L9.92106 15.653C9.64271 15.9317 9.31205 16.1526 8.94806 16.3031C8.58407 16.4536 8.19394 16.5307 7.80006 16.53Z"
        fill="#FAA806"
      />
    </svg>
  );
};

export { CheckIcon };
