import { NAV_LINKS } from "../constants/links";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../context/context";

const Navlinks = () => {
  const { scrollToProjects, scrollToContact } = useGlobalContext();
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
                aria-label="Scroll to Projects section"
              >
                {label}
              </button>
            ) : label === "contact" ? (
              <button
                type="button"
                onClick={scrollToContact}
                className="hover:underline"
                aria-label="Scroll to Contact section"
              >
                {label}
              </button>
            ) : (
              <Link to={url} className="hover:underline" aria-label={label}>
                {label}
              </Link>
            )}
          </li>
        );
      })}
    </>
  );
};

export default Navlinks;
