import { useState } from "react";

import "./App.css";
import Students from "./Student/student.jsx";
import "./Student/student.css";

function App() {
  const [count, setCount] = useState(0);

  return <Students />;
}

export default App;
