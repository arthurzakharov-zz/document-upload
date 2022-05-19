import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import SvgQuestion from "../../svg/Question";
import SvgArrow from "../../svg/Arrow";
import Collapse from "../collapse";
import File from "../file";
import UploadButton from "../upload-button";
import { category, categoryArrow } from "./category.utils";
import { openModal } from "../../store/modal/modal.actions";
import { LoadModalProps } from "../../modals/load/load.modal";
import "./category.css";

export interface CategoryProps {
  label: string;
  multi: boolean;
}

function Category(props: CategoryProps) {
  const { label, multi } = props;

  const [opened, setOpened] = useState<boolean>(false);
  const [files, setFiles] = useState<string[]>([]);

  const dispatch = useDispatch();

  useEffect(() => {
    // TODO: later will be replaced with some Redux or Context call
    setFiles(["Gläubigerschreiben #1", "Forderung Finanzamt"]);
  }, []);

  const clickHandler = () => {
    dispatch(openModal("load", { multi, label } as LoadModalProps));
  };

  const openFiles = () => {
    setOpened(!opened);
  };

  return (
    <div className={category(opened)}>
      <div className="category__content">
        <div className="category__left">
          {multi ? (
            <button type="button" className="category__button" onClick={openFiles}>
              <SvgArrow className={categoryArrow(opened)} />
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
          {multi ? <div className="category__count">{files.length}</div> : null}
          <UploadButton loaded={false} plus={multi} onClick={clickHandler} />
        </div>
      </div>
      <Collapse opened={opened}>
        <div className="category__files">
          {files.map((file: string) => (
            <div key={file} className="category__file">
              <File name={file} />
            </div>
          ))}
        </div>
      </Collapse>
    </div>
  );
}

export default Category;
