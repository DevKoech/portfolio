import React from 'react'

const Home = () => {
   return return (
    <section className="hero-section">
      <div className="hero-content">
        <div className="hero-text">
          <h1 className="hero-title">
            Hi, I'm <span className="gradient-text">Emmanuel Koech</span>!
          </h1>
          <p className="hero-subtitle">
            A Full Stack Developer passionate about building web applications
          </p>
          <div className="hero-buttons">
            <a href="/projects" className="btn primary">View My Work</a>
            <a href="/contact" className="btn secondary">Get In Touch</a>
          </div>
        </div>
        <div className="hero-image">
          <div className="profile-placeholder">
            <div className="profile-avatar">
              <span className="avatar-text">EK</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home
