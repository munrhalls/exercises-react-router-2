import React from "react";
import { Link, Outlet } from "react-router-dom";

function Sales(props) {
  return (
    <div>
      <h1>Sales</h1>
      <div style={{ display: "flex", justifyContent: "space-around" }}>
        <Link to="overview">Overview</Link>
        <Link to="subscriptions">Subscriptions</Link>
        <Link to="invoices">Invoices</Link>
        <Link to="customers">Customers</Link>
        <Link to="depositors">Deposits</Link>
      </div>
      <Outlet />
    </div>
  );
}

export default Sales;
