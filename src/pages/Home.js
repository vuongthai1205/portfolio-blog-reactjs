import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import PostRecent from "../components/PostsRecent";
import FeatureWork from "../components/FeatureWork";

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
                    <h1>
                      Hi, I am Vuong, <br /> FULL STACK WEB DEVELOPER
                    </h1>
                    <h2>
                    I am a seasoned full stack developer with over 10 years of experience in the field. My expertise lies in backend development using Java Spring, while I am proficient in a range of front-end technologies such as HTML, CSS, JavaScript, and React.js. I am dedicated to writing efficient and readable code, always emphasizing the importance of clear and concise comments to ensure the maintainability and scalability of the projects I work on.
                    </h2>
                  </div>
                  <Link target="_blank" to={"https://static.topcv.vn/topcv-cv-uploads/8bd4b5f3f2abac314093694411ebc6e6.pdf#toolbar=0&navpanes=0&scrollbar=0"} className="introduce_btn">
                    Download Resume
                  </Link>
                </Col>
                <Col lg={4} className="introduce_right">
                  <div className="introduce_img">
                    <img src={require("../assets/images/avt.png")} alt="avt" />
                  </div>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
      </Container>
      <PostRecent/>
      <FeatureWork/>
    </div>
  );
}

export default Home;
