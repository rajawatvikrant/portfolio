"use client";
import React from "react";
import { BackgroundBeams } from "@/components/ui/background-boxes";
import { FlipWords } from "@/components/ui/flip-words";
import { TextGenerateEffect } from "@/components/ui/text-generator-effect";

const Intro = () => {
  const skills = [
    "Web Developer",
    "Front End Developer",
    "React Developer",
    "Freelance Web Developer",
    "UI Designer",
    "UI Developer",
  ];
  const summary = ` With over 3 years of experience in developing dynamic and user-centric web applications, I specialize in transforming ideas into impactful digital experiences. My passion lies in creating intuitive designs and seamless functionality that resonate with users. Explore my work to see how I bring innovative projects to life!`;
  return (
    <section id="Intro">
      <div className="h-screen overflow-hidden w-full bg-no-repeat bg-cover intro-sec relative flex flex-col items-center justify-center antialiased">
        <div className="w-full custom-container flex">
          <div className="font-normal text-neutral-100 ">
            <p className="md:text-3xl text-xl mb-3">Hello I'm</p>
            <h1 className=" lg:text-5xl md:text-3xl text-xl">
              Vikrant Rajawat a <div  className="md:inline md:mt-0 mt-2 block"> &lt;
              <FlipWords words={skills} />
              /&gt;</div>
            </h1>
            <div className="md:text-xl text-base font-normal max-w-6xl md:mt-6 mt-4 ">
            <TextGenerateEffect words={summary} className="font-normal leading-[1.6em] " />
            </div>
          </div>
        </div>
        <BackgroundBeams />
      </div>
    </section>
  );
};

export default Intro;
