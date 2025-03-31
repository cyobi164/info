import React from "react";
import { motion } from "framer-motion";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaLinkedin,
  FaInstagram,
  FaGithub,
  FaEnvelope,
} from "react-icons/fa";
import "./Info.css";
import GhostPic from "../assets/photo/GhostPic.jpg";

const skills = [
  { name: "HTML", level: 90, icon: <FaHtml5 style={{ color: "#f16529" }} /> }, // Orange color for HTML
  { name: "CSS", level: 90, icon: <FaCss3Alt style={{ color: "#2965f1" }} /> }, // Blue color for CSS
  {
    name: "JavaScript",
    level: 90,
    icon: <FaJs style={{ color: "#f7df1e" }} />,
  }, // Yellow color for JavaScript
  { name: "React", level: 90, icon: <FaReact style={{ color: "#61dafb" }} /> }, // Light blue color for React
];

const projects = [
  {
    name: "portfolio Website",
    description: "A personal portfolio showcasing my skill and projects.",
    link: "https://cyobi164.github.io/info/",
  },
  {
    name: "E-commerce UI",
    description:
      "A responsive e-commerce front-end built with HTML, CSS, and JavaScript.",
    link: "https://cyobi164.github.io/ecommerce",
  },
  {
    name: "TO-DO-APP",
    description: "A simple task management app using JavaScript.",
    link: "#",
  },
];

function Info() {
  return (
    <>
      <section id="about" className="content-section">
        <div className="about-container">
          <img src={GhostPic} alt="My profile pic" className="about-image" />
          <div className="about-text">
            <h1>About Me</h1>
            <p>
              I'm a web developer passionate about building clean, user-friendly
              website. My main focus is on HTML, CSS, JavaScript, ensuring
              responsive and engaging experiences. I enjoy continuously learning
              to expand my skill set.
            </p>
            <p>
              ・ Languages: English, Japanese <br />
              ・ Skills: Frontend development, Web design <br />・ Looking for:
              Freelance projects & collaborations
            </p>
          </div>
        </div>
      </section>

      {/* skill section */}
      <section id="skill" className="content-section">
        <h2>My Skill</h2>
        <div className="skill-container">
          {skills.map((skill, index) => (
            <div key={index} className="skill-card">
              <div className="skill-icon">{skill.icon}</div>
              <h3>{skill.name}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* project section */}
      {/* <section id="projects" className="content-section">
        <h2>My Projects</h2>
        <div className="grid gap-4">
          {projects.map((project, index) => (
            <div key={index} className="p-4 border rounded-lg shadow-md">
              <h3 className="font-semibold text-lg">{project.name}</h3>
              <p>{project.description}</p>
              <a href={project.link} className="text-blue-500 underline">
                View Project
              </a>
            </div>
          ))}
        </div>
      </section> */}

      {/* social media icons */}
      <section id="socials" className="content-section">
        <h2>Contact</h2>
        <div className="social-icons" style={{ display: "flex", gap: "25px" }}>
          <a
            href="mailto:rana.nchl090@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            style={{ margin: "0 10px" }}
          >
            <FaEnvelope size={40} style={{ color: "#D44638" }} />
          </a>
          <a
            href="https://www.instagram.com/mrg_anchal090/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ margin: "0 10px" }}
          >
            <FaInstagram size={30} color="#E4405F" />
          </a>
        </div>
      </section>
    </>
  );
}

export default Info;

{
  /* }<span className="progress-text">{skill.level}%</span> #PROGRESS BAR*/
}

{
  /*        <div className="social-icons" style={{ display: "flex", gap: "15px" }}>
          <a
            href="https://www.linkedin.com/in/anchal-magar-b31a94340/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin size={40} style={{ color: "#0A66c2" }} />
          </a> */
}
