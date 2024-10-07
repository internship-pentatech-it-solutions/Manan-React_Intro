import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Navbar } from "./components/Navbar";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <nav>
          <Navbar />
        </nav>
        <h1 className="text-9xl flex items-center justify-center h-full">
          Home
        </h1>
      </div>
    </>
  );
}

export default App;
