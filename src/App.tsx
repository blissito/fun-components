import "./App.css";
import { FlipWords } from "./components/FlipWords";

function App() {
  return (
    <article className="max-w-xl mx-auto">
      <FlipWords>
        <h1 className="text-4xl text-left mb-3">Animaciones web con Motion</h1>
      </FlipWords>
      <p className="text-left max-w-xl text-xl">
        Las animaciones web lo tienen todo.
        <br />
        Pueden embellecer, destacar o enamorar a cualquiera que las experimenta
        (los usuarios). Pero, también tienen la capacidad de mejorar tus
        habilidades lógicas y de pensamiento matemático. Ocacionando así, uno de
        los mejores fenómenos del espíritu. El aprendizaje que lleva a la mejora
        sistemática a partir de la creación de múltiples componentes animados;
        cada vez más complejos. 🎩🤩🪄📚🤯
      </p>
      <button className="py-2 px-6 bg-blue-800 text-white font-bold transition-all hover:bg-blue-700 active:bg-blue-600 my-4 shadow-lg active:shadow">
        Animar de nuevo
      </button>
    </article>
  );
}

export default App;

// "https://i.imgur.com/nITUzj1.png",
// "https://i.imgur.com/nvs8UBe.png",
// "https://i.imgur.com/vu1iTcr.png",
// "https://i.imgur.com/ArpsLvc.png",
