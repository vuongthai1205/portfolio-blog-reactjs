import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer id="contact">
      <Container>
        <Row>
          <Col>
            <div className="footer">
              
              <ul className="footer-icons">
                <li className="footer-icons_item">
                  <Link to={"#"} className="footer-icons-link">
                    <img src={require("../../assets/images/fb-icon.png")} alt=""/>
                  </Link>
                </li>
                <li className="footer-icons_item">
                  <Link to={"#"} className="footer-icons-link">
                    <img src={require("../../assets/images/insta-icon.png")} alt=""/>
                  </Link>
                </li>
                <li className="footer-icons_item">
                  <Link to={"#"} className="footer-icons-link">
                    <img src={require("../../assets/images/tw-icon.png")} alt=""/>
                  </Link>
                </li>
                <li className="footer-icons_item">
                  <Link to={"#"} className="footer-icons-link">
                    <img src={require("../../assets/images/linked-icon.png")} alt=""/>
                  </Link>
                </li>
              </ul>
              <p className="footer-copyright">Copyright ©2020 All rights reserved </p>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
