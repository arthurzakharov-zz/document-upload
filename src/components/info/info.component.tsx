import "./info.css";
import { useEffect, useState } from "react";

function Info() {
  const [number, setNumber] = useState<string>("");
  const [name, setName] = useState<string>("");

  useEffect(() => {
    // TODO: later will be replaced with some Redux or Context call
    setNumber("SBE22.0121-24046542");
    setName("Luca Zamai");
  }, []);

  return (
    <div className="info">
      <h1 className="info__title">Dokumentenübermittlung</h1>
      <div className="info__info">
        <div data-testid="info-number" className="info__label">
          <b>Referenznummer: </b>
          {number}
        </div>
        <div data-testid="info-name" className="info__label">
          <b>Name: </b>
          {name}
        </div>
      </div>
      <p className="info__description">
        Klicken Sie auf die orangenen Buttons, um die jeweiligen Dateien zu übermitteln.
      </p>
    </div>
  );
}

export default Info;
