import { useEffect, useState } from "react";
import SvgQuestion from "../../svg/Question";
import SvgArrow from "../../svg/Arrow";
import UploadButton from "../upload-button";
import "./category.css";
import File from "../file";

export interface CategoryProps {
  label: string;
}

function Category(props: CategoryProps) {
  const { label } = props;

  const [loaded, setLoaded] = useState<boolean>(false);
  const [files, setFiles] = useState<string[]>([]);

  useEffect(() => {
    // TODO: later will be replaced with some Redux or Context call
    setFiles(["Gläubigerschreiben #1", "Forderung Finanzamt"]);
  }, []);

  const clickHandler = () => {
    setLoaded(!loaded);
  };

  return (
    <div className="category">
      <div className="category__content">
        <div className="category__left">
          <SvgArrow className="category__arrow" />
          <h6 className="category__label">{label}</h6>
          <div className="category__question">
            <SvgQuestion className="category__symbol" />
          </div>
        </div>
        <div className="category__right">
          <div className="category__count">{files.length}</div>
          <UploadButton loaded={loaded} onClick={clickHandler} />
        </div>
      </div>
      <div className="category__files">
        {files.map((file: string) => (
          <div key={file} className="category__file">
            <File name={file} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Category;
