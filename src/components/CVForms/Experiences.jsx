import React, { useState } from 'react'

export default function Experiences({
  key,
  values,
  onExperiences,
}) {
  const [inputValues, setInputValues] = useState([])

  const handleExperience = (event) => {

  }

  return (
    <>
      <input
        type='text'
        placeholder='Job Title'
        value={values.jobTitle}
        onChange={handleExperience}
      />
    </>
  )
}
