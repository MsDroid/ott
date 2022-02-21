import { Row, Col, Container, Card, Button, Stack } from "react-bootstrap";
import TrendLeft from './Trend/TrendLeft';
import TrendRight from './Trend/TrendRight';

const Trends = () => {
    const Design = (
        <>
            <Container style={{ margin: "30px 0px" }}>
                <Row>
                    <Col
                        sx={8}
                        style={{
                            fontFamily: "Poppins, Sans-serif",
                        }}
                    >
                        <h3
                            style={{
                                fontWeight: "600",
                                letterSpacing: ".5px",
                                textTransform: "capitalize",
                                fontSize: "24px",
                                wordSpacing: "2px",
                            }}
                        >
                            Trend this week
                        </h3>
                    </Col>
                </Row>

                <Row style={{ padding: "20px 0px " }}>
                    <TrendLeft />
                    <TrendRight />
                </Row>
            </Container>
        </>
    );
    return Design;
};

export default Trends;
