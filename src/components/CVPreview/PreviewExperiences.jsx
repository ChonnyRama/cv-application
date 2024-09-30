import React from 'react'
import formatDate from '../FormatDate'

export default function PreviewExperiences({
  experiences,
}) {
  return (
    <div className='experiences-preview'>
      <span>Experience</span>
      <hr></hr>
      <div className='experiences-container'>
        {experiences.map((experience,index) => (
          <div className='exp-container'key={index}>
            <div className='experience-headline'>
              <div className='job-info'>
                <span className='job-title'>{experience.jobTitle || 'Cloud Engineer'}, </span>
                <span>{experience.company || 'Sprinklr'}</span>
                <br></br>
                <span>{experience.location || 'Austin, TX | Remote'}</span>
              </div>
              <div className='job-dates'>
                <span>{formatDate(experience.dateFrom) || 'Feb 2022'} - {formatDate(experience.dateTo) || 'Apr 2024'}</span>
              </div>
            </div>
            <ul>
              {experience.bullets.map((bullet,index) => (
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
