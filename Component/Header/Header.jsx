import {
  Navbar,
  Container,
  Offcanvas,
  Form,
  FormControl,
  Button,
  Row,
  Col,
  Stack,
} from "react-bootstrap";
import { useState } from "react";
import { DiCodeigniter } from "react-icons/di";
import { BiSearchAlt2 } from "react-icons/bi";
import { ImYoutube } from "react-icons/im";
import { FaTwitter } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import Dummy from "../../Dummy.json";

const Header = () => {
  const [active, setActive] = useState(false);

  const SubCatOffcanvas = ({ menu }) => {
    const MenuHeader = (
      <Col md={3}>
        <Offcanvas.Header>
          <Offcanvas.Title id="offcanvasNavbarLabel">
            {menu.title}
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>{menu.subtitle}</Offcanvas.Body>
        <Offcanvas.Body>{menu.subtitle}</Offcanvas.Body>
        <Offcanvas.Body>{menu.subtitle}</Offcanvas.Body>
        <Offcanvas.Body>{menu.subtitle}</Offcanvas.Body>
      </Col>
    );
    return MenuHeader;
  };

  const Design = (
    <>
      <Container
        fluid
        style={{
          position: "fixed",
          zIndex: "999999",
          boxShadow: "0 0 2px 2px #ccc",
          top: "0"
        }}
      >
        <Row>
          <Navbar bg="light" expand={false}>
            {/* start Menubar and logo */}
            <Col md={3}>
              <Navbar.Toggle aria-controls="offcanvasNavbar" style={{ marginLeft: "30px" }} />

              <Navbar.Brand href="/" className="p-4">
                <img
                  alt=""
                  src="logo.png"
                  width="70px"
                  className="d-inline-block "
                />
              </Navbar.Brand>
            </Col>
            {/* End Menubar and logo */}

            {/* start Searchbar */}

            <Col md={4}>
              <div style={{ backgroundColor: "#e8e8e8", borderRadius: "4px" }}>
                <Form className="d-flex">
                  <Button
                    style={{
                      backgroundColor: "#e8e8e8",
                      border: "none",
                      outline: "none",
                      color: "#887e7e",
                      fontSize: "20px",
                      boxShadow: "none",
                    }}
                  >
                    <BiSearchAlt2 />
                  </Button>
                  <FormControl
                    type="search"
                    placeholder="Search Movies, Genres, OTT, Trends..."
                    className="me-2 p-3 inputfocus"
                    aria-label="Search"
                    style={{
                      backgroundColor: "#e8e8e8",
                      fontFamily: "Poppins, Sans-serif",
                      boxShadow: "none",
                      border: "none",
                      fontSize: '12px'
                    }}
                  />
                </Form>
              </div>
            </Col>
            {/* End Searchbar */}

            {/* start trends logo and text */}
            <Col md={3} className="p-4">
              <DiCodeigniter style={{
                fontSize: "25px",
                color: "red",
                cursor: "pointer"
              }} />
              <span
                className="p-2 "
                style={{
                  fontFamily: "Poppins, Sans-serif",
                  fontWeight: "700",
                  color: "#262626",
                  fontSize: "14px",
                  cursor: "pointer"
                }}
              >
                OTT Trends
              </span>
            </Col>
            {/* End trends logo and text */}

            {/* Start Social media icon */}
            <Col md={2} style={{
              display: "flex",
              justifyContent: "space-evenly"
            }}>
              <ImYoutube
                style={{
                  color: "red",
                  fontSize: "38px",
                  padding: "3px",
                  marginLeft: "5px",
                  cursor: "pointer"
                }}
              />
              <FaTwitter
                style={{
                  color: "#1C9CEA",
                  fontSize: "38px",
                  padding: "3px",
                  marginLeft: "10px",
                  cursor: "pointer"
                }}
              />
              <BsInstagram
                style={{
                  color: "#F54F56",
                  fontSize: "38px",
                  padding: "3px",
                  marginLeft: "10px",
                  cursor: "pointer"
                }}
              />
            </Col>
            {/* End Social media icon */}


            {/* Start Drawer coding */}
            <Navbar.Offcanvas
              id="offcanvasNavbar"
              aria-labelledby="offcanvasNavbarLabel"
              placement="top"
              style={{ marginTop: "91px", height: "100vh" }}
            >
              <Container fluid>
                <Row>
                  <Stack direction="horizontal"></Stack>
                  {Dummy.map((item) => {
                    return <SubCatOffcanvas menu={item} />;
                  })}
                </Row>
              </Container>
            </Navbar.Offcanvas>

            {/* End Drawer coding */}
          </Navbar>
        </Row>
      </Container>
    </>
  );
  return Design;
};

export default Header;
