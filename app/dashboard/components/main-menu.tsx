import { LightDarkToggle } from '@/components/light-dark-toggle'
import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import { cn } from '@/lib/utils'
import Link from 'next/link'
import { MenuItem } from './menu-item'
import { MenuTitle } from './menu-title'

type Props = {
  className?: string
}

const MainMenu = ({ className }: Props) => {
  return (
    <nav
      className={cn('flex flex-col overflow-auto p-4 md:bg-muted', className)}
    >
      <header className="hidden border-b border-b-zinc-300 pb-4 dark:border-b-black md:block">
        <MenuTitle />
      </header>
      <ul className="grow py-4">
        <MenuItem href="/dashboard">My dashboard</MenuItem>
        <MenuItem href="/dashboard/teams">Teams</MenuItem>
        <MenuItem href="/dashboard/employees">Employees</MenuItem>
        <MenuItem href="/dashboard/account">Account</MenuItem>
        <MenuItem href="/dashboard/settings">Settings</MenuItem>
      </ul>
      <footer className="flex items-center gap-2">
        <Avatar>
          <AvatarFallback className="bg-pink-300 dark:bg-pink-800">
            TP
          </AvatarFallback>
        </Avatar>
        <Link href="/" className="hover:underline">
          Logout
        </Link>
        <LightDarkToggle className="ml-auto" />
      </footer>
    </nav>
  )
}

export { MainMenu }
