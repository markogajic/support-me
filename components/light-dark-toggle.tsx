'use client'

import { MoonIcon, SunIcon } from 'lucide-react'
import { useState } from 'react'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from './ui/tooltip'

type Props = {
  className?: string
}

const LightDarkToggle = ({ className }: Props) => {
  const [isDarkMode, setIsDarkMode] = useState(true)

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger
          aria-label={isDarkMode ? 'Enable light mode' : 'Enable dark mode'}
          className={className}
          onClick={() => {
            setIsDarkMode((isDarkMode) => !isDarkMode)
            document.documentElement.classList.toggle('dark')
          }}
        >
          {isDarkMode ? <MoonIcon /> : <SunIcon />}
        </TooltipTrigger>
        <TooltipContent>
          {isDarkMode ? 'Enable light mode' : 'Enable dark mode'}
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}

export { LightDarkToggle }
