import { DocumentCategory } from "../types";

const categories: DocumentCategory[] = [
  {
    label: "Personalausweis",
    placeholder: "z.B. Personalausweis",
    fileSizeLimitInMb: 10,
    fileFormats: ["pdf", "jpg", "jpeg", "png", "heic"],
    multi: false,
  },
  {
    label: "Gläubigerunterlagen",
    placeholder: "z.B. Gläubigerunterlagen",
    fileSizeLimitInMb: 10,
    fileFormats: ["pdf", "jpg", "jpeg", "png", "heic"],
    multi: true,
  },
  {
    label: "Einkommensnachweis",
    placeholder: "z.B. Einkommensnachweis",
    fileFormats: ["pdf", "jpg", "jpeg", "png", "heic"],
    fileSizeLimitInMb: 10,
    multi: true,
  },
  {
    label: "Arbeitsvertrag",
    placeholder: "z.B. Arbeitsvertrag",
    fileSizeLimitInMb: 10,
    fileFormats: ["pdf", "jpg", "jpeg", "png", "heic"],
    multi: true,
  },
  {
    label: "Schufa-Auskunft",
    placeholder: "z.B. Schufa-Auskunft",
    fileSizeLimitInMb: 10,
    fileFormats: ["pdf", "jpg", "jpeg", "png", "heic"],
    multi: false,
  },
  {
    label: "Sonstiges",
    placeholder: "z.B. Sonstiges",
    fileSizeLimitInMb: 10,
    fileFormats: ["pdf", "jpg", "jpeg", "png", "heic"],
    multi: true,
  },
];

export default categories;
