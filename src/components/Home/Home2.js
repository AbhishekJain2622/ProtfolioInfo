import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/pro.png";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
      <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="shade"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
            Programming captivated me, and through every line of code, I've unlocked new skills and insights that fuel my passion! 💻✨
              <br />
              <br />I’m fluent in the timeless classics like 
              <i>
                <b className="shade"> Python, Django, JavaScript, and React </b>
              </i>
              <br />
              <br />
              My focus lies in crafting cutting-edge web technologies and innovative products. I'm deeply involved in areas like  &nbsp;
              <i>
                <b className="shade">Decentralized Slutions, Blockchain ,Future Of Digital Ecosystems</b>
              </i>
              <br />
              <br />
              Whenever possible, I also apply my passion for developing products
              with <b className="shade">Python</b> and
              <i>
                <b className="shade">
                  {" "}
                  Modern Django Frameworks  and Javascript Library 
                </b>
              </i>
              &nbsp; like
              <i>
                <b className="shade"> React.js and Next.js</b>
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/AbhishekJain2622"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://x.com/aj482522"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/AbhishekJain2622/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/a_bhi4066/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
