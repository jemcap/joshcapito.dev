import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { learningStack, techStackList } from "../constants/lists";

export const Highlight = ({ children, delay = 0 }) => {
  return (
    <>
      <motion.span
        className="relative inline-block"
        initial={{ opacity: 1 }}
        whileInView={{ opacity: 1 }}
      >
        <motion.span
          className="absolute top-3 left-1 h-[40%] inset-0 bg-yellow-300 -z-10"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ delay, duration: 0.6, ease: "easeOut" }}
          style={{
            transformOrigin: "left",
          }}
          viewport={{ once: true }}
        />
        <span>{children}</span>
      </motion.span>
    </>
  );
};

// TODO: Put code into modular components to improve maintainability
const About = () => {
  const [isActive, setIsActive] = useState(null);
  const ref = useRef([]);

  const links = [
    { title: "about", link: "#about-me" },
    { title: "story", link: "#my-story" },
    { title: "experience", link: "#experience" },
  ];

  useEffect(() => {
    ref.current.forEach((item, i) => {
      if (item) {
        item.style.transition = `opacity 0.5s ease ${(i + 1) * 0.2}s`;
        item.style.opacity = 1;
      }
    });
  }, []);

  return (
    <>
      <div className="flex flex-col gap-y-52 align-elements pt-20">
        <div className=" lg:flex lg:justify-between lg:gap-4 border-b-neutral-300 border-b-2">
          <div className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-36">
            <section className="flex flex-col gap-10 lg:pr-20 text-start">
              <motion.div
                initial={{ opacity: 0, x: -200 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{
                  duration: 0.7,
                  ease: "easeOut",
                }}
                viewport={{ once: true }}
              >
                <h1 className="text-4xl  font-bold">Hi, I'm Josh.</h1>
                <small className="text-gray-700">Frontend Web Developer</small>
              </motion.div>
              <motion.h2
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{
                  duration: 0.7,
                  ease: "easeOut",
                }}
                viewport={{ once: true }}
                className="text-sm lg:text-sm font-light text-start text-gray-700"
              >
                I'm a <Highlight delay="1">Frontend Web Devedloper</Highlight>{" "}
                with a background in Product Design. My{" "}
                <Highlight delay="1.5">passion for UX/UI design</Highlight>{" "}
                fuels my creativity and inspires me to create innovative coding
                solutions and{" "}
                <Highlight delay="2">
                  tackle challenges with creativity
                </Highlight>{" "}
                that enhance user experiences. I enjoy taking ideas from
                conception to production, transforming concepts into visually
                appealing and functional interfaces and{" "}
                <Highlight delay="2.5">creating narratives</Highlight> for the
                public through digital arts.
              </motion.h2>
              <div className="hidden lg:flex flex-col gap-5">
                {links.map((section, i) => {
                  const { title, link } = section;
                  return (
                    <a
                      href={link}
                      className={isActive === i ? "text-sm active" : "text-sm"}
                      onClick={() =>
                        setIsActive((prev) => (prev !== i ? i : null))
                      }
                    >
                      {title}
                    </a>
                  );
                })}
              </div>
              <div className="border-t-2 pt-10 flex">
                <a href="#bottom" className="text-sm">
                  skip to bottom
                </a>
              </div>
            </section>
          </div>

          <main id="content" className="pt-24 lg:w-1/2 lg:py-36">
            <section
              id="about-me"
              className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
            >
              <motion.div
                initial={{ opacity: 0, x: 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{
                  duration: 0.7,
                  ease: "easeOut",
                }}
                viewport={{ once: true }}
                className="flex flex-col gap-5 text-sm lg:text-sm font-light text-start text-gray-700"
              >
                <div className="text-sm lg:text-sm flex flex-col gap-8 text-gray-700 font-light">
                  <p>
                    {" "}
                    I love working at the intersection of design, development,
                    and cutting-edge technology. For me, digital experiences
                    aren't just functional; they should be intuitive, visually
                    striking, and engage users in a way that excites them. It's
                    incredibly rewarding to transform an idea into something
                    tangible—whether it's designing an intuitive interface or
                    writing seamless code. Every interaction should be
                    meaningful and resonate with users, making their experience
                    easier, more enjoyable, and a bit brighter. That's what
                    drives me.{" "}
                  </p>{" "}
                  <p>
                    {" "}
                    Blending creativity with technology, particularly in digital
                    media, has always been my passion. I thrive on solving
                    complex problems through code and crafting interfaces that
                    elevate the user experience. The thrill of bringing
                    innovative ideas to life and making a meaningful impact
                    fuels my drive to continuously push boundaries and grow
                    creatively.{" "}
                  </p>{" "}
                  <p>
                    I've been lucky enough to work on a variety of projects,
                    contributing to development efforts for different
                    organisations along the way. Right now, I help small, local
                    businesses grow by designing and building bespoke websites
                    that really support their online presence.
                  </p>
                  <p>
                    {" "}
                    Outside of work, I explore my creative passions, including
                    cinematography, photography, and playing the piano or
                    guitar. I'm also a powerlifter, so you might catch me at the
                    gym. Lately, I've been trying to read more, so if you're a
                    fellow bookworm, feel free to connect!{" "}
                  </p>
                </div>
              </motion.div>
            </section>
            <section
              id="my-story"
              className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
            >
              <motion.div
                initial={{ opacity: 0, x: 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{
                  duration: 0.7,
                  ease: "easeOut",
                }}
                viewport={{ once: true }}
                className="flex flex-col gap-5 text-sm lg:text-sm font-light text-start text-gray-700"
              >
                <div className="text-sm lg:text-sm flex flex-col gap-8 text-gray-700 font-light">
                  <p>
                    I've always been deeply passionate about technology and its
                    transformative power. During my four years studying Product
                    Design at <span>Nottingham Trent University</span>, I gained
                    hands-on experience with a range of technologies—from
                    Computer-Aided Design and Manufacturing to 3D printing—and
                    software tools like Adobe Creative Cloud.
                  </p>
                  <p>
                    When COVID-19 hit, everything came to a standstill.
                    Unfortunately, the peak of the pandemic coincided with my
                    studies, especially during my placement year. It became
                    incredibly challenging to secure a role within the industry,
                    and many academic projects were put on hold. It was a tough
                    time, as the uncertainty left me with very little to do and
                    a lot of plans in limbo. This allowed the opportunity to
                    branch out and learn new skills. I chose Web Design and
                    Development. After long hours of building very simple HTML
                    and CSS websites, I instantly fell in love with it, and I
                    knew this is something I would like to pursue, and develop
                    my career in Web Development.
                  </p>
                  <p>
                    During my final year as an undergraduate, I had the amazing
                    opportunity to lead the website team for a student-led
                    initiative called{" "}
                    <span>
                      Nottingham Trent University Design Industries (NTUDI)
                    </span>{" "}
                    — where I am a proud alumnus of the '22 committee. I take
                    pride in having helped design and develop a platform that
                    showcased the innovative work of our final-year students,
                    and it was incredibly rewarding to see it go live and be
                    used by the wider design community.
                  </p>
                  <p>
                    Following graduation, I took a leap of faith and made the
                    switch to web development. With no prior experience, I dove
                    in headfirst, eager to learn everything I could. Starting
                    from the ground up, I dedicated myself to learning the
                    fundamentals and gradually building my skills through simply
                    just building. My passion for technology, combined with my
                    desire to create meaningful, user-centered experiences,
                    drove me to persist through challenges and setbacks. Every
                    line of code I wrote was a step toward realising my goal of
                    becoming a developer, and I embraced the journey.
                  </p>
                </div>
              </motion.div>
            </section>
            <section
              id="experience"
              className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
            >
              <motion.div
                initial={{ opacity: 0, x: 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{
                  duration: 0.7,
                  ease: "easeOut",
                }}
                viewport={{ once: true }}
                className="flex flex-col gap-20 text-sm lg:text-sm font-light text-start text-gray-700"
              >
                <div className="text-sm lg:text-sm text-gray-700 font-light">
                  <div className="flex flex-col lg:flex-row">
                    <div className="lg:w-1/3 w-full">
                      <small className="">Jul 2024—Present</small>
                    </div>

                    <div className="flex flex-col lg:w-2/3 w-full gap-8 ">
                      <div>
                        <h1 className="font-bold text-lg">
                          Independent Web Developer (Pro Bono projects)
                        </h1>
                        <small>
                          Volunteer Web Developer for local and small businesses
                        </small>
                      </div>
                      <p>
                        I reach out to small and local businesses, collaborating
                        closely with business owners to understand their
                        requirements and deliver tailored solutions that aligned
                        with their goals. By taking on these pro bono projects,
                        I expand my technical expertise and contributed to the
                        growth of small businesses in my community.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="text-sm lg:text-sm text-gray-700 font-light">
                  <div className="flex flex-col lg:flex-row">
                    <div className="lg:w-1/3 w-full">
                      <small className="">Nov 2024—Present</small>
                    </div>

                    <div className="flex flex-col lg:w-2/3 w-full gap-8">
                      <div>
                        <h1 className="font-bold text-lg">
                          East London Waterworks Park
                        </h1>
                        <small>Front End Web Developer Volunteer</small>
                      </div>
                      <p>
                        Volunteered as a Web Dev to contribute to a
                        community-led working circle who are working on
                        coordinating content and infrastructure for the East
                        London Waterworks Park website. The goal for this
                        initiative is by purchasing land and transforming it
                        into a biodiverse park that benefits the general public
                        and the planet.
                      </p>
                      <ul className="flex gap-2 flex-wrap mb-7">
                        <li className="border-4 text-pink-700 bg-pink-100 border-pink-200 border-b-pink-300 flex items-center p-1 rounded-xl text-xs">
                          PHP
                        </li>
                        <li className="border-4 text-pink-700 bg-pink-100 border-pink-200 border-b-pink-300 flex items-center p-1 rounded-xl text-xs">
                          MySQL
                        </li>
                        <li className="border-4 text-pink-700 bg-pink-100 border-pink-200 border-b-pink-300 flex items-center p-1 rounded-xl text-xs">
                          Apache Web Server
                        </li>
                        <li className="border-4 text-pink-700 bg-pink-100 border-pink-200 border-b-pink-300 flex items-center p-1 rounded-xl text-xs">
                          JavaScript
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="text-sm lg:text-sm  text-gray-700 font-light">
                  <div className="flex flex-col lg:flex-row">
                    <div className="lg:w-1/3 w-full">
                      <small>Nov 2022-May 2024</small>
                    </div>
                    <div className="flex flex-col lg:w-2/3 w-full gap-8">
                      <div className="flex flex-col">
                        <h1 className="font-bold text-lg">dcloud9 ltd.</h1>
                        <small className="italic">
                          In collaboration with our client:{" "}
                          <a
                            href="https://www.iavi.org/"
                            className="text-semibold text-gray-900"
                          >
                            IAVI
                          </a>
                        </small>
                        <small>Junior DevOps Engineer</small>
                      </div>
                      <p>
                        I worked on the MAGY project for IAVI, developing
                        backend APIs with Python and GraphQL, optimising data
                        management and code iterations using AWS Lambda, and
                        integrating AppSync with DynamoDB. I automated
                        infrastructure processes using Terraform, improving
                        deployment efficiency, and collaborated in Agile sprints
                        to enhance team productivity and problem-solving.
                      </p>
                      <ul className="flex gap-2 flex-wrap mb-7">
                        <li className="border-4 text-pink-700 bg-pink-100 border-pink-200 border-b-pink-300 flex items-center p-1 rounded-xl text-xs">
                          Amazon Web Services
                        </li>
                        <li className="border-4 text-pink-700 bg-pink-100 border-pink-200 border-b-pink-300 flex items-center p-1 rounded-xl text-xs">
                          Terraform
                        </li>
                        <li className="border-4 text-pink-700 bg-pink-100 border-pink-200 border-b-pink-300 flex items-center p-1 rounded-xl text-xs">
                          Gitlab CI/CD
                        </li>
                        <li className="border-4 text-pink-700 bg-pink-100 border-pink-200 border-b-pink-300 flex items-center p-1 rounded-xl text-xs">
                          Python
                        </li>
                        <li className="border-4 text-pink-700 bg-pink-100 border-pink-200 border-b-pink-300 flex items-center p-1 rounded-xl text-xs">
                          GraphQL
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="text-sm lg:text-sm  text-gray-700 font-light">
                  <div className="flex flex-col lg:flex-row">
                    <div className="lg:w-1/3 w-full">
                      <small>Sep 2023—Dec 2023</small>
                    </div>
                    <div className="flex flex-col lg:w-2/3 w-full gap-8">
                      <div>
                        <h1 className="font-bold text-lg">PolicyCON ltd.</h1>
                        <small>Front End Web Developer Intern</small>
                      </div>
                      <p>
                        Redesigned webpages to enhance UX/UI and accessibility,
                        developing responsive features with React, TypeScript,
                        and TailwindCSS for improved performance. Refactored the
                        codebase for maintainability using modular design,
                        authored technical documentation for future development,
                        and tested authentication components with Cypress to
                        boost reliability. Actively participated in Scrum
                        meetings, aligning goals and ensuring deliverables.
                      </p>
                      <ul className="flex gap-2 flex-wrap mb-7">
                        <li className="border-4 text-pink-700 bg-pink-100 border-pink-200 border-b-pink-300 flex items-center p-1 rounded-xl text-xs">
                          Figma
                        </li>
                        <li className="border-4 text-pink-700 bg-pink-100 border-pink-200 border-b-pink-300 flex items-center p-1 rounded-xl text-xs">
                          React
                        </li>
                        <li className="border-4 text-pink-700 bg-pink-100 border-pink-200 border-b-pink-300 flex items-center p-1 rounded-xl text-xs">
                          TypeScript
                        </li>
                        <li className="border-4 text-pink-700 bg-pink-100 border-pink-200 border-b-pink-300 flex items-center p-1 rounded-xl text-xs">
                          TailwindCSS
                        </li>
                        <li className="border-4 text-pink-700 bg-pink-100 border-pink-200 border-b-pink-300 flex items-center p-1 rounded-xl text-xs">
                          Cypress
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="text-sm lg:text-sm  text-gray-700 font-light">
                  <div className="flex flex-col lg:flex-row">
                    <div className="lg:w-1/3 w-full">
                      <small>Sep 2021-May 2022</small>
                    </div>
                    <div className="flex flex-col lg:w-2/3 w-full gap-8">
                      <div>
                        <h1 className="font-bold text-lg">
                          Nottingham Trent University Design Industries '22
                        </h1>
                        <small>Website Team Lead</small>
                      </div>
                      <p>
                        Led a team of three to ensure timely website deployment
                        by assigning tasks, resolving challenges, and achieving
                        weekly goals. Collaborated with the Branding team to
                        align designs with annual themes, creating cohesive and
                        engaging layouts that improved user experience. Mentored
                        team members in debugging, data handling, and UX/UI
                        principles, boosting efficiency and meeting targets.
                        Successfully managed the project alongside academic
                        responsibilities, deploying the website on time.
                        Optimised content for SEO, increasing website traffic by
                        15% year over year.
                      </p>
                      <ul className="flex gap-2 flex-wrap mb-7">
                        <li className="border-4 text-pink-700 bg-pink-100 border-pink-200 border-b-pink-300 flex items-center p-1 rounded-xl text-xs">
                          Wix Website Builder
                        </li>
                        <li className="border-4 text-pink-700 bg-pink-100 border-pink-200 border-b-pink-300 flex items-center p-1 rounded-xl text-xs">
                          JavaScript
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="text-sm lg:text-sm  text-gray-700 font-light">
                  <div className="flex flex-col lg:flex-row ">
                    <div className="lg:w-1/3 w-full">
                      <small>Aug 2021-Sep 2021</small>
                    </div>
                    <div className="flex flex-col lg:w-2/3 w-full gap-8">
                      <div>
                        <h1 className="font-bold text-lg">Unitemps</h1>
                        <small>Website Designer</small>
                      </div>
                      <p>
                        Worked as a Web Designer and Developer with NTU Masters
                        Product Design students to create a virtual platform
                        showcasing their work and profiles. Using Squarespace, I
                        contributed in designing a professional and
                        user-friendly website that effectively displayed their
                        projects and achievements. I collaborated closely with
                        the students to understand their creative goals,
                        tailoring the platform to highlight their work while
                        maintaining a cohesive and engaging design. The result
                        was a polished showcase that helped them share their
                        portfolios with prospective employers and collaborators.
                      </p>
                      <ul className="flex gap-2 flex-wrap mb-7">
                        <li className="border-4 text-pink-700 bg-pink-100 border-pink-200 border-b-pink-300 flex items-center p-1 rounded-xl text-xs">
                          Squarespace
                        </li>
                        <li className="border-4 text-pink-700 bg-pink-100 border-pink-200 border-b-pink-300 flex items-center p-1 rounded-xl text-xs">
                          Figma
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </motion.div>
            </section>
            <section id="bottom"></section>
          </main>
        </div>
      </div>
    </>
  );
};

export default About;
