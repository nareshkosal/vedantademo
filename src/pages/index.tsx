import Image from "next/image";
import { Inter } from "next/font/google";
import ImageCarousel from "@/components/Imagecarousel";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/footer/Footer";
import Awards from "@/components/Awards";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
   <>
   <Navbar />
   <ImageCarousel />
   <Awards/>
   <div className="absolute bottom-0 w-full">
   <Footer/>
   </div>
   </>
  );
}
