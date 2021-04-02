import { Link } from "react-router-dom";
import logo from '../../logo.png';
import './style.scss';

function Header() {
  return (
    <header className="header">
      <img src={logo} alt="logo dog academy" />
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/book">Books</Link>
        </li>
      </ul>
    </header>
  )
}

export default Header