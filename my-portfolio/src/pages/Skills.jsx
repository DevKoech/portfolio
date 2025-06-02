import React from 'react'

const Skills = () => {

  const skills = [
  'JavaScript',
  'TypeScript',
  'React',
  'Next.js',
  'Node.js',
  'Express',
  'MongoDB',
  'MySQL',
  'PostgreSQL',
  'JWT',
  'OAuth',
  'REST APIs',
  'Docker',
  'Kubernetes',
  'AWS',
  'Git',
  'GitHub',
  'CI/CD',
  'Tailwind CSS',
  'HTML5',
  'CSS3',
  'SASS',
  'Figma',
  'Linux',
  'Nginx',
  'Webpack',
  'Bash',
  'Python',
  'Java',
  'C++',
  'OOP',
  'Data Structures & Algorithms',
  'Agile/Scrum'
];

  return (
    <section className="animate-fade-in-up">
      <h2 className="section-title gradient-text">Skills</h2>
      <div className="skills-list">
        {skills.map((skill, i) => (
          <span key={i} className="skill-tag">
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
}

export default Skills