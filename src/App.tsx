import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Flipper } from "./components/Flipper";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Flipper>
        <div className="bg-indigo-500">
          <img
            src="https://i.pinimg.com/originals/da/06/e1/da06e1be9c12e606745ef470748937da.png"
            alt="perro"
          />
        </div>
        <div className="bg-pink-500">
          <img
            src="https://png.pngtree.com/png-vector/20240606/ourmid/pngtree-black-logo-with-a-leaf-logo-vector-png-image_6991328.png"
            alt="perros"
          />
        </div>
        <div className="bg-slate-500">
          <img
            src="https://png.pngtree.com/png-vector/20240626/ourmid/pngtree-flying-eagle-black-logo-vector-png-image_12713602.png"
            alt="aguila"
          />
        </div>
      </Flipper>
    </>
  );
}

export default App;
