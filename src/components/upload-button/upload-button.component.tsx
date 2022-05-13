import { MouseEvent } from "react";
import SvgCheck from "../../svg/Check";
import SvgUpload from "../../svg/Upload";
import { uploadButton } from "./upload-button.utils";
import "./upload-button.css";

export interface UploadButtonProps {
  loaded: boolean;
  onClick: (e: MouseEvent<HTMLButtonElement>) => void;
}

function UploadButton(props: UploadButtonProps) {
  const { loaded, onClick } = props;
  return (
    <button data-testid="upload-button" type="button" className={uploadButton(loaded)} onClick={onClick}>
      {loaded ? (
        <SvgCheck data-testid="upload-button-check" className="upload-button__check" />
      ) : (
        <>
          <span className="upload-button__text">Hochladen</span>
          <SvgUpload data-testid="upload-button-upload" className="upload-button__upload" />
        </>
      )}
    </button>
  );
}

export default UploadButton;
