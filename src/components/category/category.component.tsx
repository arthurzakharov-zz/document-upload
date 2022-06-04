import { useEffect, useState } from "react";
import useReactRedux from "../../hooks/useReactRedux";
import { selectRecordsByCategory } from "../../redux/image/image.selectors";
import { modalOpen } from "../../redux/modal/modal.slice";
import { DocumentCategoryType, ImageRecordType } from "../../types";
import { category, categoryArrow } from "./category.utils";
import SvgQuestion from "../../svg/Question";
import SvgArrow from "../../svg/Arrow";
import Collapse from "../collapse";
import File from "../file";
import UploadButton from "../upload-button";
import "./category.css";
import Tooltip from "../tooltip";

export interface CategoryProps {
  documentCategory: DocumentCategoryType;
}

function Category(props: CategoryProps) {
  const { documentCategory } = props;
  const { label, multiple, tooltip } = documentCategory;

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
          {tooltip && (
            <div className="category__question-wrap">
              <Tooltip content={tooltip}>
                <div className="category__question">
                  <SvgQuestion className="category__symbol" />
                </div>
              </Tooltip>
            </div>
          )}
        </div>
        <div className="category__right">
          {inMultiModeHasImages() ? <div className="category__count">{images.length}</div> : null}
          <UploadButton loaded={!multiple && !!images.length} multiple={multiple} onClick={clickHandler} />
        </div>
      </div>
      <Collapse opened={opened}>
        <div className="category__files">
          {images.map((image: ImageRecordType) => (
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
