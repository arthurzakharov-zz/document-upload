import { useEffect, useState } from "react";
import { selectRecordsByCategory } from "../../store/image/image.selectors";
import { modalOpen } from "../../store/modal/modal.slice";
import { DocumentCategory, ImageRecord } from "../../types";
import SvgQuestion from "../../svg/Question";
import SvgArrow from "../../svg/Arrow";
import Collapse from "../collapse";
import File from "../file";
import UploadButton from "../upload-button";
import { category, categoryArrow } from "./category.utils";
import "./category.css";
import useReactRedux from "../../hooks/useReactRedux";

export interface CategoryProps {
  documentCategory: DocumentCategory;
}

function Category(props: CategoryProps) {
  const { documentCategory } = props;
  const { label, multiple } = documentCategory;

  const [opened, setOpened] = useState<boolean>(false);

  const { dispatch, useSelector } = useReactRedux();

  const images = useSelector(selectRecordsByCategory(label));

  const openAndCloseIfImageWasLoaded = () => {
    if (images.length > 0 && multiple) {
      setOpened(true);
      setTimeout(() => {
        setOpened(false);
      }, 750);
    }
  };

  useEffect(() => {
    openAndCloseIfImageWasLoaded();
  }, [images]);

  const clickHandler = () => {
    dispatch(modalOpen({ type: "load", size: "xs", withCloseButton: true, props: { documentCategory } }));
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
