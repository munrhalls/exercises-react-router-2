import "./App.css";
import { Link, Outlet } from "react-router-dom";

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
        <Link to="accomplishments">Accomplishments</Link>
        <Link to="expenses">Expenses</Link>
        <Link to="contacts">Contacts</Link>
      </nav>
    </div>
  );
}

export default App;
