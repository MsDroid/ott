import React from 'react';
import ReactDOM from 'react-dom'
import { Container, Row, Col, Breadcrumb } from "react-bootstrap";
import OttFilter from '../Main/OttFilter';
import { FaGreaterThan } from "react-icons/fa";
import { BsFacebook } from "react-icons/bs";
import { RiWhatsappFill } from "react-icons/ri";
import { AiFillTwitterCircle } from "react-icons/ai";
import FooterSlider from './Comps/FooterSlider';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faAngleRight } from '@fortawesome/free-solid-svg-icons'
import { base_url } from '../../utils/config';



const Post = () => {
    return (
        <>
            <Container style={{ backgroundColor: "#fff", marginTop: "20px" }}>
                <Row className="shadow-sm w-100" >
                    {/* ================================================================================ */}
                    {/* Left main section start */}
                    {/* ================================================================================= */}
                    <Col
                        sm={2}
                        className="leftbar"
                    >
                        <OttFilter />
                    </Col>
                    {/* ================================================================================ */}
                    {/* Left main section end */}
                    {/* ================================================================================= */}




                    {/* ================================================================================ */}
                    {/* Right main section */}
                    {/* ================================================================================= */}
                    <Col sm={10} className="main-section-wrapper">
                        <Container fluid>
                            <Row>
                                <div className="breadcrumbs">
                                    <span><a href="/">Home</a></span>
                                    <span style={{
                                        fontSize: "14px",
                                        marginRight: "5px",
                                        fontFamily: "Poppins, Sans-serif",
                                        fontWeight: "600"

                                    }}>
                                        <FontAwesomeIcon icon={faAngleRight} />
                                    </span>
                                    <span>
                                        <a href="/">
                                            Netflix
                                        </a>
                                    </span>

                                    <span style={{
                                        fontSize: "14px",
                                        marginRight: "5px",
                                        fontFamily: "Poppins, Sans-serif",
                                        fontWeight: "600"
                                    }}>
                                        <FontAwesomeIcon icon={faAngleRight} />
                                    </span>

                                    <span style={{
                                        fontFamily: "Poppins, Sans-serif",

                                    }}>
                                        <a active>Trending Today</a>
                                    </span>
                                </div>
                            </Row>
                            <Row>
                                <h1 style={{
                                    fontSize: "35px",
                                    fontWeight: "600",
                                    textTransform: "capitalize",
                                    margin: "15px 5px",
                                    letterSpacing: "1px",
                                    fontFamily: "Poppins, Sans-serif"

                                }}>
                                    Stranger Things season 4 release date, cast, spoilers, trailer and everything you need to know
                                </h1>
                                <p style={{
                                    margin: "0 5px",
                                    fontWeight: "600",
                                    color: "#897f7f",
                                    fontFamily: "Poppins, Sans-serif",
                                }}>
                                    By Santosh Mishra | Updated on 26th Jan, 2022
                                </p>
                            </Row>
                            <Row className="blog-desc">
                                <div className="img-wrapper">
                                    <img
                                        src={base_url + '/' + '1.jpg'}
                                        alt=""
                                        style={{ margin: "20px 0px", width: "100%" }}
                                    />
                                </div>
                                <p style={{ fontFamily: "Poppins, Sans-serif" }}>
                                    As of January 2022, there's still no news on when Stranger Things 4 will
                                    be released beyond that previously-stated Summer 2022 window.
                                    However, filming has wrapped, so hopefully it's not too far away now.
                                </p>
                                <p style={{ fontFamily: "Poppins, Sans-serif" }}>
                                    The series wouldn't be the show it is without its colourful, l
                                    arger-than-life cast, so expect this lot back on your screens once again:
                                    Eleven (Millie Bobby Brown), Mike (Finn Wolfhard), Lucas (Caleb
                                    McLaughlin), Dustin (Gaten Matarazzo), Will (Noah Schnapp), Max (Sadie
                                    Sink), Steve (Joe Keery), Nancy (Natalia Dyer), Jonathan (Charlie Heaton),
                                    Robin (Maya Hawke) and Joyce (Winona Ryder), among others.
                                </p>
                                <p style={{ fontFamily: "Poppins, Sans-serif" }}>
                                    We all now know that David Harbour will be returning as Hopper, despite
                                    that seemingly tragic end to season three. Chatting to Total Film,
                                    Harbour explained that his character "had to change" and "resurrect
                                    in some way", adding: "So we'll see a very different guy going forwards.
                                    The same guy but in a different vein. It's a very cool thing to be able to
                                    play."
                                </p>
                                <p style={{ fontFamily: "Poppins, Sans-serif" }}>
                                    While it's still unclear how his character survived, Harbour has revealed
                                    that season four will reveal more of his backstory in a call back to season
                                    two where Eleven found boxes in Hopper's attic labelled "dad", "Vietnam"
                                    and "New York".
                                </p>
                                <p style={{ fontFamily: "Poppins, Sans-serif" }}>
                                    Speaking at Liverpool Comic-Con, the actor said: "In season four we will
                                    give you a big, huge reveal about Hopper's backstory, which we haven't
                                    really told you about... we're gonna express it in a big way.
                                </p>
                                <p style={{ fontFamily: "Poppins, Sans-serif" }}>
                                    The series wouldn't be the show it is without its colourful, l
                                    arger-than-life cast, so expect this lot back on your screens once again:
                                    Eleven (Millie Bobby Brown), Mike (Finn Wolfhard), Lucas (Caleb
                                    McLaughlin), Dustin (Gaten Matarazzo), Will (Noah Schnapp), Max (Sadie
                                    Sink), Steve (Joe Keery), Nancy (Natalia Dyer), Jonathan (Charlie Heaton),
                                    Robin (Maya Hawke) and Joyce (Winona Ryder), among others.
                                </p>
                                <p style={{ fontFamily: "Poppins, Sans-serif" }}>
                                    We all now know that David Harbour will be returning as Hopper, despite
                                    that seemingly tragic end to season three. Chatting to Total Film,
                                    Harbour explained that his character "had to change" and "resurrect
                                    in some way", adding: "So we'll see a very different guy going forwards.
                                    The same guy but in a different vein. It's a very cool thing to be able to
                                    play."
                                </p>
                            </Row>
                        </Container>

                    </Col>
                    {/* ================================================================================ */}
                    {/* Right main section end */}
                    {/* ================================================================================= */}
                </Row>
            </Container>



            {/* ======================================================================================== */}
            {/* featured slider */}
            {/* ======================================================================================== */}
            <Container fluid style={{
                backgroundColor: "#f2f2f2",
                paddingLeft: "50px"
            }}>
                <Row>
                    <Col
                        md={12}
                    >
                        <FooterSlider />
                    </Col>
                </Row>

                {/* share section */}
                <Row>
                    <Col md={3}></Col>
                    <Col
                        md={6}
                        style={{
                            padding: "0 35px"
                        }}
                    >
                        <h3 style={{
                            fontWeight: "600",
                            letterSpacing: ".5px",
                            textTransform: "uppercase",
                            fontSize: "24px",
                            wordSpacing: "2px",
                            fontFamily: "Poppins, Sans-serif"
                        }}
                        >
                            Share this post
                        </h3>

                        <span>
                            <RiWhatsappFill style={{
                                fontSize: "35px",
                                color: "green",
                                marginRight: "15px"
                            }} />
                        </span>

                        <span>
                            <BsFacebook style={{
                                fontSize: "35px",
                                color: "#3238ff",
                                marginRight: "15px"
                            }} />
                        </span>

                        <span>
                            <AiFillTwitterCircle style={{
                                fontSize: "35px",
                                color: "#419cea",
                                marginRight: "15px"
                            }} />
                        </span>
                    </Col>
                    <Col md={3}></Col>
                </Row>

                {/* comment title section */}
                <Row>
                    <Col md={3}></Col>
                    <Col md={6} style={{
                        padding: "20px 20px 20px 30px",

                    }}>
                        <span style={{
                            fontSize: "25px",
                            marginRight: "20%",
                            fontWeight: "600",
                            fontFamily: "Poppins, Sans-serif",
                        }}>Discussions on this Post</span>
                        <span style={{
                            fontSize: "18px",
                            fontFamily: "Poppins, Sans-serif"
                        }}>299 Comments</span>
                    </Col>
                    <Col md={3}></Col>
                </Row>

                {/* comment card */}
                <Row>
                    <Col md={3}></Col>
                    <Col md={6} style={{
                        padding: "20px 20px 20px 30px",
                        boxShadow: "0 1px 2px 1px #ccc",
                        borderRadius: "5px",
                        margin: "20px",
                        backgroundColor: "white"
                    }}
                    >
                        <Row flex>
                            <Col md={1} style={{
                                textAlign: "center",
                                padding: "0"
                            }}
                            >
                                <img src={base_url + '/' + 'man.png'} alt="" style={{ width: "45px" }} />
                            </Col>
                            <Col md={9} style={{

                            }}
                            >
                                <input type="text" placeholder='Was it worth reading, Please share your views accordingly...' style={{
                                    height: "45px",
                                    width: "100%",
                                    border: "none",
                                    padding: "5px",
                                    boxShadow: "0 0 2px 1px #ccc",
                                    backgroundColor: "#f2f2f2",
                                    color: "#7a7676",
                                    fontFamily: "Poppins, Sans-serif"
                                }} />
                            </Col>
                            <Col md={2}>
                                <button style={{
                                    backgroundColor: "#313131",
                                    padding: "9px",
                                    color: "white",
                                    borderRadius: "5px",
                                }}>Submit</button>
                            </Col>
                        </Row>
                    </Col>
                    <Col md={3}></Col>
                </Row>


                {/* comment box */}
                <Row>
                    <Col md={3}></Col>
                    <Col md={6} style={{
                        padding: "20px 20px 20px 30px",
                        boxShadow: "0 1px 2px 1px #ccc",
                        borderRadius: "5px",
                        margin: "20px",
                        backgroundColor: "white"
                    }}
                    >
                        <Row flex>
                            <Col md={2} style={{
                                textAlign: "center",
                                padding: "15px"
                            }}
                            >
                                <img src={base_url + '/' + 'man.png'} alt="" style={{ width: "45px" }} />
                            </Col>
                            <Col md={10} style={{
                                fontFamily: "Poppins, Sans-serif"
                            }}
                            >
                                <h3 style={{
                                    fontSize: "16px",
                                    fontWeight: '600',
                                    letterSpacing: "1px",
                                    textTransform: "uppercase"
                                }}
                                >Nikhil Kumar</h3>
                                <p style={{
                                    fontSize: "14px",
                                    letterSpacing: "1px",
                                    lineHeight: "19px"
                                }}>Lorem Ipsum is simply dummy text of the printing and
                                    typesetting industry. Lorem Ipsum has been the industry's
                                    standard dummy text ever since the 1500s, when an
                                    unknownprinter took a galley of type and scrambled
                                    it to make a  type specimen book.
                                    It has survived not only.
                                </p>
                                <span style={{
                                    color: "#7a7676",
                                    fontFamily: "Poppins, Sans-serif",
                                    fontSize: "12px"
                                }}>3 Days Ago</span>
                            </Col>

                        </Row>
                    </Col>
                    <Col md={3}></Col>
                </Row>


                <Row>
                    <Col md={3}></Col>
                    <Col md={6} style={{
                        padding: "20px 20px 20px 30px",
                        boxShadow: "0 1px 2px 1px #ccc",
                        borderRadius: "5px",
                        margin: "20px",
                        backgroundColor: "white"
                    }}
                    >
                        <Row flex>
                            <Col md={2} style={{
                                textAlign: "center",
                                padding: "15px"
                            }}
                            >
                                <img src={base_url + '/' + 'man.png'} alt="" style={{ width: "45px" }} />
                            </Col>
                            <Col md={10} style={{
                                fontFamily: "Poppins, Sans-serif"
                            }}
                            >
                                <h3 style={{
                                    fontSize: "16px",
                                    fontWeight: '600',
                                    letterSpacing: "1px",
                                    textTransform: "uppercase"
                                }}
                                >Manoranjan Singh</h3>
                                <p style={{
                                    fontSize: "14px",
                                    letterSpacing: "1px",
                                    lineHeight: "19px"
                                }}>Lorem Ipsum is simply dummy text of the printing and
                                    typesetting industry. Lorem Ipsum has been the industry's
                                    standard dummy text ever since the.
                                </p>
                                <span style={{
                                    color: "#7a7676",
                                    fontFamily: "Poppins, Sans-serif",
                                    fontSize: "12px"
                                }}>3 Days Ago</span>
                            </Col>

                        </Row>
                    </Col>
                    <Col md={3}></Col>
                </Row>
            </Container>
        </>
    );
}

export default Post;