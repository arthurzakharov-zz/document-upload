import { DocumentCategory } from "../../types";
import categories from "../../config/categories";
import Category from "../category";
import LeadInfo from "../lead-info";
import "./document-upload.css";

function Main() {
  return (
    <div className="document-upload">
      <LeadInfo />
      <div className="document-upload__categories">
        {categories.map((category: DocumentCategory) => (
          <Category key={category.label} documentCategory={category} />
        ))}
      </div>
    </div>
  );
}

export default Main;
