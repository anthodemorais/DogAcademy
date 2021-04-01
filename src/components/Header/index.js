import { Link } from "react-router-dom";
import './style.scss';

function Header() {
  return (
    <header className="App-header">
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