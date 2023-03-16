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
import Sales from "./routes/sales/Sales";
import Overview from "./routes/sales/Overview";
import Invoice, { loader as invoiceLoader } from "./routes/sales/Invoice";
import InvoicesList from "./routes/sales/InvoicesList";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<Home />}></Route>
      <Route path="sales" element={<Sales />}>
        <Route path="overview" element={<Overview />}></Route>
        <Route path="invoices" element={<InvoicesList />}>
          <Route
            path=":invoiceId"
            loader={invoiceLoader}
            element={<Invoice />}
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
