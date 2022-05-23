import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectRecordsByCategory } from "../../store/image/image.selectors";
import { openModal } from "../../store/modal/modal.actions";
import { DocumentCategory, ImageRecord } from "../../types";
import SvgQuestion from "../../svg/Question";
import SvgArrow from "../../svg/Arrow";
import Collapse from "../collapse";
import File from "../file";
import UploadButton from "../upload-button";
import { category, categoryArrow } from "./category.utils";
import "./category.css";

export interface CategoryProps {
  documentCategory: DocumentCategory;
}

function Category(props: CategoryProps) {
  const { documentCategory } = props;
  const { label, multiple } = documentCategory;

  const [opened, setOpened] = useState<boolean>(false);

  const images = useSelector(selectRecordsByCategory(label));

  const dispatch = useDispatch();

  const clickHandler = () => {
    dispatch(openModal("load", true, { documentCategory }));
  };

  const toggleDetailedView = () => {
    setOpened(!opened);
  };

  const inMultiModeHasImages = (): boolean => multiple && images.length > 0;

  return (
    <div className={category(opened)}>
      <div className="category__content">
        <div className="category__left">
          {inMultiModeHasImages() ? (
            <button type="button" className="category__button" onClick={toggleDetailedView}>
              <SvgArrow className={categoryArrow(opened)} />
              <div className="category__label">{label}</div>
            </button>
          ) : (
            <div className="category__label">{label}</div>
          )}
          <div className="category__question">
            <SvgQuestion className="category__symbol" />
          </div>
        </div>
        <div className="category__right">
          {inMultiModeHasImages() ? <div className="category__count">{images.length}</div> : null}
          <UploadButton loaded={!multiple && !!images.length} multiple={multiple} onClick={clickHandler} />
        </div>
      </div>
      <Collapse opened={opened}>
        <div className="category__files">
          {images.map((image: ImageRecord) => (
            <div key={image.name} className="category__file">
              <File name={image.name} />
            </div>
          ))}
        </div>
      </Collapse>
    </div>
  );
}

export default Category;
