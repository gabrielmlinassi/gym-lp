import React from 'react';
import { cnMerge } from 'utils/cn-merge';

type CheckboxProps = {
  label: React.ReactNode;
} & Omit<React.ComponentProps<'input'>, 'type'>;

const s = {
  input: /*tw:*/ `h-6 w-6 rounded-lg border-gray-400 mt-0.5 bg-gray-550 text-yellow-500 checked:bg-yellow-500 hover:ring-0 focus:ring-0`,
  label: /*tw:*/ `select-none font-proximaNova font-normal text-gray-100`,
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
