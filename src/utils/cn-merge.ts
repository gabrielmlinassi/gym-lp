import cn, { Argument } from 'classnames'
import { twMerge } from 'tailwind-merge'

/**
 * Works just like `twMerge`, but uses built-in `classNames`.
 */
export function cnMerge(...classNames: Argument[]) {
  return twMerge(cn(classNames))
}
