import {Modal, Image} from 'react-bootstrap'
import useBebidas from "../hooks/useBebidas";


function ModalBebida() {
  const { handleModalClick, modal, receta } = useBebidas();

  return (
    <Modal show={modal} onHide={handleModalClick}>
        <Modal.Body>Cuerpo Modal</Modal.Body>
    </Modal>
  )
}

export default ModalBebida