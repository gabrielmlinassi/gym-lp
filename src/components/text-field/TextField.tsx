import React, { useReducer } from 'react';
import { cnMerge } from 'utils/cn-merge';
import { EyeIcon, EyeOffIcon } from 'components/icons';

type TextFieldProps = {
  label: string;
  fullWidth?: boolean;
  /** This component doesn't accept type='checkbox'. Please, use Checkbox component instead */
  type: Exclude<React.ComponentProps<'input'>['type'], 'checkbox'>;
} & Omit<React.ComponentProps<'input'>, 'type'>;

const classes = {
  root: /*tw:*/ `group inline-flex flex-col`,
  fullWidth: /*tw:*/ 'w-full',
  label: /*tw:*/ `mb-2 text-white select-none`,
  inputWrap: /*tw:*/ `flex items-center gap-1.5 rounded-lg border border-[#4A5465] bg-[#252932] h-12 group-focus-within:border-[#FAA806]`,
  input: /*tw:*/ `w-full px-4 bg-transparent text-white caret-[#FAA806] outline-none border-none focus:ring-0`,
  btn: /*tw:*/ `mr-3 flex items-center justify-center rounded p-1 hover:bg-black hover:bg-opacity-10 outline-none`,
  icon: /*tw:*/ `group-focus-within:text-[#FAA806]`,
};

const TextField = ({
  fullWidth,
  label,
  name,
  type,
  className,
  ...props
}: TextFieldProps) => {
  const [isPwdVisible, togglePwdVisibility] = useReducer((s) => !s, false);

  return (
    <div className={cnMerge(classes.root, { [classes.fullWidth]: fullWidth })}>
      <label className={classes.label} htmlFor={name}>
        {label}
      </label>
      <div className={classes.inputWrap}>
        <input
          name={name}
          id={name}
          className={cnMerge(classes.input, className)}
          type={isPwdVisible ? 'text' : type}
          {...props}
        />
        {type === 'password' && (
          <button onClick={togglePwdVisibility} className={classes.btn}>
            {isPwdVisible ? (
              <EyeOffIcon className={classes.icon} />
            ) : (
              <EyeIcon className={classes.icon} />
            )}
          </button>
        )}
      </div>
    </div>
  );
};

export default TextField;
