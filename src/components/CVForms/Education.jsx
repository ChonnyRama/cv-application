import React from 'react'

export default function Education({
  values,
  onEducation
}) {
  return (
    <>
      <input
        type='text'
        value={values.school}
        placeholder='School Name'
        onChange={(event)=>onEducation(event,'school')}
      />
      <input
        type='text'
        value={values.degree}
        placeholder='Degree'
        onChange={(event)=>onEducation(event,'degree')}
      />
      <input
        type='date'
        value={values.graduationDate}
        placeholder='Graduation Date'
        onChange={(event)=>onEducation(event,'graduationDate')}
      />
    </>
  )
}
