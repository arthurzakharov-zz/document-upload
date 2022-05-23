import { DocumentCategory } from "../../types";
import categories from "../../config/categories";
import Category from "../category";
import LeadInfo from "../lead-info";
import "./document-upload.css";

function DocumentUpload() {
  return (
    <main className="document-upload">
      <LeadInfo />
      <div className="document-upload__categories">
        {categories.map((category: DocumentCategory) => (
          <Category key={category.label} documentCategory={category} />
        ))}
      </div>
    </main>
  );
}

export default DocumentUpload;
