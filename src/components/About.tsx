// src/components/About.tsx
import React from 'react';
import "./About.css";

const About: React.FC = () => {
  return (
    <section id="about">
      <h2></h2>
      <div className="card-container">

        <div className="left-column" >
            <div className="top-left-card">
                {/* 左上のカード */}
                <h2>自己紹介</h2>
                <p>
                    プログラミングが好きで、特にPythonやJavascriptをよく使います。
                    <br />私の関心はプログラミングの技術や知識に関する分野にあります。
                    <br />将来の夢はソフトウェアエンジニアとして、未来のロボット開発に携わることです。
                    {/* <br />人工知能を駆使し、万能な動作を実現するロボットの開発に貢献することを目指しています。 */}
                </p>
            </div>
            <div className="bottom-left-card">
                {/* 左下のカード */}
                <h2>私について</h2>
                <p>
                    私は関西大学で情報や電気についてを学んでいる3年生です。
                    <br />趣味はプログラミング、ゲーム、読書、スポーツ観戦です。
                </p>
            </div> 
        </div>
        
        <div className="right-card">
          {/* 右側のカード */}
          <h3>Right Card</h3>
          <p>編集中</p>
          <img src="/my-photo.jpg" alt="My Photo" />
        </div>
      </div>
    </section>
  );
};

export default About;
