import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { SiLine } from "react-icons/si"; // Line icon
import { FaHtml5, FaCss3Alt, FaJs, FaReact } from "react-icons/fa";
import "./Info.css";
import Image01 from "../assets/Photo/backimg.jpg";
import GhostPic from "../assets/photo/GhostPic.jpg";

const skills = [
  { name: "HTML", icon: <FaHtml5 style={{ color: "#f16529" }} /> },
  { name: "CSS", icon: <FaCss3Alt style={{ color: "#2965f1" }} /> },
  { name: "JavaScript", icon: <FaJs style={{ color: "#f7df1e" }} /> },
  { name: "React", icon: <FaReact style={{ color: "#61dafb" }} /> },
];

const projects = [
  {
    name: "Sample One",
    description: "シンプルで洗練されたウェブデザインプロジェクト。",
    link: "https://cyobi164.github.io/yoshida/",
    img: Image01,
  },
];

const Info = () => {
  return (
    <>
      <section id="about" className="content-section">
        <div className="about-container">
          <img src={GhostPic} alt="プロフィール写真" className="about-image" />
          <div className="about-text">
            <h1>自己紹介</h1>
            <p>
              私はクリーンで使いやすいウェブサイトを構築することに情熱を持つ
              フロントエンド開発者です。HTML、CSS、JavaScript を使用し、
              レスポンシブで魅力的な体験を提供することを目指しています。
              常に学び続け、新しいスキルを身につけることが好きです。
            </p>
            <p>
              ・ 言語: 英語、日本語 <br />
              ・ スキル: フロントエンド開発、ウェブデザイン <br />
              ・ 探しているもの: フリーランス案件 & コラボレーション
            </p>
          </div>
        </div>
      </section>

      <section id="skill" className="content-section">
        <h2>スキル</h2>
        <div className="skill-container">
          {skills.map((skill, index) => (
            <div key={index} className="skill-card">
              <div className="skill-icon">{skill.icon}</div>
              <h3>{skill.name}</h3>
            </div>
          ))}
        </div>
      </section>

      <section id="projects" className="content-section">
        <h2>プロジェクト</h2>
        <div className="project-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <img src={project.img} alt={project.name} className="project-img" />
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
        <h2>お問い合わせ</h2>
        <p>新しいプロジェクトやコラボレーションのご相談をお待ちしています。</p>
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
