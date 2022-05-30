import { DocumentCategory } from "../types";

const categories: DocumentCategory[] = [
  {
    label: "Personalausweis",
    uploadDescription: "Wählen Sie hier nur Dateien/Photos Ihres Personalausweis aus.",
    placeholder: "z.B. Personalausweis",
    fileSizeLimitInMb: 5,
    fileFormats: ["pdf", "jpg", "jpeg"],
    multiple: false,
  },
  {
    label: "Gläubigerunterlagen",
    uploadDescription: "Wählen Sie hier nur Dateien/Photos Ihres Gläubigerunterlagen aus.",
    placeholder: "z.B. Gläubigerunterlagen",
    fileSizeLimitInMb: 10,
    fileFormats: ["pdf", "jpg", "jpeg", "png", "heic"],
    multiple: true,
  },
  {
    label: "Einkommensnachweis",
    uploadDescription: "Wählen Sie hier nur Dateien/Photos Ihres Einkommensnachweis aus.",
    placeholder: "z.B. Einkommensnachweis",
    fileFormats: ["pdf", "jpg", "jpeg", "png", "heic"],
    fileSizeLimitInMb: 10,
    multiple: true,
  },
  {
    label: "Arbeitsvertrag",
    uploadDescription: "Wählen Sie hier nur Dateien/Photos Ihres Arbeitsvertrag aus.",
    placeholder: "z.B. Arbeitsvertrag",
    fileSizeLimitInMb: 10,
    fileFormats: ["pdf", "jpg", "jpeg", "png", "heic"],
    multiple: true,
  },
  {
    label: "Schufa-Auskunft",
    uploadDescription: "Wählen Sie hier nur Dateien/Photos Ihres Schufa-Auskunft aus.",
    placeholder: "z.B. Schufa-Auskunft",
    fileSizeLimitInMb: 10,
    fileFormats: ["pdf", "jpg", "jpeg", "png", "heic"],
    multiple: false,
  },
  {
    label: "Sonstiges",
    uploadDescription: "Wählen Sie hier nur Dateien/Photos Ihres Sonstiges aus.",
    placeholder: "z.B. Sonstiges",
    fileSizeLimitInMb: 10,
    fileFormats: ["pdf", "jpg", "jpeg", "png", "heic"],
    multiple: true,
  },
];

export default categories;
