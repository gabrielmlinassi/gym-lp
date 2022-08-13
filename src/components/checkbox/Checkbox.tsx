import React from 'react';
import { cnMerge } from 'utils/cn-merge';

type CheckboxProps = {
  label: React.ReactNode;
} & Omit<React.ComponentProps<'input'>, 'type'>;

const s = {
  input: /*tw:*/ `h-6 w-6 rounded-lg border-[#4A5465] bg-[#252932] text-[#FAA806] checked:bg-[#FAA806] hover:ring-0`,
  label: /*tw:*/ `select-none font-proximaNova font-normal text-[#F8F8F9]`,
};

const Checkbox = ({ label, className, ...props }: CheckboxProps) => {
  return (
    <div className="flex items-center gap-2">
      <input type="checkbox" className={cnMerge(s.input, className)} {...props} />
      <label htmlFor="terms" className={s.label}>
        {label}
      </label>
    </div>
  );
};

export default Checkbox;
