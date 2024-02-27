// src/components/Contact.tsx
import React from 'react';
import "./Contact.css";


const Contact: React.FC = () => {
  return (
    <section id="contact">
      <h2>Contact</h2>
      <p>
        <a href="mailto:k663703@kansai-u.ac.jp">
            <img src="/images/R.png" alt="Mail" />
        </a>
        <a href="https://twitter.com/your_twitter_username">
          <img src="/images/logo-black.png" alt="Twitter" />
        </a>
        <a href="https://github.com/takeru4718">
          <img src="/images/github-icon.svg" alt="GitHub" />
        </a>
      </p>
    </section>
  );
};

export default Contact;
