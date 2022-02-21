import OttFilter from "./OttFilter";
import TopStories from "./TopStories";
import { Container, Row, Col } from "react-bootstrap";
import UpdatedToday from "./UpdatedToday";
import ExploreGenres from "../ExploreGenres/ExploreGenres";
import SubCat from "./SubCat/SubCategory";
import SuperCat from "./SuperCat/SuperCategory";
import Trends from '../Main/Trends';

const Sidebar = () => {
  const Design = (
    <>
      <Container fluid style={{ paddingTop: "30px", backgroundColor: "#f2f2f2" }}>
        <Row className="shadow-sm w-100" style={{ padding: "20px 20px 20px 70px" }}>
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
          <Col sm={10} >

            {/* Top Stories Component */}
            <TopStories />


            {/*Updated Today Component */}
            <UpdatedToday />

            {/* Explore Genres Component */}
            <ExploreGenres />

            {/* Sub Category component */}
            <SubCat />

            {/* Super Category component */}
            <SuperCat />


            {/* Trend component */}
            <Trends />
          </Col>
          {/* ================================================================================ */}
          {/* Right main section end */}
          {/* ================================================================================= */}
        </Row>
      </Container>
    </>
  );
  return Design;
};

export default Sidebar;
