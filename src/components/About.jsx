import { motion } from "framer-motion";

export const Highlight = ({ children, delay = 0 }) => {
  return (
    <>
      <motion.span
        className="relative inline-block"
        initial={{ opacity: 1 }}
        whileInView={{ opacity: 1 }}
      >
        <motion.span
          className="absolute inset-0 bg-yellow-300 z-0"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ delay, duration: 0.6, ease: "easeOut" }}
          style={{
            transformOrigin: "left",
          }}
          viewport={{ once: true }}
        />
        <motion.span
          className="relative z-10"
          initial={{ color: "#fff" }}
          whileInView={{ color: "#000" }}
          transition={{ delay, duration: 0.6, ease: "easeInOut" }}
          viewport={{ once: true }}
        >
          {" "}
          {children}
        </motion.span>
      </motion.span>{" "}
    </>
  );
};

const About = () => {
  return (
    <>
      <section className="w-full">
        <div className=" flex flex-col gap-10">
          <motion.h1
            initial={{ opacity: 0, x: -500 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.7,
              ease: "easeOut",
            }}
            viewport={{ once: true }}
            className="text-6xl md:text-8xl lg:text-9xl font-extrabold text-center"
          >
            Hi, there! I'm Josh
          </motion.h1>
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{
              duration: 1.5,
            }}
            viewport={{ once: true }}
            className="text-xl md:text-3xl lg:text-6xl font-semibold"
          >
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam,
            eos illo vitae provident magnam reiciendis asperiores dolor
            consequatur? Voluptatibus{" "}
            <Highlight delay="0.5">zexpedita</Highlight> quaerat aut autem eaque
            dolorem saepe? Voluptatem aspernatur explicabo magni consequuntur
            eaque, facilis obcaecati{" "}
            <Highlight delay="1">perferendis</Highlight> placeat quisquam
            commodi laboriosam autem quis exercitationem, in vitae quibusdam nam
            rem repudiandae fugit.
          </motion.h2>
        </div>
      </section>
      <section>
        <div>
          <h1>My journey</h1>
        </div>
      </section>
    </>
  );
};

export default About;
