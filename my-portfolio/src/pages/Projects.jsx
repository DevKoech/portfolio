import React from 'react'

const Projects = () => {
  const projects = [
    {
      title: "LightsOut",
      description: "Crowdsourced power availability tracker using MERN stack.",
      tech: ["React", "Node.js", "Express", "MongoDB", "Google Maps API", "JWT"],
      github: "https://github.com/yourusername/lightsout",
    },
    {
      title: "WhatsApp Clone",
      description: "Real-time chat app using Node.js, MongoDB, Pusher.",
      tech: ["React", "Node.js","Express", "MongoDb","Pusher"],
      github: "https://github.com/yourusername/whatsapp-clone",
    },
    {
      title: "Hospital Management System",
      description: "A role-based RESTful system for managing patients, admissions, lab tests, billing, and staff using MySQL and Node.js.",
      tech: ["React", "Node.js", "Express", "MySQL", "JWT", "RBAC"],
      github: "https://github.com/yourusername/hospital-system",
      demo: "",
    },
    {
      title: "Online Art Gallery",
      description: "A platform for artists to showcase their work with dynamic art valuation based on user interaction.",
      tech: ["React", "Node.js", "Express", "MongoDB", "Cloudinary", "JWT"],
      github: "https://github.com/yourusername/art-gallery-app",
      demo: "",
    },
    {
      title: "Developer Portfolio",
      description: "My personal portfolio site showcasing my skills, projects, and resume with a cool purplish UI aesthetic.",
      tech: ["React", "Tailwind CSS", "Framer Motion"],
      github: "https://github.com/yourusername/portfolio-site",
      demo: "https://yourname.vercel.app",
    },
];

  return (
    <section className="animate-fade-in-up">
      <h2 className="section-title gradient-text">Projects</h2>
      <div className="projects-list">
        {projects.map((project, index) => (
          <div key={index} className="card">
            <h3 className="project-title">{project.title}</h3>
            <p className="project-desc">{project.description}</p>
            <div className="project-tech">
              {project.tech.map((tech, i) => (
                <span key={i} className="skill-tag">{tech}</span>
              ))}
            </div>
            <div className="project-links">
              <a href={project.github} target="_blank" rel="noopener noreferrer" className="btn">GitHub</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects