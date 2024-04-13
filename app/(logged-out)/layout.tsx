import { LightDarkToggle } from '@/components/light-dark-toggle'
import type { PropsWithChildren } from 'react'

const LoggedOutLayout = ({ children }: PropsWithChildren) => {
  return (
    <>
      <div className="flex min-h-screen flex-col items-center justify-center gap-4 p-24">
        {children}
      </div>
      <LightDarkToggle className="fixed right-2 top-[calc(50%-12px)]" />
    </>
  )
}

export default LoggedOutLayout
