import React from 'react'
import PreviewBasic from './PreviewBasic'
import PreviewSkills from './PreviewSkills'
import './preview.css'

export default function Preview({
    firstName,
    lastName,
    location,
    email,
    phone,
    title,
    skills,
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
        </section>
      </>
    )
}
