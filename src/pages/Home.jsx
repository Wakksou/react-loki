import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Dish from "../components/Dish.jsx";
import Button from 'react-bootstrap/Button';
import { useEffect, useState } from 'react';
import dishesDatas from "../datas/dishes.json"


const Home = () => {
    const [showNewOnly, setShowNewOnly] = useState(false);
    const [dishes, setDishes] = useState([]);


    useEffect(() => {
        const filteredDishes = showNewOnly
        ? dishesDatas.filter((dish) => dish.isNew)
        : dishesDatas;
        setDishes(filteredDishes);
    }, [showNewOnly]);

    const handleShowNewOnly = () => {
        setShowNewOnly(!showNewOnly); 
    };



    return (
        <Container>
            <Button onClick={handleShowNewOnly} variant="secondary" size="sm">
                {showNewOnly ? "Voir tous les plats" : "Nouveautés Uniquement"}
            </Button>
            <Row>
                {dishes.length > 0 && dishes.map(dish => (
                    <Col xs={4} key={dish.slug}>
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