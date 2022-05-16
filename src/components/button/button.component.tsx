import "./button.css";

export interface ButtonProps {
  text: string;
  onClick: () => void;
}

function Button(props: ButtonProps) {
  const { text, onClick } = props;
  return (
    <button type="button" className="button" onClick={onClick}>
      {text}
    </button>
  );
}

export default Button;
