import { Menu } from "lucide-react"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet"
import { Separator } from "./ui/separator"
import { Button } from "./ui/button"

const MobbileNav = () => {
  return (
    <Sheet>
      <SheetTrigger>
        <Menu className="text-orange-500" />
      </SheetTrigger>
      <SheetContent className="space-y-3">
        <SheetTitle>
          <span>Welcome to Foodie.com!</span>
        </SheetTitle>
        <Separator />
        <SheetDescription className="flex">
          <Button className="flex-1 bg-orange-500 font-bold" variant="default">
            Log in
          </Button>
        </SheetDescription>
      </SheetContent>
    </Sheet>
  )
}

export default MobbileNav
