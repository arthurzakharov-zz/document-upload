import { useEffect, useState } from "react";
import Category from "../category";
import Info from "../info";
import "./main.css";

function Main() {
  const [categories, setCategories] = useState<string[]>([]);

  useEffect(() => {
    setCategories([
      "Personalausweis",
      "Gläubigerunterlagen",
      "Einkommensnachweis",
      "Arbeitsvertrag",
      "Schufa-Auskunft",
      "Sonstiges",
    ]);
  }, []);

  return (
    <div className="main">
      <Info />
      <div className="main__categories">
        {categories.map((category) => (
          <Category key={category} label={category} />
        ))}
      </div>
    </div>
  );
}

export default Main;
