import { Fragment, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { openModal } from "../../store/modal/modal.actions";
import { companyName } from "./footer.utils";
import { FooterLink, ModalId } from "../../types";
import "./footer.css";

function Footer() {
  const [links, setLinks] = useState<FooterLink[]>([]);

  const dispatch = useDispatch();

  useEffect(() => {
    // TODO: later will be replaced with some Redux or Context call
    setLinks([
      { label: "Allgemeine Informationen", id: "general_info" },
      { label: "Datenschutz", id: "privacy" },
      { label: "Impressum", id: "impressum" },
    ]);
  }, []);

  const linkClick = (name: ModalId): void => {
    dispatch(openModal(name));
  };

  return (
    <div className="footer">
      <hr className="footer__line" />
      <span className="footer__company">{companyName("schuldenanalyse-kostenlos.de")}</span>
      <ul className="footer__list">
        {links.map((link: FooterLink, index: number) => (
          <Fragment key={link.id}>
            <li className="footer__item">
              <button type="button" className="footer__button" onClick={() => linkClick(link.id)}>
                {link.label}
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
