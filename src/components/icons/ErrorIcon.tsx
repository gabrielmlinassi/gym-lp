import { SVGProps } from 'react';
import { twMerge } from 'tailwind-merge';

const ErrorIcon = ({ className, ...props }: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      className={twMerge('h-4 w-4 text-red', className)}
      {...props}
    >
      <path
        d="M12 24C9.62663 24 7.30655 23.2962 5.33316 21.9776C3.35977 20.6591 1.8217 18.7849 0.913451 16.5922C0.00519943 14.3995 -0.232441 11.9867 0.230582 9.65892C0.693605 7.33115 1.83649 5.19295 3.51472 3.51472C5.19295 1.83649 7.33115 0.693605 9.65892 0.230582C11.9867 -0.232441 14.3995 0.00519943 16.5922 0.913451C18.7849 1.8217 20.6591 3.35977 21.9776 5.33316C23.2962 7.30655 24 9.62663 24 12C23.9966 15.1815 22.7312 18.2318 20.4815 20.4815C18.2318 22.7312 15.1815 23.9966 12 24ZM12 2.00001C10.0222 2.00001 8.08879 2.5865 6.4443 3.68531C4.79981 4.78412 3.51809 6.34591 2.76121 8.17317C2.00433 10.0004 1.8063 12.0111 2.19215 13.9509C2.578 15.8907 3.53041 17.6725 4.92894 19.0711C6.32746 20.4696 8.10929 21.422 10.0491 21.8079C11.9889 22.1937 13.9996 21.9957 15.8268 21.2388C17.6541 20.4819 19.2159 19.2002 20.3147 17.5557C21.4135 15.9112 22 13.9778 22 12C21.9971 9.34873 20.9426 6.80689 19.0679 4.93215C17.1931 3.05742 14.6513 2.00292 12 2.00001Z"
        fill="currentColor"
      />
      <path d="M11 5.00001H13V15H11V5.00001Z" fill="currentColor" />
      <path d="M11 17H13V19H11V17Z" fill="currentColor" />
    </svg>
  );
};

export { ErrorIcon };
