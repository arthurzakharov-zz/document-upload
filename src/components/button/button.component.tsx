import "./button.css";

export interface ButtonProps {
  text: string;
  onClick: () => void;
  disabled?: boolean;
}

function Button(props: ButtonProps) {
  const { text, onClick, disabled } = props;
  return (
    <button type="button" aria-label={text} disabled={disabled} className="button" onClick={onClick}>
      {text}
    </button>
  );
}

export default Button;
