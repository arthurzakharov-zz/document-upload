import { DocumentCategoryType } from "../types";

const categories: DocumentCategoryType[] = [
  {
    label: "Personalausweis",
    tooltip: "z.B. Personalausweis, Reisepass oder ID-Card<br/>Gut leserlich die Vorder- und Rückseite",
    uploadDescription: "Wählen Sie hier nur Dateien/Photos Ihres Personalausweis aus.",
    placeholder: "z.B. Personalausweis",
    fileSizeLimitInMb: 5,
    fileFormats: ["pdf", "jpg", "jpeg"],
    multiple: false,
  },
  {
    label: "Gläubigerunterlagen",
    tooltip:
      "z.B. Mahnungen, Forderungsaufstellungen, Rechnungen, Inkasso Briefe, <strong>Kreditverträge</strong> oder Gerichtsvollzieher Schreiben<br/>Hier erfassen wir Ihre Einzelforderungen. Bitte nur ein Dokument pro Forderung, idealerweise nur das aktuellste. ",
    uploadDescription: "Wählen Sie hier nur Dateien/Photos Ihres Gläubigerunterlagen aus.",
    placeholder: "z.B. Gläubigerunterlagen",
    fileSizeLimitInMb: 10,
    fileFormats: ["pdf", "jpg", "jpeg", "png", "heic"],
    multiple: true,
  },
  {
    label: "Einkommensnachweis",
    tooltip:
      "Für folgende Einkommensarten brauchen wir Nachweise: Arbeitsentgelt, ALG I Bescheid, ALG II Bescheid, Elterngeld, Kindergeld",
    uploadDescription: "Wählen Sie hier nur Dateien/Photos Ihres Einkommensnachweis aus.",
    placeholder: "z.B. Einkommensnachweis",
    fileFormats: ["pdf", "jpg", "jpeg", "png", "heic"],
    fileSizeLimitInMb: 10,
    multiple: true,
  },
  {
    label: "Arbeitsvertrag",
    tooltip: "Bitte laden Sie alle Seiten Ihrer Arbeitsverträge hoch ",
    uploadDescription: "Wählen Sie hier nur Dateien/Photos Ihres Arbeitsvertrag aus.",
    placeholder: "z.B. Arbeitsvertrag",
    fileSizeLimitInMb: 10,
    fileFormats: ["pdf", "jpg", "jpeg", "png", "heic"],
    multiple: true,
  },
  {
    label: "Schufa-Auskunft",
    tooltip: "Bitte laden Sie alle Seiten Ihrer Schufa-Auskunft hoch ",
    uploadDescription: "Wählen Sie hier nur Dateien/Photos Ihres Schufa-Auskunft aus.",
    placeholder: "z.B. Schufa-Auskunft",
    fileSizeLimitInMb: 10,
    fileFormats: ["pdf", "jpg", "jpeg", "png", "heic"],
    multiple: false,
  },
  {
    label: "Sonstiges",
    tooltip: "Alle anderen Dokumente die Sie uns zukommen lassen möchten ",
    uploadDescription: "Wählen Sie hier nur Dateien/Photos Ihres Sonstiges aus.",
    placeholder: "z.B. Sonstiges",
    fileSizeLimitInMb: 10,
    fileFormats: ["pdf", "jpg", "jpeg", "png", "heic"],
    multiple: true,
  },
];

export default categories;
