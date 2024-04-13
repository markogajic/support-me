'uce client'

import * as React from 'react'

import { cn } from '@/lib/utils'
import { EyeIcon, EyeOffIcon } from 'lucide-react'
import { Input } from './ui/input'

export interface PasswordInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const PasswordInput = React.forwardRef<HTMLInputElement, PasswordInputProps>(
  ({ className, ...props }, ref) => {
    const [showPassword, setShowPassword] = React.useState(false)
    return (
      <div className="relative">
        <Input
          type={showPassword ? 'text' : 'password'}
          {...props}
          ref={ref}
          className={cn('pr-10', className)}
        />
        <span className="absolute right-1 top-[7px] cursor-pointer select-none">
          {showPassword ? (
            <EyeIcon onClick={() => setShowPassword(false)} />
          ) : (
            <EyeOffIcon onClick={() => setShowPassword(true)} />
          )}
        </span>
      </div>
    )
  },
)
PasswordInput.displayName = 'PasswordInput'

export { PasswordInput }
