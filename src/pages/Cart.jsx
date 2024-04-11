import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Table from 'react-bootstrap/Table';

const Cart = ({ cart }) => {
return (
    <Container>
        <Row>
            <h1>Panier</h1>
        </Row>
        <Row>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Nom</th>
                        <th>Prix</th>
                    </tr>
                </thead>
                <tbody>
                    {cart.map((cartItem) => (
                        <tr>
                            <td>{cartItem.name}</td>
                            <td>{cartItem.price}€</td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </Row>
    </Container>
);
};

export default Cart;