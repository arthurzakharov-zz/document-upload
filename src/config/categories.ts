import { DocumentCategory } from "../types";

const categories: DocumentCategory[] = [
  {
    label: "Personalausweis",
    multi: false,
  },
  {
    label: "Gläubigerunterlagen",
    multi: true,
  },
  {
    label: "Einkommensnachweis",
    multi: true,
  },
  {
    label: "Arbeitsvertrag",
    multi: true,
  },
  {
    label: "Schufa-Auskunft",
    multi: false,
  },
  {
    label: "Sonstiges",
    multi: true,
  },
];

export default categories;
