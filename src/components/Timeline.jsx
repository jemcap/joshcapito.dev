import { motion } from "framer-motion";

const Timeline = () => {
  const variants = {
    initial: {
      opacity: 0,
      y: 100,
    },
    animate: (delay) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay,
      },
    }),
  };

  return (
    <ul className="timeline font-normal text-xl timeline-snap-icon max-md:timeline-compact timeline-vertical my-44">
      <motion.li
        initial="initial"
        animate="animate"
        custom={0.05}
        variants={variants}
        viewport={{ once: true }}
      >
        <div className="timeline-middle">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="h-5 w-5"
          >
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        <div className="timeline-start mb-10 md:text-end">
          <time className="font-mono italic">2020</time>
          <div className="text-lg font-black">
            Introduction to Web Development
          </div>
          It was lockdown. Nothing else to do (or can do), so I tried out
          designing websites. One thing lead to another, and out of curiousity,
          I ended up building several simple sites with just HTML and CSS. I
          found it extremely fun and rewarding, which sparked my interest in web
          development.
        </div>
        <hr />
      </motion.li>
      <motion.li
        initial="initial"
        animate="animate"
        custom={0.2}
        variants={variants}
        viewport={{ once: true }}
      >
        <div className="timeline-middle">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="h-5 w-5"
          >
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        <div className="timeline-end mb-10">
          <time className="font-mono italic">2021</time>
          <div className="text-lg font-black">UI Designer</div>
          <div className="text-sm font-black">
            Professional Industry Programme — NTU Design Industries cohort of
            2021
          </div>
          This year was my placement year, but due to the peak of COVID-19,
          finding a placement role was nearly impossible. Nottingham Trent
          University launched the{" "}
          <span className="italic font-bold">
            Professional Industry Programme
          </span>{" "}
          as an alternative for students. I joined a project where several small
          teams collaborated on a larger initiative. I had the opportunity to
          join the year's Website team where I contributed to user interface
          design. This project was my first opportunity to apply and develop my
          UX/UI skills in a practical team setting.
        </div>
        <hr />
      </motion.li>
      <motion.li
        initial="initial"
        animate="animate"
        custom={0.35}
        variants={variants}
        viewport={{ once: true }}
      >
        <div className="timeline-middle">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="h-5 w-5"
          >
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        <div className="timeline-start mb-10 md:text-end">
          <div className="text-lg font-black">Web Designer and Developer</div>
          <div className="text-sm font-black">Unitemps</div>
          My first paid role as a Web Designer and Developer! I worked with the
          Masters of Product Design website team at NTU to design and build a
          platform to showcase the Masters of Product Design student work to the
          public. This project allowed me to combine my design skills with my
          technical knowledge. It was a rewarding opportunity to contribute to
          their success while further developing my skills in web design and
          development.
        </div>
        <hr />
      </motion.li>
      <motion.li
        initial="initial"
        animate="animate"
        custom={0.5}
        variants={variants}
        viewport={{ once: true }}
      >
        <hr />
        <div className="timeline-middle">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="h-5 w-5"
          >
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        <div className="timeline-end mb-10">
          <time className="font-mono italic">2021—2022</time>
          <div className="text-lg font-black">Lead Web Developer</div>
          <div className="text-sm font-black">
            NTU Design Industries cohort of 2022
          </div>
          This year marked my final academic year as a Product Design
          undergraduate. While balancing my studies, I took part in this year's
          initiative and had the fantastic opportunity to lead the website team.
          This was my first leadership role in a professional setting, and I
          learned a great deal—not just about website design and development,
          but also about project and time management.
        </div>
        <hr />
      </motion.li>
      <motion.li
        initial="initial"
        animate="animate"
        custom={0.7}
        variants={variants}
        viewport={{ once: true }}
      >
        <hr />
        <div className="timeline-middle">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="h-5 w-5"
          >
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        <div className="timeline-start mb-10 md:text-end">
          <div className="text-lg font-bold">🍾GRADUATED</div>
          After four years of hard work and dedication, I graduated! At that
          point, I felt ready to dive into the world of frontend development.
          Immediately after graduation, I decided to enroll in a{" "}
          <span className="italic font-bold">
            16-week Bootcamp in Front-End Web Development
          </span>{" "}
          with <span className="italic font-bold">edX</span>. I wanted to gain
          more insights into web development and sharpen my skills, and this
          program seemed like the perfect opportunity to do just that. I gained
          in-depth insights on frontend languages and frameworks such as
          JavaScript, jQuery, NodeJS, React, which allowed me to be more
          prepared with using the tools I needed to succeed in this field.
        </div>
        <hr />
      </motion.li>
      <motion.li
        initial="initial"
        animate="animate"
        custom={0.95}
        variants={variants}
        viewport={{ once: true }}
      >
        <hr />
        <div className="timeline-middle">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="h-5 w-5"
          >
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        <div className="timeline-end mb-10">
          <time className="font-mono italic">2022-2024</time>
          <div className="text-lg font-black">Junior DevOps Engineer</div>
          <div className="text-sm font-black">dcloud9 ltd.</div>
          At the same time, I stepped out of my comfort zone and had the
          incredible opportunity to learn building APIs with Python, and
          Automation with Terraform, as a Junior DevOps Engineer with dcloud9
          Ltd. What excited me most about this role was the chance to explore
          and utilise AWS services while contributing to the development of an
          eConsent application.
        </div>
        <hr />
      </motion.li>
      <motion.li
        initial="initial"
        animate="animate"
        custom={1.2}
        variants={variants}
        viewport={{ once: true }}
      >
        <hr />
        <div className="timeline-middle">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="h-5 w-5"
          >
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        <div className="timeline-start mb-10 md:text-end">
          <time className="font-mono italic">2023-2024</time>
          <div className="text-lg font-black">Frontend Developer Intern</div>
          <div className="text-sm font-black">PolicyCON Ltd.</div>
          During my time as a Junior DevOps Engineer, I secured an internship as
          a Frontend Development Intern with PolicyCON Ltd., an exciting company
          poised to revolutionise the think-tank industry by making
          policy-making more public-driven. This role allowed me to gain
          hands-on experience with React, TypeScript, and TailwindCSS while
          developing components, and I'm confident to say that it boosted my
          confidence in presenting to clients, making design choices,
          collaborating with developers, and following good coding practices.
        </div>
      </motion.li>
    </ul>
  );
};

export default Timeline;
