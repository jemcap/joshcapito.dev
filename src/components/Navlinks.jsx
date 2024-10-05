import { NAV_LINKS } from "../constants/links";

const Navlinks = () => {
  return (
    <>
      {NAV_LINKS.map((link) => {
        const { id, url, label } = link;
        return (
          <li key={id}>
            <a href={url}>{label}</a>
          </li>
        );
      })}

      <button type="button">Download CV</button>
    </>
  );
};

export default Navlinks;
