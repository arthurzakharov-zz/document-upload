import { MouseEvent } from "react";
import SvgCheck from "../../svg/Check";
import SvgPlus from "../../svg/Plus";
import SvgUpload from "../../svg/Upload";
import { uploadButton } from "./upload-button.utils";
import "./upload-button.css";

export interface UploadButtonProps {
  loaded: boolean;
  plus: boolean;
  onClick: (e: MouseEvent<HTMLButtonElement>) => void;
}

function UploadButton(props: UploadButtonProps) {
  const { loaded, plus, onClick } = props;

  const onClickHandler = (e: MouseEvent<HTMLButtonElement>) => {
    if (!loaded) {
      onClick(e);
    }
  };

  return (
    <button
      data-testid="upload-button"
      type="button"
      className={uploadButton(loaded)}
      tabIndex={loaded ? -1 : 0}
      onClick={onClickHandler}
    >
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
