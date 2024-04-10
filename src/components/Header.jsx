import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "../assets/styles/header.css";
import logo from "../assets/images/logo.webp"

const Header = () => {
    return (
        <header>
            <Navbar expand="lg" className="bg-body-tertiary">
            <Container>
                <Navbar.Brand href="#home">
                <img
                    src={logo}
                    alt="Un mexicain avec un sombrero qui joue de la guitare"
                    className="d-inline-block align-top"
                />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse
                id="basic-navbar-nav"
                className="justify-content-end"
                >
                <Nav>
                    <Nav.Link href="/accueil" activeClassName="active">Accueil</Nav.Link>
                    <Nav.Link href="/a_propos" activeClassName="active">A propos de nous</Nav.Link>
                </Nav>
                </Navbar.Collapse>
            </Container>
            </Navbar>
        </header>
    );
};

export default Header;
