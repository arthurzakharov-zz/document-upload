import { MouseEvent } from "react";
import SvgCheck from "../../svg/Check";
import SvgUpload from "../../svg/Upload";
import { uploadButton } from "./upload-button.utils";
import "./upload-button.css";
import SvgPlus from "../../svg/Plus";

export interface UploadButtonProps {
  loaded: boolean;
  plus: boolean;
  onClick: (e: MouseEvent<HTMLButtonElement>) => void;
}

function UploadButton(props: UploadButtonProps) {
  const { loaded, plus, onClick } = props;
  return (
    <button data-testid="upload-button" type="button" className={uploadButton(loaded)} onClick={onClick}>
      {loaded ? (
        <SvgCheck data-testid="upload-button-check" className="upload-button__check" />
      ) : (
        <>
          <span className="upload-button__text">Hochladen</span>
          {plus ? (
            <SvgPlus data-testid="upload-button-plus" className="upload-button__plus" />
          ) : (
            <SvgUpload data-testid="upload-button-upload" className="upload-button__upload" />
          )}
        </>
      )}
    </button>
  );
}

export default UploadButton;
