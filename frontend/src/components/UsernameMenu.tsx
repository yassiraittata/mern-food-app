import { User, UserRound, LogOutIcon } from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu"
import { useAuth0 } from "@auth0/auth0-react"
import { Link } from "react-router-dom"
import { Separator } from "./ui/separator"
import { Button } from "./ui/button"

const UsernameMenu = () => {
  const { user, logout } = useAuth0()

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="flex items-center gap-2 px-3 font-bold hover:text-orange-500">
        <User className="text-orange-500" />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="bg-neutral-primary-medium border-default-medium rounded-base text-body z-10 w-52 overflow-hidden border bg-white p-2 text-center text-sm font-medium shadow-lg">
        <DropdownMenuItem>
          <p className="inline-flex w-full items-center rounded p-2">
            {user?.email}
          </p>
        </DropdownMenuItem>
        <Separator />
        <DropdownMenuItem className="mt-1 text-center hover:bg-gray-200">
          <Link
            to="/user-profile"
            className="hover:bg-neutral-tertiary-medium hover:text-heading inline-flex w-full items-center rounded p-2"
          >
            <span>
              <UserRound className="h-4 text-gray-500" />
            </span>
            Profile
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem className="flex w-full">
          <Button
            onClick={() => logout()}
            className="text-body border-default hover:text-heading inline-flex w-full cursor-pointer items-center rounded-sm border bg-white px-4 py-2.5 leading-5 font-medium shadow-xs hover:border-orange-300 hover:bg-orange-300 focus:outline-none"
          >
            <LogOutIcon />
            Logout
          </Button>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default UsernameMenu
