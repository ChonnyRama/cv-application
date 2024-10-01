import React from 'react'
import PreviewBasic from './PreviewBasic'
import PreviewSkills from './PreviewSkills'
import PreviewExperiences from './PreviewExperiences'
import PreviewEducation from './PreviewEducation'
import PreviewProjects from './PreviewProjects'
import './preview.css'

export default function Preview({
  firstName,
  lastName,
  location,
  email,
  phone,
  title,
  skills,
  experiences,
  projects,
  education,
}) {
    return (
      <>
        <section className='preview-section'>
          <PreviewBasic
            firstName={firstName}
            lastName={lastName}
            location={location}
            email={email}
            phone={phone}
            title={title}
          />
          <PreviewSkills
            skills={skills}
          />
          <PreviewExperiences
            experiences={experiences}
          />
          <PreviewProjects
            projects={projects}
          />
          <PreviewEducation 
            education={education}
          />
        </section>
      </>
    )
}
