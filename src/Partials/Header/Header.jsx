import { Link } from "react-router-dom";
import "./Header.css";

export default function Header() {
  return (
    <header>
      <nav className="header_nav">
        <Link to="/" className="header_nav__logo"><h1>#VANLIFE</h1></Link>
        <ul className="header_nav__links">
          <li className="header_nav__links__link">
            <Link to="/host">Host</Link>
          </li>
          <li className="header_nav__links__link">
            <Link to="/about">About</Link>
          </li>
          <li className="header_nav__links__link">
            <Link to="/vans">Vans</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

