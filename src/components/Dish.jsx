import Card from "react-bootstrap/Card";
import "../assets/styles/dish.css";
import { Link } from 'react-router-dom';
import Badge from 'react-bootstrap/Badge';

const Dish = ({ name, img, price, slug, news}) => {
        return (
                <Link to={`/plat/${slug}`}>
                        <Card>
                                { news === "true" && <Badge bg="secondary">Nouveau</Badge>}
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
