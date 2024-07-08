/**
 * v0 by Vercel.
 * @see https://v0.dev/t/4mroPhmDZMS
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Image from 'next/image';
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { JSX, SVGProps } from "react"

export default function Component() {
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="flex items-center justify-between p-4 bg-white shadow-md">
        <div className="flex items-center space-x-4">
          <button className="p-2 text-gray-700 bg-gray-200 rounded-md">
            <MenuIcon className="w-6 h-6" />
          </button>
          <nav className="hidden space-x-4 md:flex">
            <Link href="#" className="text-gray-700" prefetch={false}>
              Home
            </Link>
            <Link href="#" className="text-gray-700" prefetch={false}>
              About Us
            </Link>
            <Link href="#" className="text-gray-700" prefetch={false}>
              Services
            </Link>
            <Link href="#" className="text-gray-700" prefetch={false}>
              Shop
            </Link>
            <Link href="#" className="text-gray-700" prefetch={false}>
              Pages
            </Link>
            <Link href="#" className="text-gray-700" prefetch={false}>
              Blog
            </Link>
            <Link href="#" className="text-gray-700" prefetch={false}>
              Contact Us
            </Link>
          </nav>
        </div>
        <Button className="bg-orange-500 text-white">Get a Quote</Button>
      </header>
      <main className="relative">
        <div
          className="relative h-[500px] bg-cover bg-center"
          style={{ backgroundImage: "url('/placeholder.svg?height=500&width=1200')" }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-50" />
          <div className="relative z-10 flex flex-col items-start justify-center h-full p-8 space-y-4 text-white">
            <h1 className="text-4xl font-bold">
              We will provide the best <span className="text-orange-500">Industrial</span> service
            </h1>
            <p className="text-lg">
              We are the best guaranteed company to serve you. We are dedicated to help you any time.
            </p>
            <Button className="bg-orange-500 text-white">Learn more</Button>
          </div>
        </div>
        <div className="absolute left-4 top-1/2 transform -translate-y-1/2">
          <button className="p-2 bg-gray-700 rounded-full">
            <ChevronLeftIcon className="w-6 h-6 text-white" />
          </button>
        </div>
        <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
          <button className="p-2 bg-gray-700 rounded-full">
            <ChevronRightIcon className="w-6 h-6 text-white" />
          </button>
        </div>
      </main>
      <section className="grid grid-cols-1 gap-4 p-8 md:grid-cols-3">
  <Card className="relative">
    <Image 
      src="/placeholder.svg" 
      alt="Fuel & Gas Management" 
      className="w-full h-48 object-cover" 
      layout="fill" 
      objectFit="cover" 
    />
    <div className="absolute inset-0 bg-black bg-opacity-50" />
    <div className="relative z-10 p-4 text-white">
      <FuelIcon className="w-6 h-6 text-orange-500" />
      <h3 className="mt-2 text-lg font-bold">Fuel & Gas Management</h3>
    </div>
  </Card>
  <Card className="relative">
    <Image 
      src="/placeholder.svg" 
      alt="Chemical Research" 
      className="w-full h-48 object-cover" 
      layout="fill" 
      objectFit="cover" 
    />
    <div className="absolute inset-0 bg-black bg-opacity-50" />
    <div className="relative z-10 p-4 text-white">
      <FlaskRoundIcon className="w-6 h-6 text-orange-500" />
      <h3 className="mt-2 text-lg font-bold">Chemical Research</h3>
    </div>
  </Card>
  <Card className="relative">
    <Image 
      src="/placeholder.svg" 
      alt="Power & Energy Sector" 
      className="w-full h-48 object-cover" 
      layout="fill" 
      objectFit="cover" 
    />
    <div className="absolute inset-0 bg-black bg-opacity-50" />
    <div className="relative z-10 p-4 text-white">
      <PowerIcon className="w-6 h-6 text-orange-500" />
      <h3 className="mt-2 text-lg font-bold">Power & Energy Sector</h3>
    </div>
  </Card>
</section>
    </div>
  )
}

function ChevronLeftIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m15 18-6-6 6-6" />
    </svg>
  )
}


function ChevronRightIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m9 18 6-6-6-6" />
    </svg>
  )
}


function FlaskRoundIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M10 2v7.31" />
      <path d="M14 9.3V1.99" />
      <path d="M8.5 2h7" />
      <path d="M14 9.3a6.5 6.5 0 1 1-4 0" />
      <path d="M5.52 16h12.96" />
    </svg>
  )
}


function FuelIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="3" x2="15" y1="22" y2="22" />
      <line x1="4" x2="14" y1="9" y2="9" />
      <path d="M14 22V4a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v18" />
      <path d="M14 13h2a2 2 0 0 1 2 2v2a2 2 0 0 0 2 2h0a2 2 0 0 0 2-2V9.83a2 2 0 0 0-.59-1.42L18 5" />
    </svg>
  )
}


function MenuIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  )
}


function PowerIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 2v10" />
      <path d="M18.4 6.6a9 9 0 1 1-12.77.04" />
    </svg>
  )
}