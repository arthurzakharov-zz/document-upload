import { useState } from "react";
import { ImageListType, ImageType } from "react-images-uploading";
import { useDispatch, useSelector } from "react-redux";
import { selectFileCategoryByName } from "../../store/file/file.selectors";
import { openModal } from "../../store/modal/modal.actions";
import SvgQuestion from "../../svg/Question";
import SvgArrow from "../../svg/Arrow";
import Collapse from "../collapse";
import File from "../file";
import UploadButton from "../upload-button";
import { category, categoryArrow } from "./category.utils";
import { LoadModalProps } from "../../modals/load/load.modal";
import "./category.css";

export interface CategoryProps {
  label: string;
  multi: boolean;
}

function Category(props: CategoryProps) {
  const { label, multi } = props;

  const [opened, setOpened] = useState<boolean>(false);

  const files = useSelector(selectFileCategoryByName(label));

  const dispatch = useDispatch();

  const clickHandler = () => {
    dispatch(openModal("load", { multi, label } as LoadModalProps));
  };

  const countFiles = (imageList: ImageListType): number => {
    return imageList ? imageList.length : 0;
  };

  const openFiles = () => {
    if (multi && countFiles(files)) {
      setOpened(!opened);
    }
  };

  return files ? (
    <div className={category(opened)}>
      <div className="category__content">
        <div className="category__left">
          {multi && files.length > 0 ? (
            <button type="button" className="category__button" onClick={openFiles}>
              {files.length > 0 && <SvgArrow className={categoryArrow(opened)} />}
              <h6 className="category__label">{label}</h6>
            </button>
          ) : (
            <h6 className="category__label">{label}</h6>
          )}
          <div className="category__question">
            <SvgQuestion className="category__symbol" />
          </div>
        </div>
        <div className="category__right">
          {multi && files.length > 0 ? <div className="category__count">{files.length}</div> : null}
          <UploadButton loaded={!!files.length} plus={multi} onClick={clickHandler} />
        </div>
      </div>
      <Collapse opened={opened}>
        <div className="category__files">
          {files.map((image: ImageType) => (
            <div key={image.file!.name} className="category__file">
              <File name={image.file!.name} />
            </div>
          ))}
        </div>
      </Collapse>
    </div>
  ) : null;
}

export default Category;
