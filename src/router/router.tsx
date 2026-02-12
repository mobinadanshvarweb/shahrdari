import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout";
import Home from "../pages/home/Home";
import Add from "../pages/add/Add";
import List from "../pages/list/List";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />, // Landing Page مستقل
  },
  {
    path: "/",
    element: <Layout />, // صفحات داخلی با Header + Outlet
    children: [
      { path: "add", element: <Add /> },
      { path: "list", element: <List /> },
    ],
  },
]);
