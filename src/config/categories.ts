import { DocumentCategory } from "../types";

const categories: DocumentCategory[] = [
  {
    label: "Personalausweis",
    multi: false,
  },
  {
    label: "Gläubigerunterlagen",
    multi: false,
  },
  {
    label: "Einkommensnachweis",
    multi: true,
  },
  {
    label: "Arbeitsvertrag",
    multi: false,
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
