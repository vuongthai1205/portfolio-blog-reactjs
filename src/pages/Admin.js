import { useContext } from "react";
import { LoginContext } from "../App";
import { Navigate } from "react-router-dom";
import CreateWork from "../components/CreateWork";
import { Col, Container, Row } from "react-bootstrap";

function AdminPage() {
  const [user, dispatch] = useContext(LoginContext);
  console.log(user);
  if (user === null) {
    return <Navigate to="/login" />;
  }
  return (
    <Container>
      <Row>
        <Col>
          <CreateWork />
        </Col>
      </Row>
    </Container>
  );
}

export default AdminPage;
