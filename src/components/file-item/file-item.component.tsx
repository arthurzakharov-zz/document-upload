import type { FileItemPropsType } from "./file-item.types";
import { File, Trash } from "../../svg";
import "./file-item.css";

function FileItem(props: FileItemPropsType) {
  const { name, onClick } = props;
  return (
    <div className="file-item">
      <div className="file-item__info">
        <File className="file-item__icon" />
        <span data-testid="file-item-name" className="file-item__name">
          {name}
        </span>
      </div>
      {onClick && (
        <button data-testid="file-item-button" type="button" className="file-item__button" onClick={onClick}>
          <Trash className="file-item__delete" />
        </button>
      )}
    </div>
  );
}

export default FileItem;
