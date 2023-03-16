import "./Root.css";
import { Link, Outlet } from "react-router-dom";

function Root() {
  let products;

  fetch("https://dummyjson.com/products/1")
    .then((res) => res.json())
    .then((json) => (products = json));

  return (
    <div className="Root">
      <div>
        <h1>URBAN PHONES INC.</h1>
        <nav>
          <Link to="/">Home</Link>
          <Link to="apple">Iphones</Link>
          <Link to="android">Android phones</Link>
        </nav>
      </div>
      <Outlet />
    </div>
  );
}

export default Root;
