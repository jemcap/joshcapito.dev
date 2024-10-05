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
          <span className="text-sm lg:text-2xl">capitoj.dev</span>
        </motion.h1>
        {text.map((el, i) => (
          <motion.span
            key={i}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 1.5,
              delay: i / 3.5,
            }}
          >
            {el}{" "}
          </motion.span>
        ))}
      </div>
      <motion.a
        href="#"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: totalDuration }}
        className="mt-10"
      >
        <TfiArrowCircleDown className="text-xl lg:text-5xl font-bold text-white" />
      </motion.a>
    </div>
  );
};

export default Introduction;
