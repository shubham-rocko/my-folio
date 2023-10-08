import { useState, useEffect } from "react";
import EmailForm from "../components/EmailForm";
import { Container, Row, Col } from "react-bootstrap"; // <-- Import Bootstrap components

function Contact(props) {
  const [contact, setContact] = useState(null);
  const getContactData = async () => {
    const response = await fetch("./about.json");
    const data = await response.json();
    setContact(data);
  };
  useEffect(() => {
    getContactData();
  }, []);

  function openResume() {
    window.open("SanitizedResume.pdf", "_blank");
  }
  const loaded = () => (
    <Container className="main-container">
      <Row>
        <Col md={8}>
          <h3 className="page-title">Contact</h3>
        </Col>
      </Row>
      <Row className="my-4">
        <Col md={6}>
          <EmailForm />
        </Col>
      </Row>
    </Container>
  );

  return contact ? loaded() : <h1>Loading...</h1>;
}

export default Contact;
