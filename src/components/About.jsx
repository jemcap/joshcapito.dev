import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { techStackList } from "../constants/lists";

export const Highlight = ({ children, delay = 0 }) => {
  return (
    <>
      <motion.span
        className="relative inline-block"
        initial={{ opacity: 1 }}
        whileInView={{ opacity: 1 }}
      >
        <motion.span
          className="absolute inset-0 bg-yellow-300 -z-10"
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
  const ref = useRef([]);

  useEffect(() => {
    ref.current.forEach((item, i) => {
      if (item) {
        item.style.transition = `opacity 0.5s ease ${(i + 1) * 0.2}s`;
        item.style.opacity = 1;
      }
    });
  }, []);

  return (
    <div>
      <div className="flex flex-col gap-y-52 align-elements py-32">
        <section className=" w-full max-w-full mx-auto">
          <div className=" flex flex-col gap-10">
            <motion.h1
              initial={{ opacity: 0, x: -200 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.7,
                ease: "easeOut",
              }}
              viewport={{ once: true }}
              className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-center"
            >
              👋 Hi! I'm Josh
            </motion.h1>
            <motion.h2
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.7,
                ease: "easeOut",
              }}
              viewport={{ once: true }}
              className="text-xl md:text-3xl lg:text-5xl  "
            >
              Based in Cambridge, UK, I'm a{" "}
              <Highlight delay="1">Junior Frontend Web Developer</Highlight>{" "}
              with a background in Product Design. My{" "}
              <Highlight delay="1.5">passion for digital design</Highlight>{" "}
              fuels my creativity and inspires me to create innovative coding
              solutions and{" "}
              <Highlight delay="2">tackle challenges with creativity</Highlight>{" "}
              that enhance user experiences. I enjoy taking ideas from
              conception to production, transforming concepts into visually
              appealing and functional interfaces and{" "}
              <Highlight delay="2.5">creating narratives</Highlight> for the
              public through digital arts.
            </motion.h2>
          </div>
          <div className="mt-9">
            <div>
              <a
                href="/information"
                className=" items-center text-white border bg-black rounded-full py-2 px-6 gap-2 inline-flex "
              >
                <span className="text-2xl">More information</span>
                <svg
                  class="w-4"
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  viewBox="0 0 24 24"
                  className="w-6 h-6 ml-2"
                >
                  <path d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                </svg>
              </a>
            </div>
          </div>
          <div className="flex flex-col justify-center text-5xl lg:text-7xl my-28">
            <motion.h5
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{
                duration: 1.5,
              }}
              viewport={{ once: true }}
              className="text-xl lg:text-3xl mb-10"
            >
              I've built projects using:
            </motion.h5>
            <ul className="flex flex-row gap-10 flex-wrap justify-center">
              {techStackList.map((item, i) => {
                const { id, icon, label } = item;
                return (
                  <li
                    key={id}
                    ref={(el) => (ref.current[i] = el)}
                    className="flex flex-col justify-center items-center opacity-0"
                  >
                    {icon}
                    <small className="text-sm">{label}</small>
                  </li>
                );
              })}
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
