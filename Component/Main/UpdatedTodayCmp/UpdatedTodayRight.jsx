import { Col, Card, Stack, Image } from "react-bootstrap";
import UpdatedTodayData from "../../../UpdatedTodayData.json";
import router from 'next/router';

const UpdatedTodatRight = () => {

  const goPost = () => {
    // alert('hi');
    // return;
    router.push('/Post/stranger-things-season-4-release-date-cast-spoilers-trailer-and-everything-you-need-to-know');
  }

  const Code = ({ Data }) => {
    const Design = (
      <>
        <Card
          style={{
            width: "100%",
            fontFamily: "Poppins, Sans-serif",
            marginBottom: "10px",
            border: "none",
            padding: "0",
            borderRadius: "10px",
            boxShadow: "2px 4px 3px 2px #ccc",
          }}
        >
          <Stack direction="horizontal" style={{ width: "100%" }}>
            <Card.Img
              variant="top"
              src={Data.piclink}
              style={{
                borderTopLeftRadius: "15px",
                borderTopRightRadius: "15px",
                borderBottomRightRadius: "15px",
                borderBottomLeftRadius: "15px",
                width: "42%",
                padding: "8px",
              }}
            />

            <Card.Body style={{ padding: "9px" }}>
              <Card.Text
                onClick={goPost}
                style={{
                  color: "#00000",
                  fontSize: "14px",
                  lineHeight: "22px",
                  letterSpacing: "0.065em",
                  fontFamily: "Poppins, Sans-serif",
                  fontWeight: "500",
                  padding: "0",
                  cursor: 'pointer'
                }}
              >
                {Data.desc}
              </Card.Text>
              <Card.Text style={{ color: "#858585", fontWeight: "bold", fontSize: "10px" }}>
                {Data.time}
              </Card.Text>
            </Card.Body>
          </Stack>
        </Card>
      </>
    );
    return Design;
  };
  const Design = (
    <>
      <Col>
        {UpdatedTodayData.map((item) => {
          return <Code onClick={goPost} Data={item} />;
        })}
      </Col>
    </>
  );
  return Design;
};

export default UpdatedTodatRight;
