import { Logo, Phone, CircleCheck } from "../../svg";
import "./header.css";

function Header() {
  return (
    <header className="header">
      <Logo className="header__logo" />
      <div className="header__info">
        <a href="tel:030220662388" className="header__link">
          <Phone className="header__phone" />
          <span className="header__number">030 / 22 066 23 88</span>
        </a>
        <div className="header__time">
          <CircleCheck className="header__circle" />
          <span className="header__schedule">Mo-Fr von 8:00 - 20:00</span>
        </div>
      </div>
    </header>
  );
}

export default Header;
