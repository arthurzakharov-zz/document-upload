import { useEffect, useState } from "react";
import UploadButton from "../upload-button";
import "./category.css";
import SvgQuestion from "../../svg/Question";
import SvgArrow from "../../svg/Arrow";

export interface CategoryProps {
  label: string;
}

function Category(props: CategoryProps) {
  const { label } = props;

  const [loaded, setLoaded] = useState<boolean>(false);
  const [count, setCount] = useState<number>(0);

  useEffect(() => {
    // TODO: later will be replaced with some Redux or Context call
    setCount(0);
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
          <div className="category__count">{count}</div>
          <UploadButton loaded={loaded} onClick={clickHandler} />
        </div>
      </div>
    </div>
  );
}

export default Category;
