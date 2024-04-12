import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useParams, useNavigate } from "react-router-dom";
import dishesDatas from "../datas/dishes.json";
import { useContext, useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import React from 'react';
import { Helmet } from 'react-helmet';
import { CartContext } from "../utils/context/CartContext";

const DishDetails = ({}) => {
    const { slug } = useParams();
    const [dish, setDish] = useState(null);
    const navigate = useNavigate();
    const {addToCart} = useContext(CartContext);

    useEffect(() => {
    const currentDish = dishesDatas.find((dish) => dish.slug === slug);
        if (!currentDish) {
            navigate("/plat-non-trouve");
        }
        setDish(currentDish);
    }, [slug, navigate]);

    return (
        <>
            <Helmet>
                <title>Détail du plat</title>
            </Helmet>
            <Container>
                {dish ? (
                    <Row>
                        <Col>
                            <img src={dish.img} alt={dish.name} className="mw-100" />
                        </Col>
                    <Col>
                        <h1>{dish.name}</h1>
                        <p>{dish.description}</p>
                        <p>{dish.price}euros</p>
                        <Button variant="primary" onClick={( ) => addToCart(dish)}>Commander</Button>
                    </Col>
                </Row>
                ) : (
                    <Row>
                        <p>Chargement...</p>
                    </Row>
                )}
            </Container>
        </>
    );
};

export default DishDetails;