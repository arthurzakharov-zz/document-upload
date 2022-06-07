import { Fragment, useEffect, useState } from "react";
import { modalOpen } from "../../redux/modal/modal.slice";
import useReactRedux from "../../hooks/useReactRedux";
import { companyName } from "./footer.utils";
import type { ModalIdType } from "../../types";
import type { FooterLinkType } from "./footer.types";
import "./footer.css";

function Footer() {
  const [links, setLinks] = useState<FooterLinkType[]>([]);

  const { dispatch } = useReactRedux();

  useEffect(() => {
    // TODO: later will be replaced with some Redux or Context call
    setLinks([
      { label: "Allgemeine Informationen", id: "general_info" },
      { label: "Datenschutz", id: "privacy" },
      { label: "Impressum", id: "impressum" },
    ]);
  }, []);

  const linkClick = (name: ModalIdType): void => {
    dispatch(modalOpen({ type: name, size: "sm", withCloseButton: true }));
  };

  return (
    <footer className="footer">
      <hr className="footer__line" />
      <span className="footer__company">{companyName("schuldenanalyse-kostenlos.de")}</span>
      <ul className="footer__list">
        {links.map((link: FooterLinkType, index: number) => (
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
    </footer>
  );
}

export default Footer;
