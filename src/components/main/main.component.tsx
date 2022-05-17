import { DocumentCategory } from "../../types";
import categories from "../../config/categories";
import Category from "../category";
import Info from "../info";
import "./main.css";

function Main() {
  return (
    <div className="main">
      <Info />
      <div className="main__categories">
        {categories.map((category: DocumentCategory) => (
          <Category key={category.label} label={category.label} multi={category.multi} />
        ))}
      </div>
    </div>
  );
}

export default Main;
