import { DocumentCategoryType } from "../types";

const categories: DocumentCategoryType[] = [
  {
    label: "Personalausweis",
    tooltip: "z.B. Personalausweis, Reisepass oder ID-Card<br/>Gut leserlich die Vorder- und Rückseite",
    uploadDescription: "Wählen Sie hier nur Dateien/Photos Ihres Personalausweis aus.",
    placeholder: "z.B. Personalausweis",
    sizeLimit: 5,
    resolution: ["pdf", "jpg", "jpeg", "png"],
    multiple: false,
  },
  {
    label: "Gläubigerunterlagen",
    tooltip:
      "z.B. Mahnungen, Forderungsaufstellungen, Rechnungen, Inkasso Briefe, <strong>Kreditverträge</strong> oder Gerichtsvollzieher Schreiben<br/>Hier erfassen wir Ihre Einzelforderungen. Bitte nur ein Dokument pro Forderung, idealerweise nur das aktuellste. ",
    uploadDescription: "Wählen Sie hier nur Dateien/Photos Ihres Gläubigerunterlagen aus.",
    placeholder: "z.B. Gläubigerunterlagen",
    sizeLimit: 10,
    resolution: ["pdf", "jpg", "jpeg", "png", "heic"],
    multiple: true,
  },
  {
    label: "Einkommensnachweis",
    tooltip:
      "Für folgende Einkommensarten brauchen wir Nachweise: Arbeitsentgelt, ALG I Bescheid, ALG II Bescheid, Elterngeld, Kindergeld",
    uploadDescription: "Wählen Sie hier nur Dateien/Photos Ihres Einkommensnachweis aus.",
    placeholder: "z.B. Einkommensnachweis",
    sizeLimit: 10,
    resolution: ["pdf", "jpg", "jpeg", "png", "heic"],
    multiple: true,
  },
  {
    label: "Arbeitsvertrag",
    tooltip: "Bitte laden Sie alle Seiten Ihrer Arbeitsverträge hoch ",
    uploadDescription: "Wählen Sie hier nur Dateien/Photos Ihres Arbeitsvertrag aus.",
    placeholder: "z.B. Arbeitsvertrag",
    sizeLimit: 10,
    resolution: ["pdf", "jpg", "jpeg", "png", "heic"],
    multiple: true,
  },
  {
    label: "Schufa-Auskunft",
    tooltip: "Bitte laden Sie alle Seiten Ihrer Schufa-Auskunft hoch ",
    uploadDescription: "Wählen Sie hier nur Dateien/Photos Ihres Schufa-Auskunft aus.",
    placeholder: "z.B. Schufa-Auskunft",
    sizeLimit: 10,
    resolution: ["pdf", "jpg", "jpeg", "png", "heic"],
    multiple: false,
  },
  {
    label: "Sonstiges",
    tooltip: "Alle anderen Dokumente die Sie uns zukommen lassen möchten ",
    uploadDescription: "Wählen Sie hier nur Dateien/Photos Ihres Sonstiges aus.",
    placeholder: "z.B. Sonstiges",
    sizeLimit: 10,
    resolution: ["pdf", "jpg", "jpeg", "png", "heic"],
    multiple: true,
  },
];

export default categories;
