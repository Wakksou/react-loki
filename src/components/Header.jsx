import { CartContext } from "../utils/context/CartContext";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "../assets/styles/header.css";
import logo from "../assets/images/logo.webp"
import { NavLink } from 'react-router-dom';
import { useContext } from "react";


const Header = ({}) => {
    const { cart } = useContext(CartContext);
    const getQuantity = () => {
        let totalQuantity = 0;
        if (cart) {
            cart.forEach(dish => {
                totalQuantity += dish.quantity;
            });
        }
        return totalQuantity;
    };
    return (
        <header>
            <Navbar expand="lg" className="bg-body-tertiary">
            <Container>
                <NavLink to="/" className={"navbar-brand"}>
                    <img
                        src={logo}
                        alt="Un mexicain avec un sombrero qui joue de la guitare"
                        className="d-inline-block align-top"
                    />
                </NavLink>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse
                id="basic-navbar-nav"
                className="justify-content-end"
                >
                <Nav>
                    <NavLink to="/" className={"nav-link"}>
                        Accueil
                    </NavLink>
                    <NavLink to="/a_propos" className={"nav-link"}>
                        A propos
                    </NavLink>
                    <NavLink to="/panier" className={"nav-link"}>
                    Panier ({getQuantity() || 0})
                    </NavLink>
                </Nav>
                </Navbar.Collapse>
            </Container>
            </Navbar>
        </header>
    );
};





export default Header;