import React from "react";
import { Link, Outlet } from "react-router-dom";

function InvoicesList(props) {
  return (
    <div style={{ display: "flex" }}>
      <div>
        <h1>INVOICES</h1>
        <Link to="santaBarb">Santa Barb</Link>
        <Link to="santaMonica">Santa Monica</Link>
        <Link to="seattle">Seattle</Link>
        <Link to="huston">Huston</Link>
        <Link to="moorland">Moorland</Link>
      </div>

      <Outlet />
    </div>
  );
}

export default InvoicesList;
