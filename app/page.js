"use client";

import React, { useState } from "react";
import { BackgroundGradientAnimation } from "@/components/ui/background-gradient-animation";
import coder from "../public/images/coder.gif";
import Image from "next/image";
import Intro from "@/pages/Intro";
import Header from "@/pages/Header";
import About from "@/pages/About";
import Experience from "@/pages/Experience";

const Home = () => {
  const [display, setDisplay] = useState({ home: false, animate: false });

  const PageTransition = () => {
    setDisplay((prev) => ({ ...prev, animate: !display.animate }));
    setTimeout(() => {
      setDisplay((prev) => ({ ...prev, home: !display.home }));
    }, 500);
  };

  return (
    <>
      {!display.home ? (
        <BackgroundGradientAnimation>
          <div className="absolute z-50 pointer-events-none inset-0 flex flex-col gap-4 items-center justify-center text-white font-bold px-4  text-3xl text-center md:text-4xl lg:text-5xl">
            <div
              onClick={PageTransition}
              className={`profileTooltip lg:p-14 p-5 pointer-events-auto rounded-full cursor-pointer w-64 h-64 bg-gradient-to-t from-white/60 to-white/10 flex items-center justify-center relative ${
                display.animate ? "homeAnimation" : ""
              }`}
              >
              <Image src={coder} alt="Coder GIF" width={180} height={180} />
            </div>
            <p className="bg-clip-text text-transparent drop-shadow-2xl pb-1.5 bg-gradient-to-b from-white/80 to-white/20 pointer-events-none">
              &lt; Vikrant Rajawat /&gt;{" "}
            </p>
          </div>
        </BackgroundGradientAnimation>
      ) : (
        <>
        <Header/>
        <Intro />
        <About/>
        <Experience/>
        </>
      )}
    </>
  );
};

export default Home;
