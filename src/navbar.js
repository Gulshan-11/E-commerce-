import "./navbar.css";
import logo from "./RedStore_Img/logo-1.png";

function Navbar() {
  return (
    <div className="navbar position">
      <img src={logo} alt="logo" width="100px" />
      <ul className="navlist">
        <li>contacts</li>
        <li>About us</li>
        <li>Login</li>
      </ul>
    </div>
  );
}

export default Navbar;
