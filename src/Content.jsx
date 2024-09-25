import { useState } from 'react'
import BasicInfo from './components/CVForms/BasicInfo'
import Preview from './components/CVPreview/Preview'
import Skills from './components/CVForms/Skills'
import Experiences from './components/CVForms/Experiences'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlus,
  faMinus,
} from "@fortawesome/free-solid-svg-icons";

export default function Content() {
  const [firstName, setFirstName] = useState(null)
  const [lastName, setLastName] = useState(null)
  const [email, setEmail] = useState(null)
  const [phone, setPhone] = useState(null)
  const [location, setLocation] = useState(null)
  const [title, setTitle] = useState(null)
  const [categories, setCategories] = useState([
    {
    category: '',
    skills: '',
    },
  ])
  const [experiences, setExperiences] = useState([
    {
      jobTitle: '',
      company: '',
      location: '',
      dates: '',
      bullets:'',
    },
  ])

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

  function onCategory(event, index) {
    const newCategories = [...categories]
    newCategories[index].category = event.target.value
    setCategories(newCategories)
  }

  function onSkills(event, index) {
    const newCategories = [...categories]
    newCategories[index].skills = event.target.value
    setCategories(newCategories)
  }
  
  function addCategory() {
    setCategories([...categories, {category:'',skills:''}])
  }

  function removeCategory() {
    const newCategories = [...categories]
    newCategories.pop();
    setCategories(newCategories)
  }

  function handleExperiences(event, index, field) {
    const newExperiences = [...experiences]
    newExperiences[index][field] = event.target.value
    setExperiences(newExperiences)

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
          <div className='skills'>
            <h1>Skills</h1>
            {categories.map((category, index) => (
              <Skills
                key={index}
                category={categories[index].category}
                skills={categories[index].skills}
                onCategory={(event) => onCategory(event,index)}
                onSkills={(event) => onSkills(event,index)}
              />
            )
            )}
            <div className='skills-buttons'>
              <button
                onClick={removeCategory}>
                <FontAwesomeIcon icon={faMinus} />
              </button>
              <button
                onClick={addCategory}>
                <FontAwesomeIcon icon={faPlus} />
              </button>
            </div>
          </div>
          <div className='experience'>
            <h1>Experience</h1>
            {experiences.map((experience, index) => (
              <Experiences
                key={index}
                values={experience[index]}
                onExperiences={handleExperiences}
              />
            ))}
          </div>
        </section>
        
        <section className='preview'>
          <Preview
            firstName={firstName}
            lastName={lastName}
            location={location}
            email={email}
            phone={phone}
            title={title}
            skills={categories}
        />
        </section>
      </div>
    </>
  )
}
