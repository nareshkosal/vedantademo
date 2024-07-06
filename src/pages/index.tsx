import Image from "next/image";
import { Inter } from "next/font/google";
import ImageCarousel from "@/components/Carousel/Imagecarousel";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/footer/Footer";
import Awards from "@/components/Awards";
import Card from "@/components/Carousel/Cardcarousel";
import Header from "@/components/Header/Header";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
   <>
   <Header />
   <ImageCarousel />
   <Card/>
   <Awards/>
   <div className="absolute bottom-0 w-full">
   </div>
   </>
  );
}
