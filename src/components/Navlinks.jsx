import { NAV_LINKS } from "../constants/links";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../context/context";

const Navlinks = () => {
  const { scrollToProjects } = useGlobalContext();
  return (
    <>
      {NAV_LINKS.map((link) => {
        const { id, url, label } = link;
        return (
          <li key={id}>
            {label === "my work" ? (
              <button
                type="button"
                onClick={scrollToProjects}
                className="hover:underline"
              >
                {label}
              </button>
            ) : (
              <Link to={url} className="hover:underline">
                {label}
              </Link>
            )}
          </li>
        );
      })}

      <button type="button">Download CV</button>
    </>
  );
};

export default Navlinks;
