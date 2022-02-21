import React from 'react';
import { Container, Row, Col } from "react-bootstrap";


const Footer = () => {
    return (
        <>
            <Container fluid>
                <Row>
                    <Col style={{
                        padding: "20px 10px",
                        textAlign: "center",
                        fontSize: "20px",
                        boxShadow: "0 0 1px 1px #ccc",
                    }}>
                        &copy;
                        {new Date().getFullYear()}
                        &nbsp;Copyright:&nbsp;
                        <a href="https://thecybertize.com/" style={{ textDecoration: "none", color: "white" }}>
                            <span className='footer-text'>
                                TheCybertize
                            </span>
                        </a>
                    </Col>
                </Row>
            </Container>
        </>
    );
}

export default Footer;