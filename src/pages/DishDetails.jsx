import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useParams, useNavigate } from "react-router-dom";
import dishesDatas from "../datas/dishes.json";
import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";

const DishDetails = ({addToCart}) => {
    const { slug } = useParams();
    const [dish, setDish] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
    const currentDish = dishesDatas.find((dish) => dish.slug === slug);
        if (!currentDish) {
            navigate("/plat-non-trouve");
        }
        setDish(currentDish);
    }, [slug, navigate]);
    return (
        <Container>
            {dish ? (
                <Row>
                    <Col>
                        <img src={dish.img} alt={dish.name} className="mw-100" />
                    </Col>
                <Col>
                    <h1>{dish.name}</h1>
                    <p>{dish.description}</p>
                    <p>{dish.price}€</p>
                    <Button variant="primary" onClick={() => addToCart(dish)}>Commander</Button>
                </Col>
            </Row>
            ) : (
                <Row>
                    <p>Chargement en cours...</p>
                </Row>
            )}
        </Container>
    );
};

export default DishDetails;