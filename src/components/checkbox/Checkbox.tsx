import React from 'react';
import { cnMerge } from 'utils/cn-merge';

type CheckboxProps = {
  label: React.ReactNode;
} & Omit<React.ComponentProps<'input'>, 'type'>;

const s = {
  input: /*tw:*/ `h-6 w-6 rounded-lg border-[#4A5465] mt-0.5 bg-[#252932] text-[#FAA806] checked:bg-[#FAA806] hover:ring-0`,
  label: /*tw:*/ `select-none font-proximaNova font-normal text-[#F8F8F9]`,
};

const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(
  ({ label, className, name, ...props }, forwardedRef) => {
    return (
      <div className="flex gap-2">
        <input
          type="checkbox"
          name={name}
          id={name}
          className={cnMerge(s.input, className)}
          ref={forwardedRef}
          {...props}
        />
        <label htmlFor={name} className={s.label}>
          {label}
        </label>
      </div>
    );
  }
);

Checkbox.displayName = 'Checkbox';
export default Checkbox;
