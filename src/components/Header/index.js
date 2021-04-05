import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import logo from '../../logo.png';
import './style.scss';

function Header({ isHome }) {

  const { t } = useTranslation()

  return (
    <header className={`header ${isHome ? 'home-header' : ''}`}>
      <img src={logo} alt="logo dog academy" />
      <ul>
        <li>
          <Link to="/">{t('home')}</Link>
        </li>
        <li>
          <Link to="/about">{t('about')}</Link>
        </li>
        <li>
          <Link to="/books">{t('books')}</Link>
        </li>
      </ul>
    </header>
  )
}

export default Header