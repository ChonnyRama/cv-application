import React from 'react'
import PreviewBasic from './PreviewBasic'

export default function Preview({
    firstName,
    lastName,
    location,
    email,
    phone,
    title,
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
        </section>
      </>
  )
}
