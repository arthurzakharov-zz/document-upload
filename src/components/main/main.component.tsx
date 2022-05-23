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
          <Category key={category.label} documentCategory={category} />
        ))}
      </div>
    </div>
  );
}

export default Main;
