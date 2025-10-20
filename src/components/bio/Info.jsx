import React, { useEffect, useRef } from "react";
import { AiOutlineMail } from "react-icons/ai";
import { SiLine } from "react-icons/si";
import { FaHtml5, FaCss3Alt, FaJs, FaReact } from "react-icons/fa";
import "./info.css";
import Yoshi from "../../assets/Photo/img.jpg";
import GhostPic from "../../assets/Photo/GhostPic.jpg";
import MenuService from "../menu service/menu";

// Skill data
const skills = [
  { name: "HTML", icon: <FaHtml5 style={{ color: "#f16529" }} />, progress: 90 },
  { name: "CSS", icon: <FaCss3Alt style={{ color: "#2965f1" }} />, progress: 85 },
  { name: "JavaScript", icon: <FaJs style={{ color: "#f7df1e" }} />, progress: 80 },
  { name: "React", icon: <FaReact style={{ color: "#61dafb" }} />, progress: 75 },
];

// Projects
const projects = [
  {
    name: "Sample One",
    description: "シンプルで洗練されたウェブデザインプロジェクト。",
    link: "https://cyobi164.github.io/yoshida/",
    img: Yoshi,
  },
];

const contact = () => {
  const email = "rana.nchl090@gmail.com";
  const gmailUrl = `https://mail.google.com/mail/?view=cm&to=${email}`;
  window.open(gmailUrl, "_blank");
};

const Info = () => {
  const sectionRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("show");
        });
      },
      { threshold: 0.2 }
    );

    sectionRefs.current.forEach((el) => el && observer.observe(el));

    return () => {
      sectionRefs.current.forEach((el) => el && observer.unobserve(el));
    };
  }, []);

  return (
    <>
      {/* About Section */}
      <section id="about" className="content-section hidden" ref={(el) => (sectionRefs.current[0] = el)}>
        <div className="about-container">
          <img src={GhostPic} alt="プロフィール写真" className="about-image" />
          <div className="about-text">
            <h1>About Me</h1>
            <p>
              こんにちは！私のページに来てくれてありがとうございます。
              私はアンチェルです。ここはインターネット上の小さな私の居場所です。
              Web開発が大好きで、自分のアイデアを形にして、役立つものを作るのが楽しみです。
              ぜひ気軽に繋がりましょう！
            </p>
            <button onClick={contact} className="button">Contacts</button>
          </div>
        </div>
      </section>

      {/* Skill Section */}
      <section id="skill" className="content-section hidden">
        <h2>Skill</h2>
        <div className="skill-container">
          <div className="skill-list">
            {skills.map((skill, index) => (
              <div key={index} className="skill-item">
                <div className="skill-header">
                  {skill.icon} <span className="skill-name">{skill.name}</span>
                </div>
                <div className="progress-bar">
                  <div className="progress-fill" style={{ width: `${skill.progress}%` }}></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section (now includes Projects) */}
      <section id="service" className="content-section hidden">
        <h2>Services</h2>
        <div className="service-container">
          {/* Service Card 1 */}
          <div className="service-card">
            <h3>Digital Wedding Menu</h3>
            <p>
              Guests can simply scan a QR code to view the course and drink menu.
              Perfect for people who want to use less paper.
            </p>
            <a
              href=""
              target="_blank"
              rel="noopener noreferrer"
              className="service-btn"
            >
              View Demo
            </a>
          </div>

          {/* Project cards now shown here */}
          {projects.map((project, index) => (
            <div key={index} className="service-card">
              <h3>{project.name}</h3>
              <img src={project.img} alt={project.name} className="service-img" />
              <p>{project.description}</p>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="service-btn"
              >
                View Project
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* Social Section */}
      <section id="socials" className="content-section">
        <h2>Contacts</h2>
        <div className="social-icons">
          <a href="https://line.me/ti/p/aJnU8iunpG" target="_blank" rel="noopener noreferrer">
            <SiLine size={30} color="#06C755" />
          </a>
          <a href="mailto:rana.nchl090@gmail.com">
            <AiOutlineMail size={30} color="#D44638" />
          </a>
        </div>
      </section>
    </>
  );
};

export default Info;
