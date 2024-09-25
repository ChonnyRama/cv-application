import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faLocationDot,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";

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
            <div className='basic-info-preview'>
                <p className='full-name'>
                    {firstName || "Chonny"} {lastName || "Martin"}
                    </p>
                    <h2>{title || "SWE"}</h2>
            </div>
            <div className='contact-info'> 
                <p>
                    <FontAwesomeIcon icon={faLocationDot} /> {location || "Durham"}
                </p>
                <p>
                    <FontAwesomeIcon icon={faEnvelope} /> {email || "hitsugiya@gmail.com"}
                </p>
                <p>
                    <FontAwesomeIcon icon={faPhone} /> {phone || "919-123-4567"}
                </p>
            </div>
        </div>
    </> 
    )
}
