import type { DocumentCategoryType } from "../../types";
import categories from "../../config/categories";
import { Category, LeadInfo } from "..";
import "./document-upload.css";

function DocumentUpload() {
  return (
    <main className="document-upload">
      <LeadInfo />
      <div className="document-upload__categories">
        {categories.map((category: DocumentCategoryType) => (
          <Category key={category.label} documentCategory={category} />
        ))}
      </div>
    </main>
  );
}

export default DocumentUpload;
