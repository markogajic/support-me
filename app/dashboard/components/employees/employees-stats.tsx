import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import cm from '@/public/images/cm.jpg'
import {
  AlertTriangleIcon,
  BadgeCheckIcon,
  LaptopIcon,
  PartyPopperIcon,
  UserCheck2Icon,
  UserIcon,
  UserRoundXIcon,
} from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { WorkLocationTrends } from './work-location-trends'

const EmployeesStats = () => {
  const totalEmployees = 100
  const employeesPresent = 80
  const employeesPresentPercentage = (employeesPresent / totalEmployees) * 100

  return (
    <>
      <div className="grid gap-4 lg:grid-cols-3">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-base">Total employees</CardTitle>
          </CardHeader>
          <CardContent className="flex items-center justify-between">
            <div className="flex gap-2">
              <UserIcon />
              <div className="text-5xl font-bold">{totalEmployees}</div>
            </div>
            <div>
              <Button asChild size="xs">
                <Link href="/dashboard/employees">View all</Link>
              </Button>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-base">Employees present</CardTitle>
          </CardHeader>
          <CardContent className="flex items-center justify-between">
            <div className="flex gap-2">
              {employeesPresentPercentage > 75 ? (
                <UserCheck2Icon />
              ) : (
                <UserRoundXIcon />
              )}
              <div className="text-5xl font-bold">{employeesPresent}</div>
            </div>
            <div>
              <Button asChild size="xs">
                <Link href="/dashboard/employees">View all</Link>
              </Button>
            </div>
          </CardContent>
          <CardFooter>
            {employeesPresentPercentage > 75 ? (
              <span className="flex items-center gap-1 text-xs text-green-500">
                <BadgeCheckIcon />
                {employeesPresentPercentage}% of employees are present
              </span>
            ) : (
              <span className="flex items-center gap-1 text-xs text-red-500">
                <AlertTriangleIcon />
                Only {employeesPresentPercentage}% of employees are present
              </span>
            )}
          </CardFooter>
        </Card>
        <Card className="flex flex-col border-pink-500">
          <CardHeader className="pb-2">
            <CardTitle className="text-base">Employee of the month</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center gap-2">
              <Avatar>
                <Image src={cm} alt="Employee of the month" />
                <AvatarFallback>CM</AvatarFallback>
              </Avatar>
              <span className="text-2xl">Colin Murray!</span>
            </div>
          </CardContent>
          <CardFooter className="mt-auto flex items-center gap-2 text-xs text-muted-foreground">
            <PartyPopperIcon className="text-pink-500" />
            <span>Congatulations, Colin!</span>
          </CardFooter>
        </Card>
      </div>
      <Card className="my-4">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-lg">
            <LaptopIcon />
            <span>Employee work location trends</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <WorkLocationTrends />
        </CardContent>
      </Card>
    </>
  )
}

export { EmployeesStats }
