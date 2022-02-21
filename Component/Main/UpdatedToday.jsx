import { Container, Row, Col, Card, Stack, Image } from "react-bootstrap";
import UpdatedTodayLeft from "./UpdatedTodayCmp/UpdatedTodayLeft";
import UpdatedTodayRight from "./UpdatedTodayCmp/UpdatedTodayRight";

const UpdatedToday = () => {
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
              Updated Today
            </h3>
          </Col>
        </Row>

        {/* Start Updated Today section coding Component */}
        <Row style={{ padding: "0px " }}>
          <UpdatedTodayLeft />
          <UpdatedTodayRight />
        </Row>
        {/* End Updated Today section coding Component */}
      </Container>
    </>
  );
  return Design;
};
export default UpdatedToday;
