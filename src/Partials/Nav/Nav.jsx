import { Link } from "react-router-dom";
import About from "../../About/About";
import Home from "../../Home/Home";
import "./Nav.css";

function Nav() {
  return (
    <header>
      <nav>
        <Link to="/"><h1>#VANLIFE</h1></Link>
        <ul>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/vans">Vans</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Nav;
