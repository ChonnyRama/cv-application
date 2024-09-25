import React, { Fragment } from 'react'

export default function PreviewSkills({
  skills,
}) {
  return (
    <div className='skills-section'>
      <span>Skills</span>
      <hr></hr>
      <div className='skills-container'>
        {skills.map((skill,index) => (
          <div className="category" key={index}>
            <span className='line-start'>{skill.category || "Web Development: "}</span>
            <span>{skill.skills || "HTML, CSS, JavaScript, React"}</span>
          </div>
      ))}
      </div>
    </div>
  )
}
