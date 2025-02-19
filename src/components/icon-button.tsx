import { type ComponentProps, ReactNode } from 'react'
import { twMerge } from 'tailwind-merge'

interface IconButtonProps extends ComponentProps<'button'> {}

export function IconButton({ className, ...props }: IconButtonProps) {
  return (
    <button
      className={twMerge(
        'text-blue hover:bg-blue cursor-pointer rounded-md bg-gray-500 p-1.5 transition-colors duration-300 hover:text-gray-900',
        className
      )}
      {...props}
    />
  )
}
