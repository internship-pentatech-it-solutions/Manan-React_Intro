import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import { Shop } from "./routes/Shop.jsx";
import { About } from "./routes/About.jsx";
import { Contact } from "./routes/Contact.jsx";
import { Service } from "./routes/Service.jsx";

const router = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "/shop", element: <Shop /> },
  { path: "/service", element: <Service /> },
  { path: "/about", element: <About /> },
  { path: "/contact", element: <Contact /> },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
