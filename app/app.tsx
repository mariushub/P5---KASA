import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
  ScrollRestoration,
} from "react-router";
import Home from "./pages/home";
import LogementPage from "./pages/logement";
import About from "./pages/about";
import NotFound from "./pages/404";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./sass/index.scss";

function Root() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
      <ScrollRestoration />
    </>
  );
}

const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "logement/:id",
        Component: LogementPage,
      },
      {
        path: "a-propos",
        Component: About,
      },
      {
        path: "*",
        Component: NotFound,
      },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
