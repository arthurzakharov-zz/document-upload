import { useEffect, useState } from "react";
import { useReactRedux } from "../../hooks";
import "./lead-info.css";
import { selectGeneralCaseReference } from "../../redux/general/general.selectors";

function LeadInfo() {
  const [name, setName] = useState<string>("");

  const { useSelector } = useReactRedux();

  const caseReference = useSelector(selectGeneralCaseReference);

  useEffect(() => {
    // TODO: later will be replaced with some Redux or Context call
    setName("Luca Zamai");
  }, []);

  return (
    <div className="lead-info">
      <h1 className="lead-info__title">Dokumentenübermittlung</h1>
      <div className="lead-info__content">
        <div data-testid="info-number" className="lead-info__label">
          <strong>Aktenzeichen: </strong>
          {caseReference}
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
