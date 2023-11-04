import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <Container>
        <Row>
          <Col>
            <div className="main-header">
              <ul className="menu">
                <li className="menu_item">
                  <a href="#feature-works"  className="menu_link">Works</a>
                </li>
                <li className="menu_item">
                  <a href={"#posts-recents"} className="menu_link">Blog</a>
                </li>
                <li className="menu_item">
                  <a href={"#contact"} className="menu_link">Contact</a>
                </li>
              </ul>
            </div>
          </Col>
        </Row>
      </Container>
    </header>
  );
}

export default Header;
