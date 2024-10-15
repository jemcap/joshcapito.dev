import { NAV_LINKS } from "../constants/links";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../context/context";
import CVPdf from "../assets/CV_CAPITO_JOSHUA.docx.pdf";

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
              >
                {label}
              </button>
            ) : label === "contact" ? (
              <button
                type="button"
                onClick={scrollToContact}
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

      <a
        href={CVPdf}
        className="text-center border-4 p-1 rounded-lg border-orange-500 text-orange-700 hover:bg-orange-500 hover:text-white transition-colors 2s ease"
        download={true}
      >
        My CV
      </a>
    </>
  );
};

export default Navlinks;
