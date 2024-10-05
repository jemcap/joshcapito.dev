import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import ErrorElement from "./components/ErrorElement";
import Contact from "./pages/Contact";
import Work from "./pages/Work";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    children: [
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
      <RouterProvider router={router} />
    </>
  );
}

export default App;
