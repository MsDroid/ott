import React from 'react';
import { Button, ToggleButton, Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import CategoryTitle from "../../CategoryTitle.json";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const MobCategory = () => {

    const [value, setValue] = useState("");
    const [color, setColor] = useState("light");
    // Onclik btn function
    const Clicked = (e) => {
        let value = e.target.value;
        return setColor("dark"), setValue(value);
    };


    return (
        <>
            <Container fluid style={{ marginTop: "62px", backgroundColor: "#f2f2f2" }} >
                <Row>
                    <Col
                        style={{
                            margin: "10px",
                            zIndex: "1",
                            overflowX: "hidden"
                        }}
                    >
                        <Swiper
                            spaceBetween={50}
                            slidesPerView={5}
                            onSlideChange={() => console.log("slide change")}
                            onSwiper={(swiper) => console.log(swiper)}
                            style={{ padding: "5px" }}
                        >
                            {CategoryTitle.map((item) => {
                                return (
                                    <>
                                        <SwiperSlide>
                                            <Button
                                                // class="hoverDesign"
                                                type="button"
                                                variant={value === item.title ? color : ""}
                                                onClick={(e) => Clicked(e)}
                                                value={item.title}
                                                style={{
                                                    boxSizing: "border-box",
                                                    borderRadius: "45px",
                                                    fontFamily: "Poppins",
                                                    fontWeight: "600",
                                                    fontSize: "12px",
                                                    boxShadow: "0 0 2px 1px #ccc",
                                                    marginRight: "10px",
                                                    padding: "5px 10px",
                                                    width: "100%",
                                                    marginTop: "5px",
                                                    letterSpacing: "0.7px",
                                                    backgroundColor: "#fff",
                                                    color: "#000"

                                                }}
                                            >
                                                {item.title}
                                            </Button>
                                        </SwiperSlide>
                                    </>
                                );
                            })}
                        </Swiper>
                    </Col>
                </Row>
            </Container>
        </>
    );
}

export default MobCategory;