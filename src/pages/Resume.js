import { useState, useEffect } from "react";
import EmailForm from "../components/EmailForm";
import { Container, Row, Col } from "react-bootstrap"; // <-- Import Bootstrap components

function Resume(props) {
  const [resume, setResume] = useState(null);
  const getResumeData = async () => {
    const response = await fetch("./techstack.json");
    const data = await response.json();
    setResume(data);
  };
  useEffect(() => {
    getResumeData();
  }, []);

  function openResume() {
    window.open("SanitizedResume.pdf", "_blank");
  }
  const loaded = () => (
    <Container className="main-container">
      <Row>
        <Col md={8}>
          <h3 className="page-title">Resume</h3>
        </Col>
      </Row>
      <Row className="my-4">
        <Col md={8}>
          <div className="donwload-text">
            Download my
            <button className="download-btn" onClick={openResume}>
              resume
            </button>{" "}
          </div>
        </Col>
        <Row className="my-4">
          <Col md={8}>
            {resume.map(({ title, list }) => (
              <div key={title} className="tech-detail">
                <h4 className="tech-title">{title}</h4>
                <ul>
                  {list.map(({ id, name }) => (
                    <li key={id}>{name}</li>
                  ))}
                </ul>
              </div>
            ))}
          </Col>
        </Row>
      </Row>
    </Container>
  );

  return resume ? loaded() : <h1>Loading...</h1>;
}

export default Resume;
