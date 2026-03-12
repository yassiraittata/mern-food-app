import { Link } from "react-router-dom"

const Footer = () => {
  return (
    <div className="bg-orange-500 py-10">
      <div className="container mx-auto flex flex-col items-center justify-between md:flex-row">
        <span className="text-3xl font-bold tracking-tight text-white">
          MernEats.com
        </span>
        <span className="flex gap-4 font-bold tracking-tight text-white">
          <Link to="/privacy">Privacy Policy</Link>
          <Link to="/term-of-use">Terms of Service</Link>
        </span>
      </div>
    </div>
  )
}

export default Footer
