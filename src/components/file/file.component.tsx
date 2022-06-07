import type { FilePropsType } from "./file.types";
import { File as FileIcon, Trash } from "../../svg";
import "./file.css";

function File(props: FilePropsType) {
  const { name, onClick } = props;
  return (
    <div className="file">
      <div className="file__info">
        <FileIcon className="file__icon" />
        <span data-testid="file-name" className="file__name">
          {name}
        </span>
      </div>
      {onClick && (
        <button data-testid="file-button" type="button" className="file__button" onClick={onClick}>
          <Trash className="file__delete" />
        </button>
      )}
    </div>
  );
}

export default File;
