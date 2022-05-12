import SvgLogo from "../../svg/Logo";
import SvgPhone from "../../svg/Phone";
import SvgCircleCheck from "../../svg/CircleCheck";
import "./header.css";

function Header() {
  return (
    <div className="header">
      <SvgLogo className="header__logo" />
      <div className="header__info">
        <a href="tel:030220662388" className="header__link">
          <SvgPhone className="header__phone" />
          <span className="header__number">030 / 22 066 23 88</span>
        </a>
        <div className="header__time">
          <SvgCircleCheck className="header__circle" />
          <span className="header__schedule">Mo-Fr von 8:00 - 20:00</span>
        </div>
      </div>
    </div>
  );
}

export default Header;
