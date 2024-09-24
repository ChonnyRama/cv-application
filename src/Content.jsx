import { useState } from 'react'
import BasicInfo from './components/CVForms/BasicInfo'
import Preview from './components/CVPreview/Preview'

export default function Content() {
    const [firstName, setFirstName] = useState(null)
  const [lastName, setLastName] = useState(null)
  const [email, setEmail] = useState(null)
  const [phone, setPhone] = useState(null)
  const [location, setLocation] = useState(null)
  const [title, setTitle] = useState(null)

    function onFirstName(event) {
        setFirstName(event.target.value)
    }

    function onLastName(event) {
        setLastName(event.target.value)
    }
  
  function onLocation(event) {
    setLocation(event.target.value)
  }
  
  function onEmail(event) {
      setEmail(event.target.value)
  }
  
  function onPhone(event) {
    setPhone(event.target.value)
  }

  function onTitle(event) {
    setTitle(event.target.value)
  }

  return (
    <>
      <div className="content">
        <section className="cv-form">
          <BasicInfo
            onFirstName={onFirstName}
            onLastName={onLastName}
            onLocation={onLocation}
            onEmail={onEmail}
            onPhone={onPhone}
            onTitle={onTitle}
            
          />
        </section>
        
        <section className='preview'>
          <Preview
            firstName={firstName}
            lastName={lastName}
            location={location}
            email={email}
            phone={phone}
            title={title}
        />
        </section>
      </div>
    </>
  )
}
