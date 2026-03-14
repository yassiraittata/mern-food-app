import { User } from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu"
import { useAuth0 } from "@auth0/auth0-react"
import { Link } from "react-router-dom"

const UsernameMenu = () => {
  const { user } = useAuth0()
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="flex items-center gap-2 px-3 font-bold hover:text-orange-500">
        <User className="text-orange-500" />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="bg-neutral-primary-medium border-default-medium rounded-base z-10 w-48 border bg-white shadow-lg">
        <ul
          className="text-body p-2 text-center text-sm font-medium"
          aria-labelledby="dropdownDefaultButton"
        >
          <li className="border-b">
            <p className="hover:bg-neutral-tertiary-medium h inline-flex w-full items-center rounded p-2">
              {user?.email}
            </p>
          </li>
          <li className="text-center">
            <Link
              to="#"
              className="hover:bg-neutral-tertiary-medium hover:text-heading inline-flex w-full items-center rounded p-2"
            >
              Dashboard
            </Link>
          </li>
          <li className="text-center">
            <Link
              to="#"
              className="hover:bg-neutral-tertiary-medium hover:text-heading inline-flex w-full items-center rounded p-2"
            >
              Settings
            </Link>
          </li>
          <li className="text-center">
            <Link
              to="#"
              className="hover:bg-neutral-tertiary-medium hover:text-heading inline-flex w-full items-center rounded p-2"
            >
              Earnings
            </Link>
          </li>
          <li className="text-center">
            <Link
              to="#"
              className="hover:bg-neutral-tertiary-medium hover:text-heading inline-flex w-full items-center rounded p-2"
            >
              Sign out
            </Link>
          </li>
        </ul>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default UsernameMenu
