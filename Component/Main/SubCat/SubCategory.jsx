import { Row, Col, Container, Card, Button, Stack } from "react-bootstrap";
import SubCatData from "../../../SubCatData.json";

const SubCategory = () => {
  const Code = ({ data }) => {
    const Design = (
      <>
        <Col
          md={4}
          style={{
            fontFamily: "Poppins, Sans-serif",
          }}
        >
          <Card
            style={{
              width: "100%",
              fontFamily: "Poppins, Sans-serif",
              border: "none",
              borderRadius: "10px",
              boxShadow: "0px 0px 3px 3px #ccc",
            }}
          >
            <Card.Img
              variant="top"
              src={data.piclink}
              style={{
                borderTopLeftRadius: "10px",
                borderTopRightRadius: "10px",
              }}
            />
            <Card.Body>
              <Card.Text
                style={{
                  margin: "0",
                  fontSize: "14px",
                  lineHeight: "22px",
                  letterSpacing: "0.065em",
                  fontFamily: "Poppins, sans-serif",
                  fontWeight: "500"
                }}
              >
                {data.desc}
              </Card.Text>
              <Card.Text style={{
                color: "#858585",
                fontWeight: "bold",
                fontSize: "12px",
                marginTop: "5px"
              }}>
                3 Mins Ago
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </>
    );
    return Design;
  };
  const Design = (
    <>
      <Container style={{ margin: "30px 0" }}>
        <Row style={{ marginTop: "50px" }}>
          <Col
            sx={8}
            style={{
              fontFamily: "Poppins, Sans-serif",

            }}
          >
            <h3 style={{
              fontWeight: "600",
              letterSpacing: ".5px",
              textTransform: "uppercase",
              fontSize: "24px",
              wordSpacing: "2px"
            }}
            >
              Sub Category
            </h3>
          </Col>
        </Row>

        <Row>
          <Stack direction="horizontal" gap={3} style={{ padding: "20px 10px" }}>
            {SubCatData.map((item) => {
              return <Code data={item} />;
            })}
          </Stack>
        </Row>
      </Container>
    </>
  );
  return Design;
};

export default SubCategory;
