import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "../assets/styles/header.css";
import logo from "../assets/images/logo.webp"
import { NavLink } from 'react-router-dom';

const Header = () => {
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
                </Nav>
                </Navbar.Collapse>
            </Container>
            </Navbar>
        </header>
    );
};





export default Header;