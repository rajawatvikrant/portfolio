import Image from "next/image";
import React from "react";
import { Timeline } from "@/components/ui/timeline";

function Experience() {
    
    const data = [
        {
            title: "2024 - Present",
            content: (
                <div>
                    <p className="text-white text-sm md:text-xl font-semibold mb-1">
                        Jr. Developer - Cyber Infrastructure Pvt Ltd (Indore)
                    </p>
                    <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-4 italic">
                        (September 2024 - Present)
                    </p>
                    <ul className="list-disc list-outside space-y-3 text-gray-300 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
                        <li>
                            Designing and developing scalable, reusable React components to enhance the efficiency 
                            and maintainability of the front-end application.
                        </li>
                        <li>
                            Collaborating closely with UI/UX designers and backend developers to create dynamic, 
                            responsive, and high-performance web applications.
                        </li>
                        <li>
                            Ensuring cross-browser compatibility, accessibility, and optimal user experience across 
                            multiple devices and platforms.
                        </li>
                        <li>
                            Writing clean, modular, and well-documented code while following best practices and 
                            maintaining code consistency within the development team.
                        </li>
                        <li>
                            Continuously researching and integrating the latest front-end technologies to improve 
                            performance, security, and maintainability.
                        </li>
                    </ul>
                </div>
            ),
        },
        {
            title: "2022 - 2024",
            content: (
                <div>
                    <p className="text-white text-sm md:text-xl font-semibold mb-1">
                        Web Developer - eWebWorld (Indore)
                    </p>
                    <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-4 italic">
                        (August 2022 - February 2024)
                    </p>
                    <ul className="list-disc list-outside space-y-3 text-gray-300 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
                        <li>
                            Developed and maintained responsive web applications, ensuring a seamless user 
                            experience across different screen sizes and devices.
                        </li>
                        <li>
                            Provided end-to-end solutions for clients by understanding project requirements, 
                            designing layouts, and implementing interactive UI components.
                        </li>
                        <li>
                            Customized WordPress themes and integrated APIs to enhance functionality, performance, 
                            and user engagement.
                        </li>
                        <li>
                            Collaborated with designers and project managers to create visually appealing, 
                            high-quality web solutions aligned with client expectations.
                        </li>
                        <li>
                            Diagnosed and resolved performance bottlenecks, optimized loading speeds, and 
                            improved website accessibility.
                        </li>
                    </ul>
                </div>
            ),
        },
        {
            title: "Freelancing",
            content: (
                <div>
                    <p className="text-white text-sm md:text-xl font-semibold mb-1">
                        Web Developer - Freelancing
                    </p>
                    <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-4 italic">
                        (From September 2022) 
                    </p>
                    <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-4 italic">
                    Accomplished developer with a proven track record of successfully delivering 20+ projects across diverse industries. Specializing in React and WordPress development, I bring expertise in crafting robust, user-friendly, and innovative solutions tailored to clients' unique needs.
                    </p>
                    <ul className="list-disc list-outside space-y-3 text-gray-300 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
                        <li>
                            Designed, developed, and deployed custom websites and applications tailored to client 
                            needs, ensuring optimal functionality and visual appeal.
                        </li>
                        <li>
                            Provided innovative UI/UX solutions, enhancing user engagement and improving 
                            conversion rates for businesses.
                        </li>
                        <li>
                            Managed multiple projects simultaneously, meeting tight deadlines while maintaining 
                            high-quality standards.
                        </li>
                        <li>
                            Communicated effectively with clients to understand their business goals, propose 
                            technical solutions, and provide ongoing maintenance and support.
                        </li>
                        <li>
                            Built a strong reputation as a reliable, skilled developer, leading to long-term 
                            partnerships and repeat business opportunities.
                        </li>
                    </ul>
                </div>
            ),
        },
    ];    
    
  return (
    <section id="Experience" className="w-full">
      <Timeline data={data} />
    </section>
  );
}

export default Experience;
