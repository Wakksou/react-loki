import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Dish from "../components/Dish.jsx";
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <Container>
            <Row>
                <Col>
                    <Link to="/chemin-de-votre-page">
                        <Dish
                        price="3"
                        name="Tacos à l'unité"
                        img="https://cdn.pixabay.com/photo/2016/08/23/08/53/tacos-1613795_960_720.jpg"
                        />
                    </Link>
                </Col>
                <Col>
                    <Link to="/chemin-de-votre-page">
                        <Dish
                        price="12"
                        name="Enchiladas"
                        img="https://cdn.pixabay.com/photo/2014/01/14/22/13/mexican-245240_960_720.jpg"
                        />
                    </Link>
                </Col>
                <Col>
                    <Link to="/chemin-de-votre-page">
                        <Dish
                        price="15"
                        name="Mole poblano"
                        img="https://cdn.pixabay.com/photo/2021/02/04/03/57/mole-5980185_960_720.jpg"
                        />
                    </Link>
                </Col>
            </Row>
        </Container>
    );
};

export default Home;