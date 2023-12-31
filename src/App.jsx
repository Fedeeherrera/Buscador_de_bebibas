import { Container } from "react-bootstrap";
import { CategoriasProvider } from "./context/CategoriasProvider";
import ModalBebida from "./components/ModalBebida";
import { BebidasProvider } from "./context/BebidasProvider";
import ListadoBebidas from "./components/ListadoBebidas";

import Formulario from "./components/Formulario";

function App() {
  return (
    <CategoriasProvider>
      <BebidasProvider>
        <header className="py-5">
          <h1>Buscador de bebidas</h1>
        </header>

        <Container className="mt-5">
          <Formulario />
          <ListadoBebidas />
          <ModalBebida />
        </Container>
      </BebidasProvider>
    </CategoriasProvider>
  );
}

export default App;
