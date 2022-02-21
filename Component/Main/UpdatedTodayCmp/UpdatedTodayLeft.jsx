import { Container, Row, Col, Card, Stack, Image } from "react-bootstrap";

const UpdatedTodatLeft = () => {
  const Design = (
    <>
      <Col
        sx={4}
        style={{
          fontFamily: "Poppins, Sans-serif",
        }}
      >
        <Card
          style={{
            width: "100%",
            fontFamily: "Poppins, sans-serif",
            border: "none",
            borderRadius: "10px",
            boxShadow: "0 1px 2px 2px #ccc"
          }}
        >
          <Card.Img
            variant="top"
            src="aasram.png"
            style={{
              borderTopLeftRadius: "10px",
              borderTopRightRadius: "10px",
            }}
          />
          <Card.Body style={{ padding: "30px" }}>
            <Card.Text
              style={{
                color: "#00000",
                fontSize: "14px",
                lineHeight: "22px",
                letterSpacing: "0.065em",
                fontFamily: "Poppins, Sans-serif",
                fontWeight: "600",

              }}
            >
              Bobby Deol's Aashram 3 release date and Bhagyashree's daughter
              Avantika Dassani debuting with Huma Qureshi in
            </Card.Text>
            <Card.Text style={{ color: "#858585", fontWeight: "bold", fontSize: "12px" }}>
              3 Mins Ago
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
    </>
  );
  return Design;
};
export default UpdatedTodatLeft;
