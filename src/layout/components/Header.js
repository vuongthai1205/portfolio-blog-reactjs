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
                  <Link to={"#"} className="menu_link">Works</Link>
                </li>
                <li className="menu_item">
                  <Link to={"#"} className="menu_link">Blog</Link>
                </li>
                <li className="menu_item">
                  <Link to={"#"} className="menu_link">Contact</Link>
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
