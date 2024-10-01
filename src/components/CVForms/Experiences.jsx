import React, { useState } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlus,
  faMinus,
} from "@fortawesome/free-solid-svg-icons";

export default function Experiences({
  key,
  values,
  onExperiences,
  onBullets,
  onAddBullet,
  onRemoveBullet,
}) {
  const [checked, setChecked] = useState(false)
  
  function handleCheck(event) {
    setChecked(!checked)
    if (!checked) {
      onExperiences({target: {value: 'Present'}},'dateTo')
    } else {
      onExperiences({target: {value: ''}},'dateTo')
    }
  }

  return (
    <>
      <input
        type='text'
        placeholder='Job Title'
        value={values.jobTitle}
        onChange={(event) => onExperiences(event,'jobTitle')}
      />
      <input
        type='text'
        placeholder='Company'
        value={values.company}
        onChange={(event) => onExperiences(event,'company')}
      />
      <input
        type='text'
        placeholder='location'
        value={values.location}
        onChange={(event)=> onExperiences(event,'location')}
      />
      <input
        type='date'
        placeholder='Date From'
        value={values.dateFrom}
        onChange={(event)=> onExperiences(event,'dateFrom')}
      />
      <label>
        Present?
        <input
          type='checkbox'
          checked={checked}
          onChange={handleCheck}
        />
      </label>
      {!checked && (
        <input
          type='date'
          placeholder='Date To'
          value={values.dateTo}
          onChange={(event)=> onExperiences(event,'dateTo')}
        />
      )}
      {values.bullets.map((bullet, index) => (
        <textarea
          key={index}
          type='text'
          placeholder={'Bullet #' + (index + 1)}
          value={values.bullets[index]}
          onChange={(event) => onBullets(event,index)}
        />
      ))}
      <div className='bullet-buttons'>
        <button
          onClick={onRemoveBullet}
        >
          <FontAwesomeIcon icon={faMinus} />
          <span> Bullet</span>
        </button>
        <button
          onClick={onAddBullet}
        >
        <FontAwesomeIcon icon={faPlus} />
        <span> Bullet</span>
      </button>
      </div>
      

    </>
  )
}
