import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import React from 'react';
import { Helmet } from 'react-helmet';

const Notfound = () => {
    return (
        <>
            <Helmet>
                <title>Page non trouvée - Mon super site</title>
            </Helmet>
            <Container>
                <Row>
                    <Col>
                        <h1>Page non trouvée</h1>
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default Notfound;