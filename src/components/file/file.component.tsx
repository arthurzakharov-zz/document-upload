import { MouseEvent } from "react";
import SvgTrash from "../../svg/Trash";
import SvgFile from "../../svg/File";
import "./file.css";

export interface FileProps {
  name: string;
  onClick: (e: MouseEvent<HTMLButtonElement>) => void;
}

function File(props: FileProps) {
  const { name, onClick } = props;
  return (
    <div className="file">
      <div className="file__info">
        <SvgFile className="file__icon" />
        <span data-testid="file-name" className="file__name">
          {name}
        </span>
      </div>
      <button data-testid="file-button" type="button" className="file__button" onClick={onClick}>
        <SvgTrash className="file__delete" />
      </button>
    </div>
  );
}

export default File;
