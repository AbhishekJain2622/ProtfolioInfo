import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import Travelling from "../../Assets/travel.png";
import cube from "../../Assets/cube.png";
import watch from "../../Assets/watch.png";
import ZestyZone from "../../Assets/ecom.svg";
import Ecome from "../../Assets/ecoms.png";
import Elearn from "../../Assets/eler.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ZestyZone}
              isBlog={false}
              title="ZestyZone-Ecommerce"
              description="An intuitive e-commerce platform featuring user authentication, email verification, and Razorpay integration. Provides a secure and seamless shopping experience."
              ghLink="https://github.com/AbhishekJain2622/ZestyZone-Django.git"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Elearn}
              isBlog={false}
              title="E-learning Platform"
              description="A scalable e-learning web app designed with Django. Offers interactive tools to enhance online education for students and educators."
              ghLink="https://github.com/AbhishekJain2622/E-learning-Django.git"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={watch}
              isBlog={false}
              title="Watch Store"
              description="A user-friendly e-commerce site tailored for luxury and budget-friendly watches, offering smooth navigation and efficient store management."
              ghLink="https://github.com/AbhishekJain2622/Whatch-Store-Django.git"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Travelling}
              isBlog={false}
              title="Travelogue Application"
              description="A travel management web app built with Django to simplify trip planning and destination discovery for travelers."
              ghLink="https://github.com/AbhishekJain2622/React-Django-RestAPI.git"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Ecome}
              isBlog={false}
              title="Rest-React Ecommerce"
              description="A modern e-commerce app combining React, Redux, and Django REST Framework to deliver a responsive user experience."
              ghLink="https://github.com/AbhishekJain2622/React-Django-RestAPI.git"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={cube}
              isBlog={false}
              title="CRUD Application"
              description="A Django project showcasing Create, Read, Update, and Delete functionalities for efficient data management."
              ghLink="https://github.com/AbhishekJain2622/Crud-Django.git"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
