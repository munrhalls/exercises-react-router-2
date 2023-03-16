import React from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import App from "./App";
import Home from "./routes/Home";
import Revenue from "./routes/revenue/Revenue";
import PurchasesList from "./routes/revenue/PurchasesList";
import Purchase, { loader as purchaseLoader } from "./routes/revenue/Purchase";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<Home />} />
      <Route path="revenue" element={<Revenue />}>
        <Route path="purchases" element={<PurchasesList />}>
          <Route
            path=":purchaseId"
            loader={purchaseLoader}
            element={<Purchase />}
          ></Route>
        </Route>
      </Route>
    </Route>
  )
);

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
