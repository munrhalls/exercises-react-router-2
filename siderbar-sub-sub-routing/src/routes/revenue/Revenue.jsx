import React from "react";
import { Link, Outlet } from "react-router-dom";

function Revenue(props) {
  return (
    <div>
      <h1>ITEMS - SOURCES OF INCOME:</h1>
      <nav style={{ display: "flex", justifyContent: "space-around" }}>
        <Link to="overview">Overview</Link>
        <Link to="subscriptions">Subscriptions</Link>
        <Link to="purchases">Purchases</Link>
        <Link to="customers">Customers</Link>
        <Link to="deposits">Deposits</Link>
      </nav>
      <Outlet />
    </div>
  );
}

export default Revenue;
