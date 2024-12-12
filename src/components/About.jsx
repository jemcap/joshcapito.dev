import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { aboutInfo, experienceInfo } from "../constants/lists";

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
                <h1 className="text-4xl  font-bold">Joshua Capito</h1>
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
                I'm a <Highlight delay="1">Frontend Web Developer</Highlight>{" "}
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
                      key={section}
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
              <div className="lg:border-t-2 pt-10 flex">
                <a
                  href="#bottom"
                  className="text-sm max-lg:bg-black max-lg:text-white max-lg:py-1 max-lg:px-4 max-lg:rounded-xl"
                >
                  skip
                </a>
              </div>
            </section>
          </div>

          <main id="content" className="pt-24 lg:w-1/2 lg:py-36">
            {aboutInfo.map((info) => {
              const { id, title, link, content } = info;
              return (
                <section
                  key={id}
                  id={link}
                  className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
                >
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{
                      duration: 0.7,
                      ease: "easeOut",
                    }}
                    viewport={{ once: true }}
                    className="flex flex-col gap-5 text-sm lg:text-sm font-light text-start text-gray-700"
                  >
                    <div className="text-sm lg:text-sm flex flex-col gap-8 text-gray-700 font-light">
                      <h1 className="font-semibold text-lg lg:hidden">
                        {title}
                      </h1>
                      {content}
                    </div>
                  </motion.div>
                </section>
              );
            })}
            <section
              id="experience"
              className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
            >
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{
                  duration: 0.7,
                  ease: "easeOut",
                }}
                viewport={{ once: true }}
                className="flex flex-col gap-20 text-sm lg:text-sm font-light text-start text-gray-700 "
              >
                <div className="text-sm lg:text-sm text-gray-700 font-light">
                  <h1 className="font-semibold text-lg lg:hidden pb-5">
                    My Experience
                  </h1>
                  <div>
                    {experienceInfo.map((info) => {
                      const {
                        id,
                        date,
                        company,
                        role,
                        description,
                        stack,
                        extra,
                      } = info;
                      return (
                        <div
                          key={id}
                          className="flex flex-col lg:flex-row mb-20"
                        >
                          <div className="lg:w-1/3 w-full">
                            <small className="">{date}</small>
                          </div>
                          <div className="flex flex-col lg:w-2/3 w-full gap-8 ">
                            <div className="flex flex-col">
                              <h1 className="font-bold text-lg">{company}</h1>
                              <small>{role}</small>
                              {extra && <small>{extra}</small>}
                            </div>
                            <p>{description}</p>
                            <ul className="flex gap-2 flex-wrap mb-7">
                              {stack &&
                                stack.map((list) => {
                                  const { id, tech } = list;
                                  return (
                                    <li
                                      key={id}
                                      className="border-4 text-pink-700 bg-pink-100 border-pink-200 border-b-pink-300 flex items-center p-1 rounded-xl text-xs"
                                    >
                                      {tech}
                                    </li>
                                  );
                                })}
                            </ul>
                          </div>
                        </div>
                      );
                    })}
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
