import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Footer() {
  return (
    <footer className="bg-gray-100 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-gray-600">&copy; {new Date().getFullYear()} Fishnet. All rights reserved.</p>
          </div>
          <div className="flex items-center space-x-4">
            <a href="mailto:admin@fishtank.live" className="text-gray-600 hover:text-black transition-colors">
              admin@fishtank.live
            </a>
            <Button asChild>
              <Link href="https://boards.fishnet.gg">Advertise</Link>
            </Button>
            <Button asChild variant="outline">
              <Link href="https://docs.fishtank.live/pages/about">Docs</Link>
            </Button>
          </div>
        </div>
      </div>
    </footer>
  )
}
