import { Fragment, useEffect, useState } from "react";
import { companyName } from "./footer.utils";
import "./footer.css";

function Footer() {
  const [links, setLinks] = useState<string[]>([]);

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
              <button type="button" className="footer__button">
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
