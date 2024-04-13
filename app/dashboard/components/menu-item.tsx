'use client'

import { DrawerContext } from '@/components/ui/drawer'
import { cn } from '@/lib/utils'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useContext, type PropsWithChildren } from 'react'

type Props = { href: string }

const MenuItem = ({ children, href }: PropsWithChildren<Props>) => {
  const { onClose } = useContext(DrawerContext)
  const pathname = usePathname()
  const isActive = pathname === href

  return (
    <li>
      <Link
        href={href}
        className={cn(
          'block rounded-md p-2 text-muted-foreground hover:bg-white hover:text-foreground dark:hover:bg-zinc-700',
          {
            'bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground dark:hover:bg-primary':
              isActive,
          },
        )}
        onClick={onClose}
      >
        {children}
      </Link>
    </li>
  )
}

export { MenuItem }
