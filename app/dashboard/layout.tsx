'use client'

import { Drawer, DrawerContent, DrawerTrigger } from '@/components/ui/drawer'
import { useMediaQuery } from '@/hooks/use-media-query'
import { MenuIcon } from 'lucide-react'
import { useState, type PropsWithChildren } from 'react'
import { MainMenu } from './components/main-menu'
import { MenuTitle } from './components/menu-title'

const DashboardLayout = ({ children }: PropsWithChildren) => {
  const isDesktop = useMediaQuery('(min-width: 768px)')

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="h-screen md:grid md:grid-cols-[250px_1fr]">
      <MainMenu className="hidden md:flex" />
      <div className="sticky left-0 top-0 flex justify-between border-b border-border bg-background p-4 md:hidden">
        <MenuTitle />
        <Drawer
          direction="right"
          open={mobileMenuOpen && !isDesktop}
          onOpenChange={(open) => !isDesktop && setMobileMenuOpen(open)}
        >
          <DrawerTrigger aria-label="Open menu">
            <MenuIcon />
          </DrawerTrigger>
          <DrawerContent>
            <MainMenu />
          </DrawerContent>
        </Drawer>
      </div>
      <div className="overflow-auto px-4 py-2">
        <h1 className="pb-4">Welcome back, Tom!</h1>
        {children}
      </div>
    </div>
  )
}

export default DashboardLayout
