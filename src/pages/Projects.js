import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

function Projects(props) {
  const [projects, setProjects] = useState(null);
  const getProjectData = async () => {
    const response = await fetch("./projects.json");
    const data = await response.json();
    setProjects(data);
  };

  useEffect(() => {
    getProjectData();
  }, []);

  const loaded = () => {
    return (
      <Container className="main-container project-container">
        <Row className="justify-content-center ">
          {projects.map((project) => (
            <Col
              md={5}
              sm={12}
              className="mb-4 card-container"
              key={project.name}
            >
              <div className="card">
                <div
                  className="project-image"
                  style={{ backgroundImage: `url(${project.image})` }}
                ></div>
              </div>
              <div className="project-detail">
                <div>
                  <a
                    className="project-name"
                    href={project.live}
                    target="_blank"
                  >
                    {project.name}
                  </a>
                  <a href={project.git} target="_blank">
                    <FontAwesomeIcon className="icon" icon={faGithub} />
                  </a>
                </div>
                <div>{project.tech}</div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    );
  };
  return projects ? loaded() : <h1>Loading...</h1>;
}

export default Projects;
