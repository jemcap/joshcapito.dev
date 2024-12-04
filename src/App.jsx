import { createBrowserRouter, RouterProvider } from "react-router-dom";

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
        path: "/project/:id",
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
