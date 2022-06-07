import type { ButtonPropsType } from "./button.types";
import "./button.css";

function Button(props: ButtonPropsType) {
  const { text, onClick, disabled } = props;
  return (
    <button type="button" aria-label={text} disabled={disabled} className="button" onClick={onClick}>
      {text}
    </button>
  );
}

export default Button;
