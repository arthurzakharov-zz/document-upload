import type { MouseEvent } from "react";
import { Check, Plus, Upload } from "../../svg";
import type { UploadButtonPropsType } from "./upload-button.types";
import { uploadButton } from "./upload-button.utils";
import "./upload-button.css";

function UploadButton(props: UploadButtonPropsType) {
  const { loaded, multiple, onClick } = props;

  const onClickHandler = (e: MouseEvent<HTMLButtonElement>) => {
    if (!loaded) {
      onClick(e);
    }
  };

  return loaded ? (
    <div data-testid="upload-div" className={uploadButton(loaded)}>
      <Check data-testid="upload-button-check" className="upload-button__check" />
    </div>
  ) : (
    <button
      data-testid="upload-button"
      aria-label={multiple ? "upload-single-file" : "upload-multiple-file"}
      type="button"
      className={uploadButton(loaded)}
      onClick={onClickHandler}
    >
      <span className="upload-button__text">{multiple ? "Hinzufügen" : "Hochladen"}</span>
      {multiple ? (
        <Plus data-testid="upload-button-plus" className="upload-button__plus" />
      ) : (
        <Upload data-testid="upload-button-upload" className="upload-button__upload" />
      )}
    </button>
  );
}

export default UploadButton;
