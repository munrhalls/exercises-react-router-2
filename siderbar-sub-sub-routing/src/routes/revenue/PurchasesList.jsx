import React from "react";
import { Link, Outlet } from "react-router-dom";

function PurchasesList(props) {
  return (
    <div style={{ display: "flex" }}>
      <nav>
        <h1>Revenue from purchases:</h1>
        <Link to="london">London Store</Link>
        <Link to="barcelona">Barcelona Store</Link>
        <Link to="madrit">Madrit Store</Link>
        <Link to="oslo">Oslo Store</Link>
        <Link to="stockholm">Stockholm Store</Link>
      </nav>

      <Outlet />
    </div>
  );
}

export default PurchasesList;
