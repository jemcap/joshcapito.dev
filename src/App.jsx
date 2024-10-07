import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MoreAbout from "./pages/MoreAbout";
import Home from "./pages/Home";
import Landing from "./pages/Landing";
import Contact from "./pages/Contact";
import Work from "./pages/Work";
import { AppProvider } from "./context/context";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    children: [
      {
        index: true,
        element: <Landing />,
      },
      {
        path: "/information",
        element: <MoreAbout />,
      },
      {
        path: "/work",
        element: <Work />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
    ],
  },
]);

function App() {
  return (
    <>
      <AppProvider>
        <RouterProvider router={router} />
      </AppProvider>
    </>
  );
}

export default App;
