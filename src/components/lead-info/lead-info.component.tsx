import { useEffect, useState } from "react";
import "./lead-info.css";

function LeadInfo() {
  const [number, setNumber] = useState<string>("");
  const [name, setName] = useState<string>("");

  useEffect(() => {
    // TODO: later will be replaced with some Redux or Context call
    setNumber("SBE22.0121-24046542");
    setName("Luca Zamai");
  }, []);

  return (
    <div className="lead-info">
      <h1 className="lead-info__title">Dokumentenübermittlung</h1>
      <div className="lead-info__content">
        <div data-testid="info-number" className="lead-info__label">
          <strong>Aktenzeichen: </strong>
          {number}
        </div>
        <div data-testid="info-name" className="lead-info__label">
          <strong>Name: </strong>
          {name}
        </div>
      </div>
      <p className="lead-info__description">
        Klicken Sie auf die orangenen Buttons, um die jeweiligen Dateien zu übermitteln.
      </p>
    </div>
  );
}

export default LeadInfo;
