import React from 'react'

const About = () => {
  const highlights = [
    {
      icon: '🚀',
      title: 'Full Stack Expertise',
      description: 'Proficient in MERN stack development with modern web technologies'
    },
    {
      icon: '☁️',
      title: 'Cloud & DevOps',
      description: 'Experience with AWS, Docker, and CI/CD pipelines'
    },
    {
      icon: '💡',
      title: 'Problem Solver',
      description: 'Passionate about creating scalable, user-focused solutions'
    },
    {
      icon: '📈',
      title: 'Continuous Learner',
      description: 'Always exploring new technologies and improving skills'
    }
  ];
  return (
    <section className="about-section">
      <div className="about-header">
        <h2 className="section-title gradient-text">About Me</h2>
        <p className="about-intro">
          Passionate Computer Science student and software developer creating innovative solutions
        </p>
      </div>

      <div className="about-content">
        <div className="about-text-section">
          <div className="about-paragraph">
            <p>
              I'm a passionate and results-driven Computer Science student specializing in software development.
              I have hands-on experience building full-stack applications using the MERN stack (MongoDB, Express.js, React, Node.js),
              and I enjoy creating scalable, user-focused solutions that solve real-world problems.
            </p>
          </div>

          <div className="about-paragraph">
            <p>
              My technical skillset extends into DevOps and cloud engineering, where I've worked with tools and platforms such as
              Docker, AWS, and CI/CD pipelines to streamline development workflows and improve system reliability.
            </p>
          </div>

          <div className="about-paragraph">
            <p>
              I'm particularly interested in building innovative systems, including real-time applications and data-driven platforms.
              Recently, I've been working on projects that incorporate live updates, authentication systems, and intelligent data processing.
            </p>
          </div>

          <div className="about-paragraph">
            <p>
              Beyond coding, I'm a continuous learner who enjoys exploring new technologies, improving problem-solving skills,
              and collaborating on impactful projects. My goal is to grow into a well-rounded software engineer capable of
              delivering efficient, secure, and scalable systems.
            </p>
          </div>
        </div>

        <div className="about-highlights">
          {highlights.map((highlight, index) => (
            <div key={index} className="highlight-card">
              <div className="highlight-icon">{highlight.icon}</div>
              <h3 className="highlight-title">{highlight.title}</h3>
              <p className="highlight-description">{highlight.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default About
