import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <Container>
        <Row>
          <Col>
            <div className="introduce">
              <Row>
                <Col lg={8} className="introduce_left">
                    <div className="introduce_text">
                      <h1>Hi, I am John, <br /> Creative Technologist</h1>
                      <h2>
                        Amet minim mollit non deserunt ullamco est sit aliqua
                        dolor do amet <br /> sint. Velit officia consequat duis enim 
                        velit mollit. Exercitation veniam <br />consequat sunt nostrud
                        amet.
                      </h2>
                    </div>
                    <Link to={"#"} className="introduce_btn">Download Resume</Link>
                </Col>
                <Col lg={4} className="introduce_right">
                    <div className="introduce_img">
                      <img
                        src={require("../assets/images/avt.png")}
                        alt="avt"
                      />
                  </div>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Home;
