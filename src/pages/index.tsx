import Image from "next/image";
import { Inter } from "next/font/google";
import ImageCarousel from "@/components/Carousel/Imagecarousel";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/footer/Footer";
import Awards from "@/components/Awards";
import Card from "@/components/Carousel/Card";
import Header from "@/components/Header/Header";
import TextReader from "@/components/Textreader/Textreader";
import Component from "@/components/vo";
import Cardcarousel from "@/components/Carousel/Cardcarousel";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
   <>
   <Header />
   <ImageCarousel />
   <Cardcarousel/>
   <Card/>
   <Awards/>
   <TextReader/>
   <div className="absolute bottom-0 w-full">
   </div>
   </>
  );
}
