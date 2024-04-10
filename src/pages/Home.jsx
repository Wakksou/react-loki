import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Dish from "../components/Dish.jsx";
const dish = [
    { name: "Tacos à l'unité", img: 'https://cdn.pixabay.com/photo/2016/08/23/08/53/tacos-1613795_960_720.jpg', price: 3, slug: 'tacos' , new:"true"},
    { name: "Enchiladas", img: 'https://cdn.pixabay.com/photo/2014/01/14/22/13/mexican-245240_960_720.jpg', price: 12, slug: 'Enchiladas' , new:"false"},
    { name: "Mole poblano", img: 'https://cdn.pixabay.com/photo/2021/02/04/03/57/mole-5980185_960_720.jpg', price: 15, slug: 'mole-poblano' , new:"false"}
];
const Home = () => {
    return (
        <Container>
            <Row>
                {dish.map(dish => (
                    <Col>
                        {dish.new === "true" && <div className="badge">Nouveau</div>}
                        <Dish key={dish.name}
                        name={dish.name}
                        img={dish.img}
                        price={dish.price}
                        slug={dish.slug}>
                        </Dish>
                    </Col>
                ))}
            </Row>
        </Container>
    );
};
export default Home;