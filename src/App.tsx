import "./App.css";
import { FlipWords } from "./components/FlipWords";

function App() {
  return (
    <article className="max-w-xl mx-auto py-20 px-4 bg-gradient-to-tr from-blue-500/50 to-indigo-500/50 rounded-lg">
      <FlipWords delay={0.03}>
        <h1 className="text-4xl text-left mb-3 font-bold tracking-tight">
          Animaciones web con Motion
        </h1>
      </FlipWords>
      <p className="text-left max-w-xl text-xl">
        Las animaciones web lo tienen todo. Pueden embellecer, destacar o
        enamorar a cualquiera que las experimenta (los usuarios). Pero, también
        tienen la capacidad de mejorar tus habilidades lógicas y de pensamiento
        matemático. Ocacionando así, uno de los mejores fenómenos del espíritu.
        El aprendizaje que lleva a la mejora sistemática a partir de la creación
        de múltiples componentes animados; cada vez más complejos. 🎩🤩🪄📚🤯
      </p>
    </article>
  );
}

export default App;

// "https://i.imgur.com/nITUzj1.png",
// "https://i.imgur.com/nvs8UBe.png",
// "https://i.imgur.com/vu1iTcr.png",
// "https://i.imgur.com/ArpsLvc.png",
