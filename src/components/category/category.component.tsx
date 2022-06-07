import { useEffect, useState } from "react";
import useReactRedux from "../../hooks/useReactRedux";
import { selectFileCategory } from "../../redux/file/file.selectors";
import { modalOpen } from "../../redux/modal/modal.slice";
import type { FileRecordType } from "../../types";
import { category, categoryArrow } from "./category.utils";
import { Arrow, Question } from "../../svg";
import { Collapse, File, Tooltip, UploadButton } from "..";
import type { CategoryPropsType } from "./category.types";
import "./category.css";

function Category(props: CategoryPropsType) {
  const { documentCategory } = props;
  const { label, multiple, tooltip } = documentCategory;

  const [opened, setOpened] = useState<boolean>(false);

  const { dispatch, useSelector } = useReactRedux();

  const fileCategory = useSelector(selectFileCategory(label));

  const openAndCloseIfFileWasLoaded = () => {
    if (fileCategory.length > 0 && multiple) {
      setOpened(true);
      setTimeout(() => {
        setOpened(false);
      }, 750);
    }
  };

  useEffect(() => {
    openAndCloseIfFileWasLoaded();
  }, [fileCategory]);

  const clickHandler = () => {
    dispatch(modalOpen({ type: "load", size: "xs", withCloseButton: true, props: { documentCategory } }));
  };

  const toggleDetailedView = () => {
    setOpened(!opened);
  };

  const inMultiModeHasFiles = (): boolean => multiple && fileCategory.length > 0;

  return (
    <div className={category(opened)}>
      <div className="category__content">
        <div className="category__left">
          {inMultiModeHasFiles() ? (
            <button type="button" className="category__button" onClick={toggleDetailedView}>
              <Arrow className={categoryArrow(opened)} />
              <div className="category__label">{label}</div>
            </button>
          ) : (
            <div className="category__label">{label}</div>
          )}
          {tooltip && (
            <div className="category__question-wrap">
              <Tooltip content={tooltip}>
                <div className="category__question">
                  <Question className="category__symbol" />
                </div>
              </Tooltip>
            </div>
          )}
        </div>
        <div className="category__right">
          {inMultiModeHasFiles() ? <div className="category__count">{fileCategory.length}</div> : null}
          <UploadButton loaded={!multiple && !!fileCategory.length} multiple={multiple} onClick={clickHandler} />
        </div>
      </div>
      <Collapse opened={opened}>
        <div className="category__files">
          {fileCategory.map((fileRecord: FileRecordType) => (
            <div key={fileRecord.name} className="category__file">
              <File name={fileRecord.name} />
            </div>
          ))}
        </div>
      </Collapse>
    </div>
  );
}

export default Category;
