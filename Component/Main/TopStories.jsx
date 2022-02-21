import { Container, Row, Col, Card } from "react-bootstrap";
import TopStoriesSlider from "../../TopStoriesSlider";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const TopStories = () => {
  const TopStoriesBox = ({ data }) => {
    const Design = (
      <>
        <Card className="bg-dark text-white m-2" style={{ width: "160px", border: "1px solid #ccc" }}>
          <Card.Img
            src={data.piclink}
            alt="Card image"
            style={{ postion: "relative" }}
          />
          <Card.ImgOverlay
            style={{
              fontWeight: "bold",
              textAlign: "left",
              fontFamily: "Montserrat",
              fontSize: "13px",
              textSpacing: "2px",
              padding: "0"
            }}
          >
            <Card.Text style={{
              position: "absolute",
              bottom: "0",
              fontSize: "10px",
              padding: "5px",
              letterSpacing: ".5px",
              textTransform: "capitalize"
            }}>
              {data.title}
            </Card.Text>
          </Card.ImgOverlay>
        </Card>
      </>
    );
    return Design;
  };
  const Design = (
    <>
      <Container>
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
              Top Stories
            </h3>
          </Col>
        </Row>

        <Row>
          <Col className="w-50 p-3 d-flex" sx={8}>
            {/* <Swiper
              spaceBetween={10}
              slidesPerView={10}
              onSlideChange={() => console.log("slide change")}
              onSwiper={(swiper) => console.log(swiper)}
              style={{ padding: "5px" }}
            > */}
            {TopStoriesSlider.map((item) => {
              return (
                <>
                  {/* <SwiperSlide> */}
                  <TopStoriesBox data={item} />
                  {/* </SwiperSlide> */}
                </>
              );
            })}
            {/* </Swiper> */}
          </Col>
        </Row>

        {/* End Top Stories Slider */}
      </Container>
    </>
  );
  return Design;
};

export default TopStories;
