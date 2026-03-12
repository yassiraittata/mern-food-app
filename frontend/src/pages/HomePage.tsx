import landingImage from "../assets/landing.png"
import appDownloadImage from "../assets/appDownload.png"

const HomePage = () => {
  return (
    <div className="flex flex-col gap-12">
      <div className="-mt-16 flex flex-col gap-5 rounded-lg bg-white py-8 text-center shadow-md">
        <h1 className="font-bold tracking-tight text-orange-600 sm:text-xl md:text-3xl lg:text-5xl">
          Tuck into a takeway today
        </h1>
        <span className="text-sm sm:text-lg md:text-xl">
          Food is just a click away
        </span>
      </div>
      <div className="grid gap-5 md:grid-cols-2">
        <img src={landingImage} />
        <div className="flex flex-col items-center justify-center gap-4 text-center">
          <span className="text-3xl font-bold tracking-tighter">
            Order takeaway even faster!
          </span>
          <span>
            Download the MernEats App for faster ordering and personalised
            recommendations
          </span>
          <img src={appDownloadImage} />
        </div>
      </div>
    </div>
  )
}

export default HomePage
