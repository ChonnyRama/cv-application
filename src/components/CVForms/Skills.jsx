import React, { useState } from 'react'

export default function Skills({
  onCategory,
  onSkills,
  category,
  skills,
}) {
  return (
    <>
      <input type='text'
        placeholder='Category'
        value={category}
        onChange={onCategory} />
      <input type='text'
        placeholder='Skills'
        value={skills}
        onChange={onSkills} />
    </>
  )
}
