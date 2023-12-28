import { useState } from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import Login from "./Components/Login";

function App() {
  const [count, setCount] = useState(0);

  return (
    < >
      <Navbar />

      <Login />
    </>
  );
}

export default App;
