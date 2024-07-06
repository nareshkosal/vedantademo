import Image from "next/image";
import { Inter } from "next/font/google";
import ImageCarousel from "@/components/Imagecarousel";
import Navbar from "@/components/Navbar/Navbar";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
   <>
   <Navbar />
   <ImageCarousel />
   </>
  );
}
