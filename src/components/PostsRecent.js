import { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

function PostRecent() {
  const [listPost, setListPost] = useState([
    {
      id: 1,
      title: "Making a design system from scratch",
      createAt: "12 Feb 2020",
      listCat: [
        {
          id: 1,
          name: "Pattern",
        },
        {
          id: 2,
          name: "Design",
        },
      ],
      description:
        "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
    },
    {
      id: 2,
      title: "Creating pixel perfect icons in Figma",
      createAt: "12 Feb 2020",
      listCat: [
        {
          id: 3,
          name: "Figma",
        },
        {
          id: 4,
          name: "Icon Design",
        },
      ],
      description:
        "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
    },
  ]);
  return (
    <div className="posts-recents">
      <Container>
        <Row>
          <Col>
            <div className="posts-recents_text">
              <span>Recent posts</span>
              <Link to={"#"}>View all</Link>
            </div>
            <div className="posts-recents_list">
              <Row>
                {listPost.map((p, i) => {
                  return (
                    <Col lg={6} key={i}>
                      <div className="posts-recents_item">
                        <h2 className="posts-recents_title">
                          <Link to={`/post/${p.id}`}>
                            {p.title}
                          </Link>
                        </h2>
                        <div className="posts-recents_meta">
                          <span className="posts-recents_date">
                            {p.createAt}
                          </span>
                          <span className="posts-recents_cat">
                            {p.listCat.map((c, i) => {
                              return (c.name)
                            }).join(", ")}
                          </span>
                        </div>
                        <p className="posts-recents_des">
                          {p.description}
                        </p>
                      </div>
                    </Col>
                  );
                })}
              </Row>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default PostRecent;
