import { motion } from "framer-motion";
import { HiArrowLongDown } from "react-icons/hi2";

import { socialMediaIcons } from "../constants/lists";
import { useRef, useEffect } from "react";
import { useGlobalContext } from "../context/context";

const Introduction = () => {
  const { scrollToAbout } = useGlobalContext();
  const socialRef = useRef([]);

  const displayIcons = () => {
    socialRef.current.forEach((item, i) => {
      if (item) {
        item.style.transition = `opacity 1.5s ease ${(i + 1) * 0.15}s`;
        item.style.opacity = 1;
      }
    });
  };

  useEffect(() => {
    const timeoutId = setTimeout(displayIcons, 2000);
    return () => clearTimeout(timeoutId);
  }, []);

  const text = '"code as my digital canvas"'.split(" ");
  const totalDuration = 1.25 + (text.length - 1) / 5.5;
  return (
    <div className="flex flex-col h-full justify-center items-center min-h-screen bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-slate-100 to-white">
      <div className="text-center w-11/12 max-w-7xl  text-4xl gap-2 mt-36">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: totalDuration }}
        >
          <div className="flex flex-col font-light justify-center items-center">
            <div className="flex flex-col items-center lg:flex-row gap-6 max-lg:mb-8 lg:mb-8 ">
              <div className="flex flex-col text-center">
                <span className="text-sm lg:text-sm">web developer</span>
                <span className="text-sm lg:text-lg">
                  joshua emmanuel capito
                </span>
              </div>
            </div>
          </div>
        </motion.h1>
        <h1>
          {text.map((el, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                duration: 0.5,
                delay: i / 3,
              }}
              className="text-5xl font-semibold"
            >
              {el}{" "}
            </motion.span>
          ))}
        </h1>
        <ul className="flex items-center justify-center text-4xl gap-5 mt-12">
          {socialMediaIcons.map((item, i) => {
            const { id, icon, url, label } = item;
            return (
              <li
                key={id}
                ref={(el) => (socialRef.current[i] = el)}
                className="flex flex-col justify-center items-center opacity-0 hover:text-yellow-500 text-2xl "
              >
                <a
                  href={url}
                  rel="noopener noreferrer"
                  target="_blank"
                  aria-label={label}
                >
                  {icon}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
      <motion.a
        href="#"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 3.5 }}
        className=" flex flex-col justify-center items-center gap-2 mt-12"
      >
        <span>
          <button
            type="button"
            onClick={scrollToAbout}
            aria-label="Scroll to About section"
          >
            <HiArrowLongDown className="text-5xl lg:text-5xl font-bold hover:text-yellow-500 transition-all 2s easeInOut" />
          </button>
        </span>
      </motion.a>
    </div>
  );
};

export default Introduction;
