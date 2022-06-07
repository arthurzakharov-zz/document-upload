import type { ChangeEvent } from "react";
import type { InputPropsType } from "./input.types";
import "./input.css";

function Input(props: InputPropsType) {
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
