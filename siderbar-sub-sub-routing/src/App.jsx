import { Link, Outlet } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="App">
      <nav>
        <h1>SIDEBAR</h1>
        <Link to="">home</Link>
        <Link to="dashboard">dashboard</Link>
        <Link to="accounts">accounts</Link>
        <Link to="sales">sales</Link>
        <Link to="expenses">expenses</Link>
        <Link to="reports">reports</Link>
      </nav>

      <Outlet />
    </div>
  );
}

export default App;
