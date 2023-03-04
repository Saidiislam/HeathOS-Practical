import { createBrowserRouter } from "react-router-dom";
import Error from "../pages/Error/Error";
import Login from "../pages/Auth/Login";
import Registation from "../pages/Auth/Registation";
import Private from "../pages/Auth/Private";
import Dashboard from "../pages/Dashboard/Dashboard";
import ProductPage from "../pages/ProductPage";

export default function MainRouter() {
  return createBrowserRouter([
    {
      path: "/",
      element: <ProductPage />,
      errorElement: <Error />,
    },
    {
      path: "/login",
      element: <Login />,
      errorElement: <Error />,
    },
    {
      path: "/signup",
      element: <Registation />,
      errorElement: <Error />,
    },
    {
      path: "/private",
      element: <Private />,
      errorElement: <Error />,
    },
    {
      path: "/dashboard",
      element: <Dashboard />,
      errorElement: <Error />,
    },
  ]);
}
