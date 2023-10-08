import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUser } from "@fortawesome/free-solid-svg-icons";
import { Container, Row, Col } from "react-bootstrap";

function About(props) {
  const [about, setAbout] = useState(null);
  const getAboutData = async () => {
    const response = await fetch("./about.json");
    const data = await response.json();
    setAbout(data);
  };
  useEffect(() => {
    getAboutData();
  }, []);

  const loaded = () => (
    <Container className="main-container">
      <Row className="my-4 .nav-title">
        <Col md={8}>
          <h3 className="page-title">About Me</h3>
        </Col>
      </Row>
      <Row>
        <Col md={6}>
          <div className="profile-icon-container">
            <FontAwesomeIcon
              icon={faCircleUser}
              style={{
                "--fa-primary-color": "#36507d",
                "--fa-secondary-color": "#ffffff",
              }}
            />
          </div>
        </Col>
      </Row>
      <Row className="my-4">
        <Col md={8}>
          <article className="article">
            <p className="">
              My past careers in: the culinary industry, outdoor leadership, I
              have a passion for creativity and working in high pressure
              environments. I love playing my acoustic guitar, my gecko, and
              video games. I love trying gyros at every food truck I see.
            </p>
            <p className="">For business inquiries, contact {about.email}</p>
            <p className="">{about.bio}</p>
          </article>
        </Col>
      </Row>
    </Container>
  );

  return about ? loaded() : <h1>Loading...</h1>;
}

export default About;
