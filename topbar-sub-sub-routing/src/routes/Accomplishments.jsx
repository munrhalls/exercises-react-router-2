import React from "react";
import { Link, Outlet } from "react-router-dom";

function Accomplishments(props) {
  return (
    <div style={{ display: "flex" }}>
      <nav>
        <h1>Accomplishments</h1>
        <Link to="usa">USA</Link>
        <Link to="greatBritain">Great Britain</Link>
        <Link to="poland">Poland</Link>
        <Link to="finland">Finland</Link>
        <Link to="spain">Spain</Link>
      </nav>
      <Outlet />
    </div>
  );
}

export default Accomplishments;
