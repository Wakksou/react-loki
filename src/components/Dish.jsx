import Card from "react-bootstrap/Card";
import "../assets/styles/dish.css";
import { Link } from 'react-router-dom';

const Dish = ({ name, img, price }) => {
        return (
                <Link to={'plat/${slug}'}>
                        <Card>
                                <Card.Img variant="top" src={img} alt={name} />
                                <Card.Body>
                                        <Card.Title>{name}</Card.Title>
                                        <Card.Text>{price}€</Card.Text>
                                </Card.Body>
                        </Card>
                </Link>
        );
};

export default Dish;
