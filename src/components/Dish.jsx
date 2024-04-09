import Card from "react-bootstrap/Card";
import "../assets/styles/dish.css";

const Dish = ({ name, img, price }) => {
  return (
    <Card>
      <Card.Img variant="top" src={img} alt={name} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>{price}€</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Dish;
