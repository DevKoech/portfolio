import React from 'react'

const Projects = () => {
  const projects = [
    {
      title: "LightsOut",
      description: "Crowdsourced power availability tracker using MERN stack.",
      tech: ["React", "Node.js", "MongoDB"],
      github: "https://github.com/yourusername/lightsout",
      demo: "https://lightsout-demo.vercel.app"
    },
    {
      title: "WhatsApp Clone",
      description: "Real-time chat app using Node.js, MongoDB, Pusher.",
      tech: ["React", "Express", "Pusher"],
      github: "https://github.com/yourusername/whatsapp-clone",
      demo: "https://whatsapp-clone.vercel.app"
    }
  ];
return (
     <section>
      <h2 className="text-3xl font-bold mb-6 text-center text-primary">Projects</h2>
      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <div key={index} className="bg-white shadow-lg p-6 rounded-2xl">
            <h3 className="text-xl font-semibold text-primary">{project.title}</h3>
            <p className="mt-2 mb-4 text-gray-700">{project.description}</p>
            <div className="flex flex-wrap gap-2 text-sm text-white">
              {project.tech.map((tech, i) => (
                <span key={i} className="bg-accent px-2 py-1 rounded-md">{tech}</span>
              ))}
            </div>
            <div className="mt-4 flex gap-4">
              <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">GitHub</a>
              <a href={project.demo} target="_blank" rel="noopener noreferrer" className="text-green-600 hover:underline">Live Demo</a>
            </div>
          </div>
        ))}
      </div>
    </section>
);
}

export default Projects