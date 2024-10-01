import React from 'react'

export default function PreviewProjects({
  projects,
}) {
  return (
    <div className='projects-preview'>
      <span>Projects</span>
      <hr></hr>
      <div className='projects-container'>
        {projects.map((project,index) => (
          <div className='proj-container'key={index}>
            <div className='proj-headline'>
              <div className='proj-info'>
                <span className='proj-title'>{project.projectName || 'CV Application'} </span>
              </div>
              <div className='proj-link'>
                <span>{project.projectLink || 'Feb 2022'}</span>
              </div>
            </div>
            <ul>
              {project.bullets.map((bullet,index) => (
                <li key={index}>
                  {bullet}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  )
}
