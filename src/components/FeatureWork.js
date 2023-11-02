import { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { getDatabase, ref, onValue } from "firebase/database";
function FeatureWork() {
  const [listWork, setListWork] = useState([]);
  useEffect(() => {
    const getDataInFirebase = () => {
      const db = getDatabase();
      const dbRef = ref(db, "/works");

      onValue(
        dbRef,
        (snapshot) => {
          snapshot.forEach((childSnapshot) => {
            const childKey = childSnapshot.key;
            const childData = childSnapshot.val();
            setListWork((prev) => [
              ...prev,
              {
                id: childKey,
                title: childData.title,
                yearCreate: childData.yearCreate,
                image: childData.image,
                purpose: childData.purpose,
                description: childData.description,
                content: childData.content,
              },
            ]);
            // ...
          });
        },
        {
          onlyOnce: true,
        }
      );
    };
    getDataInFirebase();
  }, []);
  return (
    <div className="feature-works-wrapper">
      <Container>
        <Row>
          <Col>
            <div className="feature-works">
              <span>Featured works</span>
              <div className="feature-works_list">
                {listWork.map((w, i) => {
                  return (
                    <div className="feature-works_item" key={i}>
                      <Row>
                        <Col lg={3}>
                          <div className="feature-works_img">
                            <Link to={`/work/${w.id}`}>
                              <img src={w.image} alt="" />
                            </Link>
                          </div>
                        </Col>
                        <Col lg={9}>
                          <div className="feature-works_info">
                            <h2 className="feature-works_title">
                              <Link to={`/work/${w.id}`}>{w.title}</Link>
                            </h2>
                            <div className="feature-works_meta">
                              <span className="feature-works_year">
                                {w.yearCreate}
                              </span>
                              <span className="feature-works_purpose">
                                {w.purpose}
                              </span>
                            </div>
                            <p className="feature-works_des">{w.description}</p>
                          </div>
                        </Col>
                      </Row>
                    </div>
                  );
                })}
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default FeatureWork;
