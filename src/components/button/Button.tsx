import s from './Button.module.css'
import React from 'react'
import cn from 'classnames'
import Spinner from 'components/spinner'

type ButtonProps = {
  children: React.ReactNode
  fullWidth?: boolean
  loading?: boolean
  variant?: 'filled' | 'outlined'
  color?: 'primary' | 'secondary'
  size?: 'base' | 'lg'
} & Omit<React.ComponentProps<'button'>, 'className'>

const Button = ({
  children,
  variant = 'filled',
  color = 'primary',
  size = 'base',
  fullWidth,
  loading,
  disabled,
  ...props
}: ButtonProps) => {
  const classes = cn(s.root, s[variant], s[color], s[size], {
    [s.fullWidth]: fullWidth,
  })

  return (
    <button className={classes} disabled={disabled || loading} {...props}>
      {children}
      {loading && (
        <span className="ml-1.5">
          <Spinner className={s.spinner} />
        </span>
      )}
    </button>
  )
}

export default Button
