import OttImages from "../../OttImages.json";
import { Container, Row, Col, Box } from "react-bootstrap";
import { base_url } from "../../utils/config";
const OttFilter = () => {
  const ImgBox = ({ image }) => {
    const Design = (
      <>
        <div style={{
          padding: "30px 5px",
          borderBottom: "1px solid #ccc",
          cursor: "pointer"
        }}>
          <img src={base_url + '/' + image.logo} className="w-50 image" />
        </div>
      </>
    );
    return Design;
  };
  const Design = (
    <>
      <Container
        style={{
          textAlign: "center",
          padding: "0",
          fontFamily: "Poppins, Sans-serif",
          backgroundColor: "white",
        }}
      >
        <Row sm={12}>
          <Col style={{
            padding: "30px 5px",
            borderBottom: "1px solid #ccc"
          }}>
            <h5
              style={{
                fontFamily: "Poppins, Sans-serif",
                fontWeight: "700",
                lineHeight: "28px",
                color: "#828282",
              }}
            >
              OTT FILTER
            </h5>

          </Col>

          <Col sm={12} className="" style={{
            padding: "0px",
            borderBottom: "1px solid #ccc"
          }}>
            {OttImages.map((image) => {
              return <ImgBox image={image} />;
            })}
          </Col>
        </Row>
      </Container>
    </>
  );
  return Design;
};
export default OttFilter;
