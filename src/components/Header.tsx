// src/components/Header.tsx
import React from 'react';
import './Header.css';

const Header: React.FC = () => {
  return (
    <header>
        <div className="header-container">
           <h1>平木 尊</h1>
            <nav>
                <ul className="nav-list">
                    <li><a href="#about">About</a></li>
                    <li><a href="#portfolio">Portfolio</a></li>
                    <li><a href="#my-skills">MySkills</a></li>
                    <li><a href="#services">Services</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </nav>
        </div>
    </header>
  );
};

export default Header;
