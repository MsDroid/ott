import { Row, Col, Container, Card, Button, Stack } from "react-bootstrap";
import ExploreGen from "../../ExploreGenres.json";

const ExploreGenres = () => {
  const Code = ({ data }) => {
    const Design = (
      <>
        <Col md={3}>
          <Card
            className="bg-dark text-white p-0"
            style={{
              width: "244",
              height: "142px",
              position: "relative",
              opacity: "88%",
              backgroundImage: ` url(../../${data.piclink})`,
              backgroundSize: "cover",
            }}
          >
            <Card.ImgOverlay style={{ padding: "0px" }}>
              <Button
                variant="warning"
                style={{
                  position: "absolute",
                  top: "5px",
                  marginTop: "5px",
                  width: "100px",
                  height: "35px",
                  fontWeight: "600",
                  fontFamily: "Poppins, Sans-serif",
                  borderRadius: "25px",
                  textTransform: "capitalize",
                  left: "5px",
                  fontSize: "12px"
                }}
              >
                {data.btname}
              </Button>
            </Card.ImgOverlay>
          </Card>
        </Col>
      </>
    );
    return Design;
  };
  const Design = (
    <>
      <Container style={{ margin: "30px 0" }}>
        <Row>
          <Col xs={12} style={{ fontFamily: "Poppins, Sans-serif" }}>
            <h3 style={{
              fontWeight: "600",
              letterSpacing: ".5px",
              textTransform: "uppercase",
              fontSize: "24px",
              wordSpacing: "2px"
            }}
            >
              Explore Genres
            </h3>
          </Col>
        </Row>

        <Row>
          <Stack
            direction="horizontal"
            style={{ flexWrap: "wrap" }}
          >
            {ExploreGen.map((item) => {
              return <Code data={item} />;
            })}
          </Stack>
        </Row>
      </Container>
    </>
  );
  return Design;
};

export default ExploreGenres;
