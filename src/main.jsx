import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App.jsx";
import Home from "./Home.jsx"; 
import Section3 from "./components/sections/Section3.jsx";
import PageNotFound from "./components/PageNotFound.jsx";
import Contact from "./components/sections/Contact.jsx";
import HeroSection from "./components/hero-section/HeroSection.jsx";
import Properties from "./components/pages/Properties.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />, 
    children: [
      {
        index: true,
        element: <Home />, 
      },
      {
        path: "properties",
        element: <Properties />, 
      },
      {
        path: "contact",
        element: <Contact/>
      },
      {
        path: "search",
        element: <HeroSection/>
      },
      {
        path: "*",
        element: <PageNotFound />, 
      }
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
