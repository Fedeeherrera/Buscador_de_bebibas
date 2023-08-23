import { Col, Card, Button } from "react-bootstrap";

function Bebida({ bebida }) {
  return (
    <Col md={6} lg={2}>
      <Card className="mb-4">
        <Card.img src={bebida.strDrinkThumb} alt="Imagen-Bebida" variant='top' />
      </Card>
    </Col>
  );
}

export default Bebida;
