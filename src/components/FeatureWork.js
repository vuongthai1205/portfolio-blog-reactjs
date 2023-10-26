import { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

function FeatureWork() {
  const [listWork, setListWork] = useState([
    {
      id: 1,
      title: "Designing Dashboards",
      createAt: "12 Feb 2020",
      yearCreate: "2020",
      image: "https://images.unsplash.com/photo-1691167272398-88808c1494a0?auto=format&fit=crop&q=80&w=1887&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      listPurpose: [
        {
          id: 1,
          name: "Dashboard",
        },
      ],
      description:
        "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
    },
    {
      id: 2,
      title: "Designing Dashboards",
      createAt: "12 Feb 2020",
      yearCreate: "2018",
      image: "https://images.unsplash.com/photo-1696197019346-0ac2e1276c85?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      listPurpose: [
        {
          id: 2,
          name: "Illustration",
        },
      ],
      description:
        "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
    },
    {
      id: 3,
      title: "Designing Dashboards",
      createAt: "12 Feb 2020",
      yearCreate: "2018",
      image: "https://images.unsplash.com/photo-1696814292947-8b6f06af3df2?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      listPurpose: [
        {
          id: 3,
          name: "Typography",
        },
      ],
      description:
        "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
    },
  ]);
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
                              <img
                                src={w.image}
                                alt=""
                              />
                            </Link>
                          </div>
                        </Col>
                        <Col lg={9}>
                          <div className="feature-works_info">
                            <h2 className="feature-works_title">
                              <Link to={`/work/${w.id}`}>{w.title}</Link>
                            </h2>
                            <div className="feature-works_meta">
                              <span className="feature-works_year">{w.yearCreate}</span>
                              <span className="feature-works_purpose">
                                {w.listPurpose.map((p) => {
                                  return p.name
                                }).join(" ")}
                              </span>
                            </div>
                            <p className="feature-works_des">
                              {w.description}
                            </p>
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
