import React from 'react'
import formatDate from '../FormatDate'

export default function PreviewEducation({ education }) {
  return (
    <div className='education-preview'>
      <span>Education</span>
      <hr></hr>
      {education.map((school, index) => (
        <div
          className='school-preview'
          key={index}
        >
          <div className='school-line'>
            <span>{school.school || 'The University of North Carolina at Chapel Hill'}</span>
            <br></br>
            <span>{school.degree || 'B.A. in Computer Science'} </span>
          </div>
          <span>{formatDate(school.graduationDate) || 'May 2020'}</span>
        </div>
      ))}
    </div>
  )
}
