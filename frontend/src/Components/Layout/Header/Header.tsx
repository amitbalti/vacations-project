import { NavLink, useNavigate } from "react-router-dom";
import "./Header.css";

function Header(): JSX.Element {
  return (
    <div className="Header">
      <NavLink to="/">
        <h1 className="HomeHeader">My Vacations</h1>
      </NavLink>
      {/* <Clock /> */}
    </div>
  );
}

export default Header;
