import React from 'react'

const Skills = () => {

  const skillCategories = [
    {
      title: 'Frontend Development',
      skills: [
        'JavaScript',
        'TypeScript',
        'React',
        'Next.js',
        'HTML5',
        'CSS3',
        'SASS',
        'Tailwind CSS'
      ]
    },
    {
      title: 'Backend Development',
      skills: [
        'Node.js',
        'Express',
        'MongoDB',
        'MySQL',
        'PostgreSQL',
        'JWT',
        'OAuth',
        'REST APIs'
      ]
    },
    {
      title: 'DevOps & Tools',
      skills: [
        'Docker',
        'Kubernetes',
        'AWS',
        'Git',
        'GitHub',
        'CI/CD',
        'Linux',
        'Nginx',
        'Webpack',
        'Bash'
      ]
    },
    {
      title: 'Programming Languages',
      skills: [
        'Python',
        'Java',
        'C++'
      ]
    },
    {
      title: 'Design & Other',
      skills: [
        'Figma',
        'OOP',
        'Data Structures & Algorithms',
        'Agile/Scrum'
      ]
    }
  ];

  return (
    <section className="animate-fade-in-up">
      <h2 className="section-title gradient-text">Skills</h2>
      <div className="skills-container">
        {skillCategories.map((category, categoryIndex) => (
          <div key={categoryIndex} className="skill-category">
            <h3 className="category-title">{category.title}</h3>
            <div className="skills-grid">
              {category.skills.map((skill, skillIndex) => (
                <span key={skillIndex} className="skill-tag">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills
