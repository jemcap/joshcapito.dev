import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MoreAbout from "./pages/MoreAbout";
import Home from "./pages/Home";
import Landing from "./pages/Landing";
import Work from "./pages/Work";
import { AppProvider } from "./context/context";
import { ToastContainer } from "react-toastify";

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
    ],
  },
]);

function App() {
  return (
    <>
      <AppProvider>
        <RouterProvider router={router} />
        <ToastContainer />
      </AppProvider>
    </>
  );
}

export default App;
