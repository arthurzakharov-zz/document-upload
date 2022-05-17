import { ChangeEvent } from "react";
import "./input.css";

export interface InputProps {
  id: string;
  name: string;
  placeholder: string;
  onChange: (name: string, value: string) => void;
}

function Input(props: InputProps) {
  const { id, name, placeholder, onChange } = props;

  const inputHandler = (e: ChangeEvent<HTMLInputElement>) => {
    onChange(name, e.target.value);
  };

  return (
    <label htmlFor={id} className="input">
      <input id={id} name={name} placeholder={placeholder} className="input__field" onChange={inputHandler} />
    </label>
  );
}

export default Input;
