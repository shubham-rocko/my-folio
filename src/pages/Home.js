import React from 'react';
import { Card, Container, Row, Col } from 'react-bootstrap';

function Home(props) {
    const frameworks = [
        {name: "MongoDB", icon: "/images/icons8-mongodb-96.svg"},
    {name: "NodeJS", icon: "/images/icons8-nodejs-96.svg"},
    {name: "Express", icon: "/images/icons8-express-js-100.svg"},
    {name: "Javascript", icon: "/images/javascript.svg"},
    {name: "Django", icon: "/images/icons8-django-96.svg"},
    {name: "React", icon: "/images/icons8-react-js-80.svg"},
    {name: "Python", icon: "/images/icons8-python-96.svg"},
    {name: "HTML", icon: "/images/icons8-html5-96.svg"},
    {name: "CSS", icon: "/images/icons8-css-96.svg"}
    ];
    // Experience in MongoDB, NodeJS, Express, Javascript, Django, React, Python, HTML, CSS
    return (
        <Container className='main-container'>
            <h1 className="text">I Build Seamless Digital Experiences.</h1>
            <p>Fullstack developer with experience in creating scalable web applications. Let's bring your ideas to life!.</p>
        <h2 className='text'>Experience With</h2>
            <Row className="justify-content-md-center">
                {frameworks.map((framework, index) => (
                    <Col xs={6} md={4} lg={3} key={index}>
                        <Card className="framework-card mb-4">
                            <Card.Img variant="top" src={framework.icon} />
                            <Card.Body>
                                <Card.Title>{framework.name}</Card.Title>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    );
}

export default Home;

