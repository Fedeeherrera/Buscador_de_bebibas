import { Col, Card, Button } from "react-bootstrap";
import useBebidas from "../hooks/useBebidas";
function Bebida({ bebida }) {
  const { handleModalClick, handleBebidaIdClick } = useBebidas();

  return (
    <Col md={6} lg={3}>
      <Card className="mb-4 text-align-center">
        <Card.Img
          src={bebida.strDrinkThumb}
          alt="Imagen-Bebida"
          variant="top"
        />
        <Card className="body">
          <Card.Title>{bebida.strDrink}</Card.Title>
          <Button
            onClick={() => {
              handleModalClick();
              handleBebidaIdClick(bebida.idDrink);
            }}
            variant={"warning"}
            className="text-uppercase w-100 mt-2"
          >
            Ver Receta
          </Button>
        </Card>
      </Card>
    </Col>
  );
}

export default Bebida;
