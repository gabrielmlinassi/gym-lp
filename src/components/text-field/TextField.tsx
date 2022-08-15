import React, { useReducer } from 'react';
import { cnMerge } from 'utils/cn-merge';
import { EyeIcon, EyeOffIcon } from 'components/icons';
// import { FieldValues, UseFormRegister } from 'react-hook-form';

type TextFieldProps = {
  label: string;
  fullWidth?: boolean;
  error?: string;
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
  error: /*tw:*/ `border-red-500`,
};

const TextField = React.forwardRef<HTMLInputElement, TextFieldProps>(
  ({ fullWidth, label, name, error, type, className, ...props }, forwardedRef) => {
    const [isPwdVisible, togglePwdVisibility] = useReducer((s) => !s, false);

    return (
      <div className={cnMerge(classes.root, { [classes.fullWidth]: fullWidth })}>
        <label className={classes.label} htmlFor={name}>
          {label}
        </label>
        <div className={cnMerge(classes.inputWrap, [error && classes.error])}>
          <input
            name={name}
            id={name}
            className={cnMerge(classes.input, className)}
            type={isPwdVisible ? 'text' : type}
            ref={forwardedRef}
            {...props}
          />
          {type === 'password' && (
            <button
              onClick={togglePwdVisibility}
              className={classes.btn}
              type="button"
              tabIndex={-1}
            >
              {isPwdVisible ? (
                <EyeOffIcon className={classes.icon} />
              ) : (
                <EyeIcon className={classes.icon} />
              )}
            </button>
          )}
        </div>
        {error && <span className="mt-0.5 text-sm text-red-400">{error}</span>}
      </div>
    );
  }
);

TextField.displayName = 'TextField';
export default TextField;
