import { useState } from "react";
import Title from "./components/Title";
import Namelength from "./components/Namelength";
import Namereversed from "./components/Namereversed";

import "./styles.css";

export default function App() {
  const [name, setName] = useState("Nicolas");

  return (
    <div className="app">
      <Title name={name} />
      <Namelength name={name} />
      <Namereversed name={name} />
    </div>
  );
}
