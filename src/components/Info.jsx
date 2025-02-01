import React from "react";
import { motion } from "framer-motion";
import { FaHtml5, FaCss3Alt, FaJs } from "react-icons/fa";
import "./Info.css";
import GhostPic from "../assets/photo/GhostPic.jpg";

const skills = [
  { name: "HTML", level: 90, icon: <FaHtml5 className="text-orange-500" /> },
  { name: "CSS", level: 90, icon: <FaCss3Alt className="text-blue-500" /> },
  { name: "JavaScript", level: 90, icon: <FaJs className="text-yellow-500" /> },
];

const projects = [
  {
    name: "portfolio Website",
    description: "A personal portfolio showcasing my skill and projects.",
    link: "#",
  },
  {
    name: "E-commerce UI",
    description:
      "A responsive e-commerce front-end built with HTML, CSS, and JavaScript.",
    link: "#",
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
              I'm a freelancer web developer passionate about building clean,
              user-friendly website. My main focus is on HTML, CSS, JavaScript,
              ensuring responsive and engaging experiences. I enjoy continuously
              learning to expand my skill set.
            </p>
            <p>
              🔹 Languages: English, Japanese <br />
              🔹 Skills: Frontend development, Web design <br />
              🔹 Looking for: Freelance projects & collaborations
            </p>
          </div>
        </div>
      </section>

      {/*skill section */}
      <section id="skill" className="content-section">
        <div className="skill">
          <h2>My Skill</h2>
          <div className="grid gap-4">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="p-4 hover:shadow-lg transition-shadow"
              >
                <div className="flex justify-between items-center">
                  <span className="text-lg font-semibold flex items-center gap-2">
                    {skill.icon} {skill.name}
                  </span>
                  <span>{skill.level}</span>
                </div>
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${skill.level}%` }}
                  transition={{ duration: 1 }}
                  className="h-2 bg-blue-500 rounded-md mt-2"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* project section */}
      <section id="projects" className="content-section">
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
      </section>

      {/* social media icons */}
      <section id="socials" className="content-section">
        <h2>Find Me On</h2>
        <div className="social-icons">
          <a href="https://www.linkedin.com/in/anchal-magar-b31a94340/" target="_blank" rel="noopener noreferrer">
           <FaLinkedin size={40} style={{color: "#0A66c2", marginRight:"10px"}} />
          </a>
        </div>
      </section>
    </>
  );
}

export default Info;
{/* }<span className="progress-text">{skill.level}%</span> #PROGRESS BAR*/}