import React from 'react';
import { Container, Row, Col, Form, Button, FormControl } from "react-bootstrap";
import { BiMenuAltLeft } from "react-icons/bi";
import { BiSearchAlt2 } from "react-icons/bi";
import { BsYoutube } from "react-icons/bs";
import { DiCodeigniter } from "react-icons/di";
import router from 'next/router';
import { base_url } from "../../utils/config";

const MobileHeader = () => {

    const goHome = () => {
        router.push('/');
    }

    return (
        <>
            <Container style={{
                position: "fixed",
                zIndex: "999999",
                boxShadow: "0 0 2px 2px #ccc",
                top: "0",
                padding: "0"
            }}>
                <Row >
                    <Col style={{
                        display: "flex",
                        boxShadow: "0 0 2px 1px #ccc",
                        alignItems: "center"
                    }}>
                        {/* logo wrapper */}
                        <Col
                            sm={2}
                            style={{ display: "flex" }}
                        >
                            <BiMenuAltLeft style={{ fontSize: "30px" }} />
                            <img
                                onClick={goHome}
                                alt=""
                                src={base_url + '/logo.png'}
                                width="35px"
                                className="d-inline-block "
                                style={{
                                    marginLeft: "7px",
                                    width: "65px"
                                }}
                            />
                        </Col>

                        {/* search form */}
                        <Col
                            sm={7}
                            style={{
                                padding: "5px",
                                boxSizing: "border-box"
                            }}
                        >
                            <Form className="d-flex" style={{ alignItems: "center", width: "205px" }}>
                                <FormControl
                                    type="search"
                                    placeholder="Search Movies, Genres, OTT, Trends..."
                                    className="me-2 p-3 inputfocus"
                                    aria-label="Search"
                                    style={{
                                        backgroundColor: "rgb(232, 232, 232)",
                                        fontFamily: "Poppins, sans-serif",
                                        boxShadow: "none",
                                        border: "none",
                                        fontSize: "12px",
                                        height: "20px"
                                    }}
                                />
                                <BiSearchAlt2 style={{
                                    color: "#8C8C8C",
                                    cursor: "pointer",
                                    fontSize: "30px"
                                }} />
                            </Form>
                        </Col>

                        {/* social icons */}
                        <Col
                            sm={3}
                            style={{
                                display: "flex",
                                alignItems: "center",
                                marginRight: "5px",
                                justifyContent: "space-between"
                            }}
                        >
                            <BsYoutube style={{
                                color: "red",
                                marginRight: "5px",
                                cursor: "pointer",
                                fontSize: "30px"
                            }}
                            />

                            <DiCodeigniter style={{
                                margin: "5px",
                                cursor: "pointer",
                                fontSize: "30px"
                            }}
                            />
                        </Col>
                    </Col>
                </Row>
            </Container>
        </>
    );
}

export default MobileHeader;