import Image from "next/image";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/footer/Footer";
import Awards from "@/components/Awards";
import Card from "@/components/Carousel/Card";
import Header from "@/components/Header/Header";
import TextReader from "@/components/Textreader/Textreader";
import Component from "@/components/vo";
import Cardcarousel from "@/components/Carousel/Cardcarousel";
import Company from "@/components/vo";
import { ImagesSliderDemo } from "@/components/Carousel/Imagecarousel";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
   <>
   <Header />
   <ImagesSliderDemo />
   {/* <Card/> */}
   <Company/>
   <Footer />
   </>
  );
}
