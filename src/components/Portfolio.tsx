// src/components/Portfolio.tsx
import React from 'react';
import "./Portfolio.css";

const Portfolio: React.FC = () => {

    const projects = [
        { title: "3Dシューティングゲーム", description: "化け物から逃げつつ倒していくシューティングゲームです。使用技術はc言語。", isOriginal:true , image:`/images/ゲームプレイ2.png`,link:"https://github.com/takeru4718/3D-Shooting-Game"},
        { title: "天気アプリ", description: "都市を入力すると現在の天気を示します。使用技術はTypescript。", isOriginal:false, image:`/images/weatherApp.png`,link:"https://github.com/takeru4718/weather-app"},
        { title: "単語帳", description: "よくある単語帳です。次に示す入力した単語に応じて単語クイズを自動生成することができます。使用技術はJavascript。", isOriginal:true , image:`/images/word.png`,link:"https://github.com/takeru4718/tango-and-quiz"},
        { title: "単語クイズ", description: "単語の4択クイズを行うことができます。先の単語帳とセットで使えて、クイズを自動生成します。使用技術はJavascript。", isOriginal:true, image:`/images/quiz.png`,link:"https://github.com/takeru4718/tango-and-quiz"},
        { title: "オセロAI", description: "AIとオセロ対戦を行うことができます。使用技術はpython。", isOriginal:true , image:`/images/othello.png`,link:"https://github.com/takeru4718/othelloAI"},
    ];

  return (
    <section id="portfolio">
      <h2>Portfolio</h2>
      <h3 className="original">オリジナル作品</h3>
      <h3 className="not-original">模倣作品</h3>
      <div className = "project-container">
        {projects.map((project, index) => (
          <div
            key={index}
            className={`project-card ${project.isOriginal ? 'original-card' : 'non-original-card'}`}
          >
            <h3>{project.title}</h3>
            <img src={project.image} alt={`Image for ${project.title}`} />
            <p>{project.description}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer">Visit Project</a>
          </div>
        ))}
      </div>
      
    </section>
  );
};

export default Portfolio;
