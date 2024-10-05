import { motion } from "framer-motion";

const Introduction = () => {
  const text = "Crafting experiences, one line at a time.".split(" ");
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="text-center w-11/12 max-w-3xl font-bold text-4xl sm:text-6xl md:text-8xl lg:text-9xl gap-2">
        {text.map((el, i) => (
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 1.5,
              delay: i / 2.5,
            }}
            key={i}
          >
            {el}{" "}
          </motion.span>
        ))}
      </div>
    </div>
  );
};

export default Introduction;
