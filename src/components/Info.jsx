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

const services = [
  {
    name: "Web Design",
    description: `私は、視覚的に魅力的で直感的なウェブデザインを提供します。
                  ユーザーのニーズを最優先に考え、ブランドの個性を反映したデザインを作成します。
                  モダンなUI/UX設計で、クリーンで使いやすいウェブ体験を実現します。
                  レスポンシブデザインで、どんなデバイスでも最適な表示を提供します。`,
  },
  {
    name: "Frontend Development",
    description: `HTML5、CSS3、JavaScriptを活用して、
                  インタラクティブなウェブページを開発します。クライアントのビジョンを形にし、
                  堅牢で維持管理しやすいコードを提供します。
                  クロスブラウザ対応を意識し、さまざまなデバイスでの最適化を行います。`,
  },
  {
    name:"React Applications",
    description:`Reactを用いて、インタラクティブでパフォーマンスの高いシングルページアプリケーション（SPA）を開発します。
                状態管理やルーティングの効率的な実装を通じて、
                スムーズでスケーラブルなアプリケーションを提供します。`,
  },
];

const Info = () => {
  return (
    <>
      <section id="about" className="content-section">
        <div className="about-container">
          <img src={GhostPic} alt="プロフィール写真" className="about-image" />
          <div className="about-text">
            <h1>About Me</h1>
            <p>
              これまで7年以上にわたりホテル業界で接客業務に従事し、
              柔軟な対応力と多国籍環境でのコミュニケーション力を身につけました。
              現在はWebエンジニアを目指して、HTML、CSS、JavaScript、Reactなどを独学で学びながら、
              Webアプリの開発やポートフォリオ制作にも取り組んでいます。
              学びながら成長していける柔軟性と、常に挑戦する姿勢を大切にしています。
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
              <img
                src={project.img}
                alt={project.name}
                className="project-img"
              />
              <div className="project-content">
                <p>{project.description}</p>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  プロジェクトを見る
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
      {/*
        <section id="service" className="content-section">
        <h2>My Services</h2>
        <div className="service-container">
          {services.map((services, index) =>(
            <div key={index} className="service-card">
              <div className="service-icon">
              </div>
              <h3>{services.name}</h3>
              <p>{services.description}</p>
            </div>
          ))}
        </div>
      </section>
      */}
      
      <section id="socials" className="content-section">
        <h2>Contacts</h2>
        <div className="social-icons">
          <a
            href="https://line.me/ti/p/aJnU8iunpG"
            target="_blank"
            rel="noopener noreferrer"
          >
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
