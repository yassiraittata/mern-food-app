import { Link } from "react-router-dom"
import MobbileNav from "./MobbileNav"

const Header = () => {
  return (
    <div className="border-b-2 border-b-orange-500 py-6">
      <div className="container mx-auto flex items-center justify-between">
        <Link
          className="text-3xl font-bold tracking-tight text-orange-500"
          to="/"
        >
          Foodie.com
        </Link>
        <div className="md:hidden">
            <MobbileNav />

        </div>
      </div>
    </div>
  )
}

export default Header
