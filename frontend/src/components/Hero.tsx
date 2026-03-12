import hero from "../assets/hero.png"

const Hero = () => {
  return (
    <div>
      <img src={hero} className="max-h-150 w-full object-cover" />
    </div>
  )
}

export default Hero
