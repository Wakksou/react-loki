import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Dish from "../components/Dish.jsx";
import Button from 'react-bootstrap/Button';
import { useState } from 'react';


const Home = () => {
    const dish = [
        { name: "Tacos à l'unité", img: 'https://cdn.pixabay.com/photo/2016/08/23/08/53/tacos-1613795_960_720.jpg', price: 3, slug: 'tacos' , isNew:"true"},
        { name: "Enchiladas", img: 'https://cdn.pixabay.com/photo/2014/01/14/22/13/mexican-245240_960_720.jpg', price: 12, slug: 'Enchiladas' , isNew:"false"},
        { name: "Mole poblano", img: 'https://cdn.pixabay.com/photo/2021/02/04/03/57/mole-5980185_960_720.jpg', price: 15, slug: 'mole-poblano' , isNew:"false"}
    ];
    return (
        <Container>
            <Button variant="secondary" size="sm">
                Nouveautés Uniquement
            </Button>
            <Row>
                {dish.map(dish => (
                    <Col key={dish.slug}>
                        <Dish 
                        name={dish.name}
                        img={dish.img}
                        price={dish.price}
                        slug={dish.slug}
                        isNew={dish.isNew}>
                        </Dish>
                    </Col>
                ))}
            </Row>
        </Container>
    );
};
export default Home;