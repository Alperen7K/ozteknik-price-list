import { Navigate, useRoutes } from "react-router-dom";

import { MainLayout } from "../layouts";
import { Home, Price } from "../pages";
export const Router = () => {
  return useRoutes([
    {
      path: "",
      element: <MainLayout />,
      children: [
        { path: "/", element: <Home /> },
        { path: "/price/:id", element: <Price /> },
      ],
    },
    { path: "*", element: <Navigate to="/" replace /> },
  ]);
};
