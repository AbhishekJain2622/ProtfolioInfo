import React from "react";
import Card from "react-bootstrap/Card";

function AboutCard() {
  return (
    <Card className="quote-card-view">
  <Card.Body>
    <blockquote className="blockquote mb-0">
      <p style={{ textAlign: "justify" }}>
        Hi, I'm <span className="shade">Abhishek Jain</span>, proudly hailing from the vibrant town of 
        <span className="shade"> Chhatarpur, India</span>. 
        Currently, I am a passionate <span className="shade">Freelance Developer</span> actively working on exciting projects, 
        while pursuing my <span className="shade">Master's in Computer Applications (MCA)</span> from 
        <span className="shade"> Shri Krishna University</span>.
      </p>
      <br />
      <p style={{ textAlign: "justify" }}>
        Beyond coding, I find joy in engaging with activities that inspire creativity and bring balance to my life:
      </p>
      <ul>
        <li className="about-activity">🎯 Playing Chess</li>
        <li className="about-activity">🖋️ Writing Tech Blogs</li>
        <li className="about-activity">✈️ Traveling</li>
      </ul>
      <p style={{ color: "rgb(155 126 172)", marginTop: "20px" }}>
        "Dedicated to creating solutions that truly impact lives!"
      </p>
      <footer className="blockquote-footer">Abhishek</footer>
    </blockquote>
  </Card.Body>
</Card>

  );
}

export default AboutCard;
