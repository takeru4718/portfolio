// src/components/Introduce.tsx
import React from 'react';
import "./MySkills.css";

const MySkills: React.FC = () => {

  const skillsData = [
    { name: 'C', icon: 'c.svg' },
    { name: 'Python', icon: 'python.svg' },
    { name: 'HTML', icon: 'html-5.svg' },
    { name: 'CSS', icon: 'css-3.svg' },
    { name: 'JavaScript', icon: 'javascript.svg' },
    { name: 'React', icon: 'react.svg' },
    { name: 'Node.js', icon: 'nodejs.svg' },
    { name: 'TypeScript', icon: 'typescript-icon.svg' },
    { name: 'Java', icon: 'java.svg' },
    // 他のスキルを追加
  ];


  return (
    <section id="my-skills">
      <h2>My Skills</h2>
      <div className="skills-container">
        {skillsData.map((skill, index) => (
          <div className="skill-card" key={index}>
            <img
              src={`/images/${skill.icon}`} // アイコン画像のパスを指定
              alt={`${skill.name} icon`}
              className="skill-icon"
            />
            <p>{skill.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MySkills;