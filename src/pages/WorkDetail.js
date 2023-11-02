import { Col, Container, Row } from "react-bootstrap";
import { useParams } from "react-router";
import { getDatabase, ref, onValue } from "firebase/database";
import { useEffect, useState } from "react";

import parse from 'html-react-parser';
function WorkDetail() {
  const workId = useParams("id");
  const [work, setWork] = useState({

  })
  useEffect(() => {
    const db = getDatabase();
    const starCountRef = ref(db, "works/" + workId.id );
    onValue(starCountRef, (snapshot) => {
      const data = snapshot.val();
      setWork(data)
    });
  }, []);
  return (
    <Container>
      <Row>
        <Col>
          {work.title}
          <img src={work.image} alt={work.title} width={300} className="mx-auto"/>
          {parse(work.content)}

        </Col>
      </Row>
    </Container>
  );
}

export default WorkDetail;
