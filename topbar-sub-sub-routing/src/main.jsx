import React from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";
import App from "./App";
import Home from "./routes/Home";
import Accomplishments from "./routes/Accomplishments";
import {
  AccomplishmentItem,
  loader as accomplishmentLoader,
} from "./routes/AccomplishmentItem";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<Home />} />
      <Route path="accomplishments" element={<Accomplishments />}>
        <Route
          path=":accomplishmentId"
          loader={accomplishmentLoader}
          element={<AccomplishmentItem />}
        ></Route>
      </Route>
    </Route>
  )
);

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
