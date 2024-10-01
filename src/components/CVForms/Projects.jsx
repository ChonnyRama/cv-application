import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlus,
  faMinus,
} from "@fortawesome/free-solid-svg-icons";

export default function Projects({
  values,
  onProjects,
  onBullets,
  onAddBullet,
  onRemoveBullet,
}) {
  return (
    <div className='projects-form-container'>
      <input
        type='text'
        placeholder='Project Name'
        value={values.projectName}
        onChange={(event) => onProjects(event, 'projectName')}
      />
      <input
        type='link'
        placeholder='Project Link'
        value={values.link}
        onChange={(event) => onProjects(event, 'projectLink')}
      />
      {values.bullets.map((bullet, index) => (
        <textarea
          key={index}
          placeholder='Bullet'
          value={values.bullets[index]}
          onChange={(event) => onBullets(event, index)}
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
      
    </div>
  )
}
