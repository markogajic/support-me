import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip'
import cm from '@/public/images/cm.jpg'
import rl from '@/public/images/rl.jpg'
import tf from '@/public/images/tf.jpg'
import { ListChecksIcon, PieChartIcon, StarIcon, UsersIcon } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { SupportTicketsResolved } from './support-tickets-resolved'
import TeamDistributionChart from './team-distribution-chart'

const teamLeaders = [
  {
    firstName: 'Colin',
    lastName: 'Murray',
    avatar: cm,
  },
  {
    firstName: 'Tom',
    lastName: 'Phillips',
  },
  {
    firstName: 'Liam',
    lastName: 'Fuentes',
  },
  {
    firstName: 'Tina',
    lastName: 'Fey',
    avatar: tf,
  },
  {
    firstName: 'Katie',
    lastName: 'Johnson',
  },
  {
    firstName: 'Tina',
    lastName: 'Jones',
  },
  {
    firstName: 'Amy',
    lastName: 'Adams',
  },
  {
    firstName: 'Ryan',
    lastName: 'Lopez',
    avatar: rl,
  },
  {
    firstName: 'Jenny',
    lastName: 'Jones',
  },
]

const TeamsStats = () => {
  return (
    <>
      <div className="grid gap-4 lg:grid-cols-3">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-base">Total teams</CardTitle>
          </CardHeader>
          <CardContent className="flex items-center justify-between">
            <div className="flex gap-2">
              <UsersIcon />
              <div className="text-5xl font-bold">8</div>
            </div>
            <div>
              <Button asChild size="xs">
                <Link href="/dashboard/teams">View all</Link>
              </Button>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="flex items-center justify-between text-base">
              <span>Team leaders</span>
              <StarIcon className="text-yellow-400" />
            </CardTitle>
          </CardHeader>
          <CardContent className="flex flex-wrap gap-2">
            {teamLeaders.map((teamLeader) => (
              <TooltipProvider
                key={`${teamLeader.firstName}${teamLeader.lastName}`}
              >
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Avatar>
                      {teamLeader.avatar && (
                        <Image
                          src={teamLeader.avatar}
                          alt={`${teamLeader.firstName} ${teamLeader.lastName} avatar`}
                        />
                      )}
                      <AvatarFallback>
                        {teamLeader.firstName[0]}
                        {teamLeader.lastName[0]}
                      </AvatarFallback>
                    </Avatar>
                  </TooltipTrigger>
                  <TooltipContent>
                    {teamLeader.firstName} {teamLeader.lastName}
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            ))}
          </CardContent>
        </Card>
        <Card className="flex flex-col border-pink-500">
          <CardHeader className="pb-2">
            <CardTitle className="flex items-center justify-between text-base">
              <span>Team distribution</span>
              <PieChartIcon />
            </CardTitle>
          </CardHeader>
          <CardContent>
            <TeamDistributionChart />
          </CardContent>
        </Card>
      </div>
      <Card className="my-4">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-lg">
            <ListChecksIcon />
            <span>Support tickets resolved</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="pl-0">
          <SupportTicketsResolved />
        </CardContent>
      </Card>
    </>
  )
}

export { TeamsStats }
