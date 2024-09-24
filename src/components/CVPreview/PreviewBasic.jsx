import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faLocationDot,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import './preview.css'

export default function PreviewBasic({
    firstName,
    lastName,
    location,
    email,
    phone,
    title,
}) {
    return (
    <>
        <div className='preview-basic'>
            <div className='basic-info'>
                <p className='full-name'>
                    {firstName} {lastName}
                    </p>
                    <h2>{title}</h2>
            </div>
            <div className='contact-info'> 
                <p>
                    <FontAwesomeIcon icon={faLocationDot} /> {location}
                </p>
                <p>
                    <FontAwesomeIcon icon={faEnvelope} /> {email}
                </p>
                <p>
                    <FontAwesomeIcon icon={faPhone} /> {phone}
                </p>
            </div>
        </div>
        <hr></hr>
    </> 
    )
}
