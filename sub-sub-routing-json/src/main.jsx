import React from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import Root from "./routes/root/Root";
import Home from "./routes/root/Home";
import ApplePhones, { loader as appleListLoader } from "./routes/ApplePhones";
import Phone, { loader as applePhoneLoader } from "./routes/Phone";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>
      <Route index element={<Home />} />
      <Route path="apple" loader={appleListLoader} element={<ApplePhones />} />
      <Route
        path="apple/:phoneId"
        loader={applePhoneLoader}
        element={<Phone />}
      />
    </Route>
  )
);

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
