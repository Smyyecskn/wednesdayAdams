import { NavLink } from "react-router-dom";
import "./navbar.scss";

const Navbar = () => {
  return (
    <div className="nav">
      <ul className="nav__list">
        <li className="nav__item">
          <NavLink to="/" className="nav__link nav__link--active">
            Home
          </NavLink>
        </li>
        <li className="nav__item">
          <NavLink to="/about" className="nav__link">
            About Me
          </NavLink>
        </li>
        <li className="nav__item">
          <NavLink to="/project" className="nav__link">
            My Projects
          </NavLink>
        </li>
        <li className="nav__item">
          <NavLink to="/contact" className="nav__link">
            Contact
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
