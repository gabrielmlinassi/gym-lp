import React from 'react';
import { cnMerge } from 'utils/cn-merge';
import Spinner from 'components/spinner';

type ButtonProps = {
  children: React.ReactNode;
  fullWidth?: boolean;
  loading?: boolean;
  variant?: 'filled' | 'outlined';
  color?: 'primary' | 'secondary';
  size?: 'base' | 'lg';
} & React.ComponentProps<'button'>;

const s = {
  root: /*tw:*/ `inline-flex items-center justify-center h-fit rounded-full font-semibold duration-150 disabled:pointer-events-none disabled:opacity-75`,
  fullWidth: /*tw:*/ `w-full`,
  variants: {
    'filled.primary': /*tw:*/ `bg-[#FAA806] text-[#FFFFFF] hover:bg-[#EE9F04]`,
    'filled.secondary': /*tw:*/ `bg-[#373E4B] text-[#97A3B7] hover:bg-[#343A47]`,
    'outlined.primary': /*tw:*/ `border border-[#FAA806] text-[#FAA806]`,
    'outlined.secondary': /*tw:*/ `border border-[#373E4B] text-[#373E4B]`,
  },
  sizes: {
    base: /*tw:*/ `px-8 py-3 md:px-8 md:py-3`,
    lg: /*tw:*/ `px-12 py-5 md:px-12 md:py-5`,
  },
  spinner: {
    primary: /*tw:*/ `fill-[#bc7e03] text-white`,
    secondary: /*tw:*/ `fill-[#292e38] text-white`,
  },
};

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      variant = 'filled',
      color = 'primary',
      size = 'base',
      fullWidth,
      loading,
      disabled,
      className,
      ...props
    },
    forwardedRef
  ) => {
    const classes = cnMerge(
      s.root,
      s.variants[`${variant}.${color}`],
      s.sizes[size],
      { [s.fullWidth]: fullWidth },
      className
    );

    return (
      <button
        ref={forwardedRef}
        className={classes}
        disabled={disabled || loading}
        {...props}
      >
        {children}
        {loading && (
          <span className="ml-1.5">
            <Spinner className={s.spinner[color]} />
          </span>
        )}
      </button>
    );
  }
);

Button.displayName = 'Button';
export default Button;
