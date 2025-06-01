import React from 'react'

  

const Skills = () => {
const skills = ['JavaScript', 'React', 'Node.js', 'MongoDB', 'Docker', 'AWS'];
  return (
     <section className="text-center">
          <h2 className="text-3xl font-bold text-primary">Skills</h2>
          <div className="flex flex-wrap justify-center gap-4 mt-6">
            {skills.map((skill, i) => (
              <span key={i} className="bg-accent text-white px-4 py-2 rounded-xl">
                {skill}
              </span>
            ))}
          </div>
        </section>
  );
}

export default Skills