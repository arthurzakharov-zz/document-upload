import { useEffect, useState } from "react";
import SvgQuestion from "../../svg/Question";
import SvgArrow from "../../svg/Arrow";
import Collapse from "../collapse";
import File from "../file";
import UploadButton from "../upload-button";
import { category, categoryArrow } from "./category.utils";
import "./category.css";

export interface CategoryProps {
  label: string;
}

function Category(props: CategoryProps) {
  const { label } = props;

  const [opened, setOpened] = useState<boolean>(false);
  const [loaded, setLoaded] = useState<boolean>(false);
  const [files, setFiles] = useState<string[]>([]);

  useEffect(() => {
    // TODO: later will be replaced with some Redux or Context call
    setFiles(["Gläubigerschreiben #1", "Forderung Finanzamt"]);
  }, []);

  const clickHandler = () => {
    setLoaded(!loaded);
  };

  const openFiles = () => {
    setOpened(!opened);
  };

  return (
    <div className={category(opened)}>
      <div className="category__content">
        <div className="category__left">
          <button type="button" className="category__button" onClick={openFiles}>
            <SvgArrow className={categoryArrow(opened)} />
            <h6 className="category__label">{label}</h6>
          </button>
          <div className="category__question">
            <SvgQuestion className="category__symbol" />
          </div>
        </div>
        <div className="category__right">
          <div className="category__count">{files.length}</div>
          <UploadButton loaded={loaded} onClick={clickHandler} />
        </div>
      </div>
      <Collapse isOpen={opened}>
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
