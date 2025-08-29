import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { SiLine } from "react-icons/si"; 
import { FaHtml5, FaCss3Alt, FaJs, FaReact } from "react-icons/fa";
import "./info.css";
import Image01 from "../../assets/Photo/backimg.jpg";
import GhostPic from "../../assets/Photo/GhostPic.jpg";

// Skill data with optional progress
const skills = [
  { name: "HTML", icon: <FaHtml5 style={{ color: "#f16529" }} />, progress: 90 },
  { name: "CSS", icon: <FaCss3Alt style={{ color: "#2965f1" }} />, progress: 85 },
  { name: "JavaScript", icon: <FaJs style={{ color: "#f7df1e" }} />, progress: 80 },
  { name: "React", icon: <FaReact style={{ color: "#61dafb" }} />, progress: 75 },
];

const projects = [
  {
    name: "Sample One",
    description: "シンプルで洗練されたウェブデザインプロジェクト。",
    link: "https://cyobi164.github.io/yoshida/",
    img: Image01,
  },
];

const contact = () => {
  const email = "rana.nchl090@gmail.com";
  const gmailUrl = `https://mail.google.com/mail/?view=cm&to=${email}`;
  window.open(gmailUrl, "_blank");
};

// Circular progress component
const CircularProgress = ({ progress }) => {
  const radius = 50;
  const stroke = 8;
  const normalizedRadius = radius - stroke * 2;
  const circumference = normalizedRadius * 2 * Math.PI;
  const strokeDashoffset = circumference - (progress / 100) * circumference;

  return (
    <div className="progress-circle">
      <svg height={radius * 2} width={radius * 2}>
        <circle
          stroke="#444"
          fill="transparent"
          strokeWidth={stroke}
          r={normalizedRadius}
          cx={radius}
          cy={radius}
        />
        <circle
          stroke="rgb(0,255,136)"
          fill="transparent"
          strokeWidth={stroke}
          r={normalizedRadius}
          cx={radius}
          cy={radius}
          strokeDasharray={`${circumference} ${circumference}`}
          strokeDashoffset={strokeDashoffset}
          strokeLinecap="round"
          transform={`rotate(-90 ${radius} ${radius})`}
        />
      </svg>
      <div className="progress-text">{progress}%</div>
    </div>
  );
};

const Info = () => {
  return (
    <>
      <section id="about" className="content-section">
        <div className="about-container">
          <img src={GhostPic} alt="プロフィール写真" className="about-image" />
          <div className="about-text">
            <h1>About Me</h1>
            <p>
              こんにちは！私のページに来てくれてありがとうございます。
              私はアンチャルです。ここはインターネット上の小さな私の居場所です。
              Web開発が大好きで、自分のアイデアを形にして、役立つものを作るのが楽しみです。
              ぜひ気軽に繋がりましょう！
            </p>
            <button onClick={contact} className="button">Contacts</button>
          </div>
        </div>
      </section>

      <section id="skill" className="content-section">
        <h2>Skill</h2>
        <div className="skill-cube-container">
          {skills.map((skill, index) => (
            <div key={index} className="skill-cube">
              <div className="cube-face cube-front">{skill.icon}</div>
              <div className="cube-face cube-back">{skill.name}</div>
            </div>
          ))}
        </div>

        {/* Optional circular progress */}
        <div className="progress-container">
          {skills.map((skill, index) => (
            <CircularProgress key={index} progress={skill.progress} />
          ))}
        </div>
      </section>

      <section id="projects" className="content-section">
        <h2>プロジェクト</h2>
        <div className="project-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <img
                src={project.img}
                alt={project.name}
                className="project-img"
              />
              <div className="project-content">
                <p>{project.description}</p>
                <a href={project.link} target="_blank" rel="noopener noreferrer">
                  プロジェクトを見る
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

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
