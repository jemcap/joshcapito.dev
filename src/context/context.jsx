import { createContext, useContext, useRef } from "react";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const projectsRef = useRef(null);
  const contactRef = useRef(null);
  const aboutRef = useRef(null);

  const scrollToProjects = () => {
    if (projectsRef.current) {
      projectsRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToContact = () => {
    if (contactRef.current) {
      contactRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  const scrollToAbout = () => {
    if (aboutRef.current) {
      aboutRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <AppContext.Provider
      value={{
        scrollToProjects,
        scrollToContact,
        scrollToAbout,
        aboutRef,
        projectsRef,
        contactRef,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
