import "./App.css";
import { Link, NavLink, Outlet } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <div>
        <h1>WEBSITE FIRM APP</h1>
        <Outlet />
      </div>
      <nav>
        <h1>Our firm</h1>
        <Link to="/">Homepage</Link>
        <Link to="dashboard">Dashboard</Link>
        <Link to="clients">Clients</Link>
        <NavLink
          to="accomplishments"
          style={({ isActive, isPending }) => {
            return {
              color: isActive ? "lightblue" : "inherit",
            };
          }}
          className={({ isActive, isPending }) => {
            return isActive ? "active" : isPending ? "pending" : "";
          }}
        >
          Accomplishments
        </NavLink>
        <Link to="expenses">Expenses</Link>
        <Link to="contacts">Contacts</Link>
      </nav>
    </div>
  );
}

export default App;
