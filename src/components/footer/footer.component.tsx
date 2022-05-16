import { Fragment, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { openModal } from "../../store/modal/modal.actions";
import { companyName } from "./footer.utils";
import "./footer.css";

function Footer() {
  const [links, setLinks] = useState<string[]>([]);

  const dispatch = useDispatch();

  useEffect(() => {
    // TODO: later will be replaced with some Redux or Context call
    setLinks(["Allgemeine Informationen", "Datenschutz", "Impressum"]);
  }, []);

  return (
    <div className="footer">
      <hr className="footer__line" />
      <span className="footer__company">{companyName("schuldenanalyse-kostenlos.de")}</span>
      <ul className="footer__list">
        {links.map((link: string, index: number) => (
          <Fragment key={link}>
            <li className="footer__item">
              <button type="button" className="footer__button" onClick={() => dispatch(openModal())}>
                {link}
              </button>
            </li>
            {index < links.length - 1 && (
              <li className="footer__item">
                <div className="footer__separator" />
              </li>
            )}
          </Fragment>
        ))}
      </ul>
    </div>
  );
}

export default Footer;
