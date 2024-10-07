import { createContext, useContext, useRef } from "react";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const projectsRef = useRef(null);

  const scrollToProjects = () => {
    if (projectsRef.current) {
      projectsRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <AppContext.Provider value={{ scrollToProjects, projectsRef }}>
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
