import "./navbar.css";
import logo from "./RedStore_Img/logo-1.png";

function Navbar() {
  return (
    <div className="wrapper">
    <div className='navbar'>
      <img src={logo} alt='logo' width='100px' />
      <ul className='navlist'>
        <li>contacts</li>
        <li>About us</li>
        <li>Login</li>
      </ul>
      <button className="burger-btn">
        <svg
          xmlns='http://www.w3.org/2000/svg'
          x='0px'
          y='0px'
          width='40'
          height='30'
          viewBox='0 -1 30 30'
          >
          <path d='M 3 7 A 1.0001 1.0001 0 1 0 3 9 L 27 9 A 1.0001 1.0001 0 1 0 27 7 L 3 7 z M 3 14 A 1.0001 1.0001 0 1 0 3 16 L 27 16 A 1.0001 1.0001 0 1 0 27 14 L 3 14 z M 3 21 A 1.0001 1.0001 0 1 0 3 23 L 27 23 A 1.0001 1.0001 0 1 0 27 21 L 3 21 z'></path>
        </svg>
      </button>
    </div>
    </div>
  );
}

export default Navbar;
