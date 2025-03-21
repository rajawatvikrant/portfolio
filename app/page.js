import React from "react";
import { BackgroundGradientAnimation } from "@/components/ui/background-gradient-animation";
import coder from "../public/images/coder.gif";
import Image from "next/image";

function Home() {

  const words = [{text:"Hello"}];

  return (
    <>
    <BackgroundGradientAnimation>
      <div className="absolute z-50 inset-0 flex flex-col gap-4 items-center justify-center text-white font-bold px-4 pointer-events-none text-3xl text-center md:text-4xl lg:text-7xl">
        <div className="p-16 rounded-full w-fit bg-gradient-to-t from-white/60 to-white/10">
          <Image
           src={coder} 
           alt="Coder GIF"
           width={250} 
           height={250} 
          />
          </div>
          <p className="bg-clip-text text-transparent drop-shadow-2xl pb-1.5 bg-gradient-to-b from-white/80 to-white/20">&lt; Vikrant Rajawat /&gt; </p>
      </div>
    </BackgroundGradientAnimation>
    <div className="pageLoad"></div>
    </>
  );
}

export default Home;