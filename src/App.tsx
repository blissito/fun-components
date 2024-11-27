import "./App.css";
import { LinkPreview } from "./components/LinkPreview";

function App() {
  return (
    <article className="flex items-center h-[80vh]">
      <section className="text-md text-justify">
        Esto es un texto de{" "}
        <LinkPreview
          className="text-indigo-500"
          src="https://i.imgur.com/ArpsLvc.png"
        >
          prueba para demostrar
        </LinkPreview>{" "}
        el componente LinkPreview. <br />
        Intentaremos no revelar nada que sea clasificado. No se mencionará el{" "}
        <LinkPreview
          className="text-orange-500"
          src="https://i.imgur.com/vu1iTcr.png"
        >
          podcast de FixterGeek
        </LinkPreview>{" "}
        al que se le ha clasificado como incitador de la renuncia en favor de la
        creatividad. 😱
      </section>
    </article>
  );
}

// "https://i.imgur.com/nITUzj1.png",
// "https://i.imgur.com/nvs8UBe.png",
// "https://i.imgur.com/vu1iTcr.png",
// "https://i.imgur.com/ArpsLvc.png",

export default App;
