import { Col, Container, Row } from "react-bootstrap";
import { useParams } from "react-router";
import { getDatabase, ref, onValue } from "firebase/database";
import { useEffect, useState } from "react";

import parse from "html-react-parser";
function WorkDetail() {
  const workId = useParams("id");
  const [work, setWork] = useState({});
  useEffect(() => {
    const db = getDatabase();
    const starCountRef = ref(db, "works/" + workId.id);
    onValue(starCountRef, (snapshot) => {
      const data = snapshot.val();
      setWork(data);
    });
  }, []);
  return (
    <Container>
      <Row>
        <Col>
          <div className="work-detail-page">
            <h2 className="work-detail-title">{work.title}</h2>
            <div className="feature-works_meta">
              <span className="feature-works_year">{work.yearCreate}</span>
              <span className="feature-works_purpose">{work.purpose}</span>
            </div>
            <div className="work-detail-content">
              {work.content ? parse(work.content) : "no"}
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default WorkDetail;
