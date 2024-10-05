import { motion } from "framer-motion";
import { TfiArrowCircleDown } from "react-icons/tfi";

const Introduction = () => {
  const text = "Crafting experiences, one line at a time.".split(" ");
  const totalDuration = 1.5 + (text.length - 1) / 5.5;
  return (
    <div className="flex flex-col h-screen justify-center items-center min-h-screen">
      <div className="text-center w-11/12 max-w-7xl font-bold text-4xl sm:text-6xl md:text-8xl lg:text-9xl gap-2 text-white">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: totalDuration }}
          className="mb-4"
        >
          <div className="flex flex-col font-light">
            <span className="text-xs lg:text-xl">portfolio curated by</span>
            <span className="text-sm lg:text-3xl">joshua emmanuel capito</span>
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
              className="font-extrabold"
            >
              {el}{" "}
            </motion.span>
          ))}
        </h1>
      </div>
      <motion.a
        href="#"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: totalDuration }}
        className="mt-32 flex flex-col justify-center items-center gap-2"
      >
        <span className="font-light text-sm lg:text-xl">
          learn more about me
        </span>
        <span>
          <TfiArrowCircleDown className="text-5xl lg:text-5xl font-bold text-white" />
        </span>
      </motion.a>
    </div>
  );
};

export default Introduction;
