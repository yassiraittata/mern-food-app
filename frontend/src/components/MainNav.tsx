import { useAuth0 } from "@auth0/auth0-react"
import { Button } from "./ui/button"
import UsernameMenu from "./UsernameMenu"

const MainNav = () => {
  const { loginWithRedirect, isAuthenticated } = useAuth0()
  return (
    <>
      {isAuthenticated ? (
        <UsernameMenu />
      ) : (
        <Button
          variant="ghost"
          className="cursor-pointer font-bold hover:bg-white hover:text-orange-500"
          onClick={async () => await loginWithRedirect()}
        >
          Log in
        </Button>
      )}
    </>
  )
}

export default MainNav
