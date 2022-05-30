import { MouseEvent } from "react";
import SvgCheck from "../../svg/Check";
import SvgPlus from "../../svg/Plus";
import SvgUpload from "../../svg/Upload";
import { uploadButton } from "./upload-button.utils";
import "./upload-button.css";

export interface UploadButtonProps {
  loaded: boolean;
  multiple: boolean;
  onClick: (e: MouseEvent<HTMLButtonElement>) => void;
}

function UploadButton(props: UploadButtonProps) {
  const { loaded, multiple, onClick } = props;

  const onClickHandler = (e: MouseEvent<HTMLButtonElement>) => {
    if (!loaded) {
      onClick(e);
    }
  };

  return loaded ? (
    <div data-testid="upload-div" className={uploadButton(loaded)}>
      <SvgCheck data-testid="upload-button-check" className="upload-button__check" />
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
        <SvgPlus data-testid="upload-button-plus" className="upload-button__plus" />
      ) : (
        <SvgUpload data-testid="upload-button-upload" className="upload-button__upload" />
      )}
    </button>
  );
}

export default UploadButton;
