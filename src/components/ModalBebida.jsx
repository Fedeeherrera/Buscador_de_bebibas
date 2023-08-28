import { Modal, Image } from "react-bootstrap";
import useBebidas from "../hooks/useBebidas";

function ModalBebida() {
  const { handleModalClick, modal, receta } = useBebidas();

  return (
    <Modal show={modal} onHide={handleModalClick}>
      <Image src={receta.strDrinkThumb} alt={`Imagen Receta ${receta.strDrink}`}/>
      <Modal.Header>
        <Modal.Title>{receta.strDrink}</Modal.Title>
      </Modal.Header>
      <Modal.Body>Cuerpo Modal</Modal.Body>
    </Modal>
  );
}

export default ModalBebida;
