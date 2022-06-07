import useReactRedux from "../../hooks/useReactRedux";
import { modalClose } from "../../redux/modal/modal.slice";
import { Error } from "../../svg";
import { Button } from "../../components";
import "./error.css";

function ErrorModal() {
  const { dispatch } = useReactRedux();

  const onClick = () => {
    dispatch(modalClose());
  };

  return (
    <div className="error">
      <div className="error__content">
        <div className="error__icon-wrap">
          <Error className="error__icon" />
        </div>
        <h6 className="error__head">Irgendwas ist schief gelaufen!</h6>
        <div className="error__text">
          <p className="error__paragraph">
            Bei der Übermittlung Ihrer Dateien ist ein Fehler aufgetreten. Versuchen Sie es bitte noch einmal.
          </p>
          <p className="error__paragraph">
            Sollte das Problem erneut auftreten, melden Sie sich bitte unter 030 / 22 066 23 88.
          </p>
        </div>
        <Button text="Fenster schließen" onClick={onClick} />
      </div>
    </div>
  );
}

export default ErrorModal;
