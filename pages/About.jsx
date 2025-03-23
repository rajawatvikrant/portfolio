"use client";

import Image from "next/image";
import { Tabs } from "@/components/ui/tabs";
import { IconBrandHtml5, IconBrandCss3, IconBrandJavascript, IconBrandReact, IconBrandNextjs,IconBrandNodejs, IconBrandTailwind, IconBrandBootstrap, IconBrandFramerMotion, IconBrandGithub, IconBrandMongodb, IconBrandRedux, IconBrandVercel, IconBrandVisualStudio, IconBrandTypescript } from "@tabler/icons-react";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import edyoda from "../public/images/edyoda.png";
import infosys from "../public/images/infosys.png";
import hackerrank from "../public/images/hackerrank.png";



const SkillItem = ({ icon: Icon, label }) => {
  return (
    <div className="flex md:gap-2 gap-1 relative items-center md:px-5 md:py-3 px-3 py-2.5 bg-gradient-to-br from-black/50 to-gray/20 shadow-lg border border-gray-500/30 rounded-lg">
      <GlowingEffect
          spread={40}
          glow={true}
          disabled={false}
          proximity={64}
          inactiveZone={0.01}
        />
        <Icon className="md:w-8 md:h-8 w-5 h-5" /> <span className="md:text-xl text-sm">{label}</span>
    </div>
  );
}


function About() {

  const skills = [
    { label: "HTML5", icon: IconBrandHtml5 },
    { label: "CSS3", icon: IconBrandCss3 },
    { label: "JavaScript", icon: IconBrandJavascript },
    { label: "React", icon: IconBrandReact },
    { label: "Next.js", icon: IconBrandNextjs },
    { label: "Node.js", icon: IconBrandNodejs },
    { label: "Tailwind", icon: IconBrandTailwind },
    { label: "Bootstrap", icon: IconBrandBootstrap },
    { label: "Framer Motion", icon: IconBrandFramerMotion },
    { label: "GitHub", icon: IconBrandGithub },
    { label: "MongoDB", icon: IconBrandMongodb },
    { label: "Redux", icon: IconBrandRedux },
    { label: "Vercel", icon: IconBrandVercel },
    { label: "Visual Studio", icon: IconBrandVisualStudio },
    { label: "TypeScript", icon: IconBrandTypescript },
  ];

  const tabs = [
    {
      title: "Skills",
      value: "skills",
      content: (
        <div className="w-full overflow-hidden relative h-auto min-h-[26rem] rounded-2xl lg:p-10 md:p-5 py-7 px-4  text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <p className="text-xl md:text-4xl font-bold">Skills</p>
          <div className="container  relative z-40 mx-auto lg:mt-12 md:mt-7 mt-5 mb-4">
            <div className="flex md:gap-4 gap-2.5 flex-wrap justify-center lg:w-full xl:shadow-small-blue">
              {skills.map((skill, index) => (
                <SkillItem key={index} {...skill} />
              ))}
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Education",
      value: "education",
      content: (
        <div className="w-full overflow-hidden relative h-auto min-h-[26rem] rounded-2xl lg:p-10 md:p-5 py-7 px-4  text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <p className="text-xl md:text-4xl font-bold">Education</p>
          <div className="container lg:mt-12 md:mt-7 mt-5">
              <div class="mt-4">
                <h3 class="text-lg font-bold">Bachaelor of Engineering </h3>
                <p class="text-gray-300">Vikrant Institute of Technology and Management RGPV</p>
                <p class="text-gray-300 italic">2016 - 2020 <span class="float-right">7.34 CGPA</span></p>
            </div>

            <div class="mt-4">
                <h3 class="text-lg font-bold">HSC</h3>
                <p class="text-gray-300">Shri Jai Govind Gopinath Hr. Sec. School</p>
                <p class="text-gray-300 italic">2016 <span class="float-right">63.4%</span></p>
            </div>

            <div class="mt-4">
                <h3 class="text-lg font-bold">SSC</h3>
                <p class="text-gray-300">Shri Jai Govind Gopinath Hr. Sec. School</p>
                <p class="text-gray-300 italic">2015 <span class="float-right">63.4%</span></p>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Certification",
      value: "certification",
      content: (
        <div className="w-full overflow-hidden relative h-auto min-h-[26rem] rounded-2xl lg:p-10 md:p-5 py-7 px-4  text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <p className="text-xl md:text-4xl font-bold">Certification</p>
          <div className="container lg:mt-12 md:mt-7 mt-5">

              <div class="mb-4 flex">
                <Image src={edyoda} alt="edyoda" className="rounded-full object-cover w-12 h-12" width={100} height={100} />
                <div className="ml-3">
                  <h3 class="text-lg font-semibold text-white">React JS - Basics to Advanced</h3>
                  <p class="text-sm text-gray-300 italic">EdYoda</p>
                  <p class="text-sm text-gray-400">Comprehensive React course covering state management, hooks, and advanced patterns.</p>
                </div>
              </div>

              <div class="mb-4 flex">
                <Image src={hackerrank} alt="hackerrank" className="rounded-full object-cover w-12 h-12" width={100} height={100} />
                <div className="ml-3">
                  <h3 class="text-lg font-semibold text-white">Certified CSS Developer</h3>
                  <p class="text-sm text-gray-300 italic">HackerRank</p>
                  <p class="text-sm text-gray-400">Validated expertise in modern CSS techniques, including Flexbox and Grid.</p>
                </div>
              </div>

              <div class="mb-4 flex">
                <Image src={infosys} alt="infosys" className="rounded-full object-cover w-12 h-12" width={100} height={100} />
                <div className="ml-3">
                  <h3 class="text-lg font-semibold text-white">Fundamentals of Web Development</h3>
                  <p class="text-sm text-gray-300 italic">Infosys Springboard</p>
                  <p class="text-sm text-gray-400">Covers essential web technologies like HTML, CSS, and JavaScript for building responsive websites.</p>
                </div>
              </div>
          </div>

        </div>
      ),
    },
  ];

  return (
    <section id="About" className="lg:py-20 py-12">
        <div className="custom-container md:min-h-[45rem] min-h-[36rem]  [perspective:1000px] relative b flex flex-col max-w-5xl mx-auto w-full  items-start justify-start ">
            <Tabs tabs={tabs} tabClassName="md:text-lg text-base" />
        </div>
        </section>
  );
}

export default About;