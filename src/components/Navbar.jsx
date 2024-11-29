import Navlinks from "./Navlinks";
import { motion, useScroll, useTransform } from "framer-motion";
import { useState, useEffect } from "react";

const Navbar = () => {
  const [showLogo, setShowLogo] = useState(true);
  const { scrollY } = useScroll();

  const width = useTransform(scrollY, [0, 300], ["100vw", "40vw"]);
  const borderRadius = useTransform(scrollY, [0, 300], ["0px", "20px"]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  useEffect(() => {
    return scrollY.onChange((currentY) => {
      if (currentY > 150) {
        setShowLogo(false);
      } else {
        setShowLogo(true);
      }
    });
  }, [scrollY]);

  return (
    <motion.nav
      className="navbar bg-base-100 flex fixed left-0 right-0 mx-auto z-50 glass shadow-lg"
      style={{
        width,
        borderRadius,
      }}
    >
      <div className="align-elements navbar">
        {showLogo && (
          <motion.div className="navbar-start" style={{ opacity }}>
            <a href="/" className=" text-sm font-semibold font-gray-500">
              joshcapito.dev
            </a>
          </motion.div>
        )}

        <div
          className={`navbar-end hidden lg:flex ${
            showLogo
              ? "hidden lg:flex"
              : "flex flex-1 justify-center items-center"
          }`}
        >
          <ul className="flex gap-8 justify-center text-center items-center">
            <Navlinks />
          </ul>
        </div>
        <div
          className={`dropdown flex lg:hidden  flex-1 navbar-end ${
            showLogo
              ? "flex lg:hidden"
              : "flex flex-1 items-center justify-center"
          }`}
        >
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost lg:hidden"
            aria-label="Menu bar"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-lg dropdown-content bg-base-100 rounded-box z-[1] mt-72 w-52 p-2 shadow flex"
          >
            <Navlinks />
          </ul>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
